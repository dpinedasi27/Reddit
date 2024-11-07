from django.db import models
from django.utils import timezone

# Modelo para almacenar comentarios 
class Comment(models.Model):
    user = models.CharField(max_length=255)  # Nombre de usuario (en lugar de ForeignKey a User)
    avatar = models.URLField(max_length=200, default="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png")  # URL del avatar
    text = models.TextField()  # Texto del comentario
    timestamp = models.DateTimeField(default=timezone.now)  # Fecha y hora de publicación
    upvotes = models.IntegerField(default=0)  # Contador de upvotes
    parent_comment = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='replies')  # Relación con el comentario padre, puede ser nulo para comentarios principales

    class Meta:
        ordering = ['timestamp']  # Ordenar los comentarios por timestamp de forma ascendente

    def get_replies(self):
        return self.replies.all()  # Obtener las respuestas a este comentario

    def get_upvote_count(self):
        return self.upvotes  # Obtener la cantidad de upvotes

