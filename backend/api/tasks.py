from celery import shared_task
from utils.GenerateVideo import GenerateVideo
import backend.settings as settings

@shared_task(bind=True)
def generate_video(self, video_topic, pdf_file_path, language_code):
    language_code = "en"
    test = GenerateVideo(video_topic, settings.ELEVEN_LABS_API, language_code)
    video_scenes = test.start()
    print(video_scenes)

    return {'status': 'done'}