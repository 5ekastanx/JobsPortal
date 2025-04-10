# Generated by Django 5.1.6 on 2025-02-19 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacancy', '0002_vacancy_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='ResumeApplication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_name', models.CharField(help_text='Введите ФИО', max_length=50, verbose_name='ФИО')),
                ('phone', models.CharField(max_length=50, verbose_name='Телефон')),
                ('resume_file', models.FileField(help_text='Перетащите файл или нажмите для выбора', upload_to='resumes/', verbose_name='Резюме (PDF, DOCX)')),
                ('message', models.TextField(help_text='Сопроводительное письмо', verbose_name='Письмо')),
                ('vacancy_id', models.IntegerField(verbose_name='ID ваканси')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
