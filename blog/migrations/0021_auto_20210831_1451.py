# Generated by Django 3.1.12 on 2021-08-31 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0020_post_header_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='header_image',
            field=models.ImageField(blank=True, max_length=10485760, null=True, upload_to='gallery/'),
        ),
    ]
