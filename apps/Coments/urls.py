from django.urls import path

from .views import *  # Importar todas las vistas desde views

urlpatterns = [
   
    # URLs para los comentarios
    path('comments', CommentListView.as_view(), name='comment-list'),  # Lista todos los comentarios
    path('comments/<str:user>', CommentListByUserView.as_view(), name='comment-list-by-user'),  # Lista comentarios por usuario
    path('comments/search', SearchCommentView.as_view(), name='comment-search'),  # Buscar comentarios
    path('create', CommentCreateView.as_view(), name='comment-create'),  # Crear un nuevo comentario
]
