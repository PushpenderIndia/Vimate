from django.urls import path
from .views import PlayerDataView, GenerateVideoAPI

urlpatterns = [
    path('player_data/', PlayerDataView.as_view(), name='player_data'),
    path('generate_video/', GenerateVideoAPI.as_view(), name='generate_video'),
]