from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    replies = serializers.SerializerMethodField()  # Para obtener las respuestas de los comentarios
    
    class Meta:
        model = Comment
        fields = [
            'id',
            'user',
            'avatar',
            'text',
            'timestamp',
            'upvotes',
            'parent_comment',
            'replies'
        ]
    
    # Método para obtener las respuestas de un comentario
    def get_replies(self, obj):
        replies = Comment.objects.filter(parent_comment=obj)
        return CommentSerializer(replies, many=True).data
