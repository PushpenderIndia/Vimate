from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .tasks import generate_video
from drf_spectacular.utils import extend_schema, OpenApiParameter
import os

ELEVEN_LABS_API = os.getenv('ELEVEN_LABS_API')

class PlayerDataView(APIView):
    permission_classes = [IsAuthenticated]

    @extend_schema(
        summary="Get Player Data",
        description="Retrieve data for the player module.",
        responses={200: dict},
    )
    def get(self, request):
        # player_data = Player()
        # return Response(player_data.get(""))
        return Response({})

class GenerateVideoAPI(APIView):
    permission_classes = [IsAuthenticated]

    @extend_schema(
        summary="Generate Video",
        description="Generate video based on the given topic and language.",
        parameters=[
            OpenApiParameter("topic", str, description="The topic for video generation"),
            OpenApiParameter("lang", str, description="The language code (e.g., 'en', 'hi')")
        ],
        responses={200: dict},
    )
    def get(self, request):
        topic = request.query_params.get('topic', 'Photosynthesis')
        language_code = request.query_params.get('lang', 'hi')
        language_symbols = {
            "en": "English",
            "es": "Spanish",
            "fr": "French",
            "hi": "Hindi",
            "ar": "Arabic",
            "bn": "Bengali",
            "te": "Telugu",
            "mr": "Marathi",
            "ta": "Tamil",
            "ur": "Urdu",
            "gu": "Gujarati",
            "kn": "Kannada",
            "or": "Odia",
            "pa": "Punjabi"
        }
        if language_code not in language_symbols:
            return Response({'error': f'Invalid language code, valid codes are: {list(language_symbols.keys())}'}, status=400)
        else:
            task_result = generate_video.apply_async(args=[topic, pdf_file_path, language_code])

            task_id = task_result.id
            return Response({'progress_id': task_id})
