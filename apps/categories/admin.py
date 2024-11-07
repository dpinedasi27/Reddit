from django.contrib import admin

# Register your models here.
from .models import *

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id','name',)
    list_display_links = ('name',)
    list_per_page = 25

admin.site.register(Categories,CategoryAdmin)
