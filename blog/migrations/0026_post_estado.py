# Generated by Django 3.1.12 on 2021-12-09 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0025_reflejado'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='estado',
            field=models.TextField(default=0, max_length=1000),
        ),
    ]
