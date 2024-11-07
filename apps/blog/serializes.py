from rest_framework import serializers
from .models import * 
from apps.categories.serializes import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    category= CategorySerializer()
    class Meta:
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumnail',
            'time_read',
            'published',
            'views',
            'category'
        ]
