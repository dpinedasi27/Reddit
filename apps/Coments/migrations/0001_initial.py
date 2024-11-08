# Generated by Django 4.2 on 2024-11-06 22:01

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=255)),
                ('avatar', models.URLField(default='https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png')),
                ('text', models.TextField()),
                ('timestamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('upvotes', models.IntegerField(default=0)),
                ('parent_comment', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='replies', to='Coments.comment')),
            ],
            options={
                'ordering': ['timestamp'],
            },
        ),
    ]
