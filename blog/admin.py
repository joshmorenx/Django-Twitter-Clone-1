from django.contrib import admin
from blog.models import Post, Comment, Preference, Reflejado


admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Preference)
admin.site.register(Reflejado)