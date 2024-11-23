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
import requests

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
        
        # data = {
        #     0: {
        #         "audio": "static/audio/1_VXFL.mp3", 
        #         "poster": "https://media.gettyimages.com/id/613443380/video/p…20&c=wNg1jkQME_6ccPG6-zmT-G0YmPVoJxHdZRxQVKQRSRg=", 
        #         "text": "photosynthesis is the process by which green plant…arbon dioxide, and water into glucose and oxygen.", 
        #         "video": "https://media.gettyimages.com/id/613443380/video/p…20&c=3GibCDl-IKJjm1ChNa2yooPKCKDZ53sCSg32Ihsh-T8="
        #         },
        #     1: {
        #         "audio": "static/audio/2_QA00.mp3", 
        #         "poster": "https://media.gettyimages.com/id/618590521/video/c…20&c=hi-_M-PUEqrJfti2LijF1aAoIEl2YVf_VTkIb9cBylo=", 
        #         "text": "it takes place in the chloroplasts of plant cells,…ecifically in the thylakoid membranes and stroma.", 
        #         "video": "https://media.gettyimages.com/id/618590521/video/c…20&c=y0zHIlQ9mTdOQ0MJRIhpHDxKJ3T-up7dKj3uocnvKj0="
        #         },
        #     2: {
        #         "audio": "static/audio/3_BES8.mp3", 
        #         "poster": "https://media.gettyimages.com/id/1065633832/video/…20&c=q-MnG5O8maonRFLLJVT0cJW63anl52dJ9TT7AtujSjo=", 
        #         "text": "the key components involved in photosynthesis are …d enzymes that facilitate the chemical reactions.", 
        #         "video": "https://media.gettyimages.com/id/1065633832/video/…20&c=Qz3Y0dmf1ytLLuWcewJ2rtupD5geuR5HnoG4sYn7-Ww="
        #         },
        #     3: {
        #         "audio": "static/audio/4_MR0Y.mp3", 
        #         "poster": "https://media.gettyimages.com/id/1150661518/video/…20&c=jyub0IrR9uVtjO9t3w-WTbdEpmh7rURuxgM6KsyboXo=", 
        #         "text": "the light-dependent reactions occur in the thylako…orption of light energy to produce atp and nadph.", 
        #         "video": "https://media.gettyimages.com/id/1150661518/video/…20&c=y01PACfl44y9Q1rNIz6JjWKXsHjAjdYzl5Z1i_9H9HA="
        #         },
        #     4: {
        #         "audio": "static/audio/5_13CY.mp3", 
        #         "poster": "", 
        #         "text": "the light-independent reactions, also known as the… carbon dioxide into glucose using atp and nadph.", 
        #         "video": ""
        #         },
        #     5: {
        #         "audio": "static/audio/6_ZCPT.mp3", 
        #         "poster": "", 
        #         "text": "photosynthesis not only provides energy for plants…sential for the survival of all living organisms.", 
        #         "video": ""
        #         },
        #     6: {
        #         "audio": "static/audio/7_MTUY.mp3", 
        #         "poster": "https://media.gettyimages.com/id/1279058397/video/…20&c=t_GrlvBDgrGECA71hycX31LwFk-K0d49FD_yhTKAAvQ=", 
        #         "text": "the overall equation for photosynthesis is: 6co2 + 6h2o + light energy → c6h12o6 + 6o2.", 
        #         "video": "https://media.gettyimages.com/id/1279058397/video/…20&c=QueFrXouhCmRRrJmWjUDJDKY-SngZOSpf5cyCQFcEy4="
        #         }
        # }
        
        
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
