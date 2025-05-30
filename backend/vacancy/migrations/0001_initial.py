# Generated by Django 5.1.6 on 2025-02-16 18:28

import django.contrib.auth.models
import django.contrib.auth.validators
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.CharField(help_text='Например: Junior, Middle, Senior', max_length=20, verbose_name='Уровень')),
                ('title', models.CharField(help_text='Название должности, например: ГИС-специалист', max_length=255, verbose_name='Название вакансии')),
                ('company', models.CharField(help_text='Название компании, предоставляющей вакансию', max_length=255, verbose_name='Компания')),
                ('location', models.CharField(help_text='Город или адрес, где находится работа', max_length=255, verbose_name='Город')),
                ('published_date', models.DateField(help_text='Дата, когда вакансия была опубликована', verbose_name='Дата публикации')),
                ('salary', models.CharField(blank=True, help_text='Укажите зарплату, если доступно, например: 250 000 ₸', max_length=100, null=True, verbose_name='Зарплата')),
                ('description', models.TextField(help_text='Подробное описание вакансии', verbose_name='Описание вакансии')),
                ('qualities', models.TextField(blank=True, help_text='Качества, которые ценятся в кандидате', null=True, verbose_name='Качества')),
                ('requirements', models.TextField(blank=True, help_text='Необходимые навыки и опыт для работы', null=True, verbose_name='Требования')),
                ('responsibilities', models.TextField(blank=True, help_text='Что нужно делать на данной позиции', null=True, verbose_name='Обязанности')),
                ('benefits', models.TextField(blank=True, help_text='Перечисление преимуществ работы в компании', null=True, verbose_name='Что предлагает компания')),
                ('additional_info', models.TextField(blank=True, help_text='Любая другая полезная информация о вакансии', null=True, verbose_name='Дополнительная информация')),
            ],
        ),
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('image', models.ImageField(blank=True, null=True, upload_to='users_images/')),
                ('age', models.PositiveIntegerField(blank=True, null=True)),
                ('is_verified', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]
