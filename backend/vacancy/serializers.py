from rest_framework import serializers
from .models import Vacancy, CustomUser, ResumeApplication

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'


class VacancySerializer(serializers.ModelSerializer):
    user = CustomUserSerializer(read_only=True)
    class Meta:
        model = Vacancy
        fields = '__all__'


class ResumeApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumeApplication
        fields = '__all__'