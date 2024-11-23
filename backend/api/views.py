from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# from .utils import Player, GenerateVideo
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
        lang = request.query_params.get('lang', 'hi')
        videogen = GenerateVideo(topic, ELEVEN_LABS_API, lang)
        data_json = videogen.start()
        scene_length = len(data_json)
        return Response({'data_json': data_json, 'scene_length': scene_length})
