import g4f
from gtts import gTTS
import random
import string
import concurrent.futures
import cloudscraper
from easygoogletranslate import EasyGoogleTranslate
from GenerateVoice import GenerateVoice
from dotenv import load_dotenv
import os
import time

load_dotenv()


class GenerateVideo:
    def __init__(self, topic, ELEVEN_LABS_API, language="en"):
        self.translator = EasyGoogleTranslate(
            source_language="en",
            target_language=language,
            timeout=10
        )
        self.language = language
        self.scene_count = ""  # Specify the desired scene count
        self.topic = topic
        self.prompt = f"Write {self.scene_count} concise points on topic: '{self.topic}'"
        self.voicegen = GenerateVoice(ELEVEN_LABS_API)
        self.executor = concurrent.futures.ThreadPoolExecutor()

    def process_text(self, text, index):
        trans_text = self.translate_language(text)
        video = self.search_video(text)
        audio = self.generate_audio(trans_text, f'static/audio/{index}_{self.generate_random_4_chars()}.mp3')
        return {
            "text": text,
            "video": video,
            "audio": audio
        }

    def process_content_list(self, content_list):
        data = {}
        with concurrent.futures.ThreadPoolExecutor() as executor:
            futures = [executor.submit(self.process_text, text, index) for index, text in enumerate(content_list)]
            for future in concurrent.futures.as_completed(futures):
                try:
                    result = future.result()
                    data[len(data)] = result
                except Exception as e:
                    print(f"Error processing text: {e}")
        return data

    def generate_content(self, text):
        try:
            response = g4f.ChatCompletion.create(model="gpt-4o", messages=[{"role": "user", "content": text}])
            raw_content_list = response.split("\n")
            content_list = []
            for raw_content in raw_content_list:
                content = raw_content.strip().lower()
                if content != "" and "any more questions" not in content and "certainly!" not in content:
                    if ". " in content[:5]:
                        content = content.split(".", 1)[-1].strip()
                    content_list.append(content.strip())
            return content_list
        except Exception as e:
            print("Error: ", e)
            return []

    def translate_language(self, text):
        if self.language == "en":
            return text
        try:
            result = self.translator.translate(text)
            print("Translated: ", result)
            return result
        except Exception as e:
            print(f"Error translating text: {e}")
            return text

    def generate_random_4_chars(self):
        return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(4))

    def search_video(self, text):
        url = f'https://www.gettyimages.in/videos/{text.lower().strip().replace(" ", "-").replace(".", "")}?assettype=film&excludenudity=false&agreements=&phrase={text.replace(" ", "%20")}&sort=mostpopular'
        scraper = cloudscraper.create_scraper()
        html = scraper.get(url).text
        try:
            if '"filmPreviewUrl":"' in html:
                link = html.split('"filmPreviewUrl":"')[1].split('"')[0].replace("\\u0026", "&")
                link_part = link.split(".mp4")[0] + ".jpg"
                poster_img = link_part + html.split(link_part)[1].split('"')[0].replace("\\u0026", "&")
            else:
                link = ""
                poster_img = ""
        except Exception as e:
            print(f"Error [search_video]: {e}")
            link = ""
            poster_img = ""
        return link, poster_img

    def generate_audio(self, text, filename, language="en"):
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        try:
            for attempt in range(3):  # Retry up to 3 times
                try:
                    self.voicegen.convert_text_to_speech(text, filename)
                    print(f"{filename} generated using ElevenLabs")
                    return filename
                except requests.exceptions.HTTPError as e:
                    if e.response.status_code == 429:  # Too Many Requests
                        print("Rate limit reached. Retrying after a delay...")
                        time.sleep(10)  # Wait before retrying
                    else:
                        raise  # Raise other HTTP errors
            print("Failed to generate audio with ElevenLabs after retries.")
            raise Exception("ElevenLabs API failed")
        except Exception:
            tts = gTTS(text=text, lang=language, slow=False)
            tts.save(filename)
            print(f"{filename} generated using GTTS")
        return filename

    def start(self):
        data = {}
        content_list = self.generate_content(self.prompt)
        print(content_list)

        try:
            data = self.process_content_list(content_list)
        except Exception as e:
            print(f"Error during processing content list: {e}")
            return {}

        for index, text in enumerate(content_list):
            trans_text = self.translate_language(text)
            video_link, poster_link = self.search_video(text)
            audio_file = self.generate_audio(trans_text, f'static/audio/{index}_{self.generate_random_4_chars()}.mp3')
            data[index] = {
                "text": text,
                "video": video_link,
                "poster": poster_link,
                "audio": audio_file,
            }
            time.sleep(10)  # Rate-limit to avoid excessive requests

        return data


if __name__ == "__main__":
    ELEVEN_LABS_API = os.environ.get('ELEVEN_LABS_API')
    test = GenerateVideo("photosynthesis", ELEVEN_LABS_API, "en")
    print(test.start())
