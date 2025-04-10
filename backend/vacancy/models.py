from django.db import models
from django.contrib.auth.models import AbstractUser

    
class CustomUser(AbstractUser):
    image = models.ImageField(upload_to='users_images/', null=True, blank=True)
    age = models.PositiveIntegerField(null=True, blank=True)
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

        

class Vacancy(models.Model):

    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='user',
        verbose_name='Пользователь',
        null=True,
        blank=True
    )



    level = models.CharField(
        max_length=20,
        verbose_name="Уровень",
        help_text="Например: Junior, Middle, Senior"
    )
    title = models.CharField(
        max_length=255,
        verbose_name="Название вакансии",
        help_text="Название должности, например: ГИС-специалист"
    )
    company = models.CharField(
        max_length=255,
        verbose_name="Компания",
        help_text="Название компании, предоставляющей вакансию"
    )
    location = models.CharField(
        max_length=255,
        verbose_name="Город",
        help_text="Город или адрес, где находится работа"
    )
    published_date = models.DateField(
        verbose_name="Дата публикации",
        help_text="Дата, когда вакансия была опубликована"
    )
    salary = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        verbose_name="Зарплата",
        help_text="Укажите зарплату, если доступно, например: 250 000 ₸"
    )
    description = models.TextField(
        verbose_name="Описание вакансии",
        help_text="Подробное описание вакансии"
    )
    qualities = models.TextField(
        blank=True,
        null=True,
        verbose_name="Качества",
        help_text="Качества, которые ценятся в кандидате"
    )
    requirements = models.TextField(
        blank=True,
        null=True,
        verbose_name="Требования",
        help_text="Необходимые навыки и опыт для работы"
    )
    responsibilities = models.TextField(
        blank=True,
        null=True,
        verbose_name="Обязанности",
        help_text="Что нужно делать на данной позиции"
    )
    benefits = models.TextField(
        blank=True,
        null=True,
        verbose_name="Что предлагает компания",
        help_text="Перечисление преимуществ работы в компании"
    )
    additional_info = models.TextField(
        blank=True,
        null=True,
        verbose_name="Дополнительная информация",
        help_text="Любая другая полезная информация о вакансии"
    )

    def __str__(self):
        return f"{self.title} в {self.company}"
    

class ResumeApplication(models.Model):
    last_name = models.CharField(max_length=50, verbose_name='ФИО', help_text='Введите ФИО')
    phone = models.CharField(max_length=50, verbose_name='Телефон')
    resume_file = models.FileField(upload_to='resumes/', verbose_name='Резюме (PDF, DOCX)', help_text='Перетащите файл или нажмите для выбора')
    message = models.TextField(verbose_name='Письмо', help_text='Сопроводительное письмо')
    vacancy_id = models.IntegerField(verbose_name="ID ваканси") 
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.last_name} на {self.vacancy_id} - вакансию."