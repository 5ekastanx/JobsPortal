from rest_framework import generics, permissions, status
from rest_framework.response import Response
from django.db.models import Q
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from .models import Vacancy, CustomUser, ResumeApplication
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import VacancySerializer, CustomUserSerializer, ResumeApplicationSerializer



class CreateTokenView(APIView):
    permission_classes = [AllowAny]  # Доступ разрешён для всех

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        # Аутентификация пользователя
        user = authenticate(username=username, password=password)
        if user:
            # Получение или создание токена
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Неверные учетные данные'}, status=status.HTTP_400_BAD_REQUEST)




class CustomUserListCreateAPIView(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    

class CustomUserRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]






class VacancyListCreateAPIView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  

    def list(self, request, *args, **kwargs):
        user = request.user
        queryset = self.get_queryset().filter(Q(user=user))
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)



class VacancyRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pk'

    def retrieve(self, request, *args, **kwargs):
        user = request.user
        vacancy: Vacancy = self.get_object()

        if vacancy.user == user or vacancy.access.contains(user):
            return Response(self.serializer_class(vacancy).data)
        else:
            return Response(
                data={"detail": "Увас недостаточно прав для выполнения данного действия."},
                status=status.HTTP_403_FORBIDDEN
            )
        
    def update(self, request, *args, **kwargs):
        user = request.user
        vacancy: Vacancy = self.get_object()

        if vacancy.user == user:
            return super().update(request, *args, **kwargs)
        else:
            return Response(
                data={"detail": "У вас недостаточно прав для выполнения данного действия."},
                status=status.HTTP_403_FORBIDDEN
            )


    def destroy(self, request, *args, **kwargs):
        user = request.user
        document: Document = self.get_object()

        if document.user == user:
            return super().destroy(request, *args, **kwargs)
        else:
            return Response(
                data={"detail": "У вас недостаточно прав для выполнения данного действия."},
                status=status.HTTP_403_FORBIDDEN)
        



class ResumeListCreateAPIView(generics.ListCreateAPIView):
    queryset = ResumeApplication.objects.all()
    serializer_class = ResumeApplicationSerializer
    parser_classes = [MultiPartParser, FormParser]  # Для обработки файлов
    permission_classes = [AllowAny]  # Или [permissions.IsAuthenticated] если требуется авторизация

    def perform_create(self, serializer):
        # Если нужно привязать к пользователю
        if self.request.user.is_authenticated:
            serializer.save(user=self.request.user)
        else:
            serializer.save()
    

class ResumeRetrieveDestroyAPIView(generics.RetrieveDestroyAPIView):
    queryset = ResumeApplication.objects.all()
    serializer_class = ResumeApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'pk'