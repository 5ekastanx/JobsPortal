from django.urls import path
from .views import *

urlpatterns = [
    path('jobs/', VacancyListCreateAPIView.as_view(), name='jobs-list'),
    path('jobs/<int:pk>/', VacancyRetrieveUpdateDestroyAPIView.as_view(), name='jobs-detail'),
    
    path('users/', CustomUserListCreateAPIView.as_view(), name='users-list'),
    path('users/<int:pk>/', CustomUserRetrieveUpdateDestroyAPIView.as_view(), name='users-detail'),
    
    path('resume-application/', ResumeListCreateAPIView.as_view(), name='resume-application-list'),
    path('resume-application/<int:pk>/', ResumeRetrieveDestroyAPIView.as_view(), name='resume-application-detail'),
]
