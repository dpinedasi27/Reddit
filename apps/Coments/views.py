from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.db.models import Q
from .models import Comment
from .serializes import CommentSerializer

# Vista para obtener todos los comentarios
class CommentListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        comments = Comment.objects.all()
        if comments.exists():
            serializer = CommentSerializer(comments, many=True)
            return Response({'comments': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No comments found'}, status=status.HTTP_404_NOT_FOUND)


# Vista para obtener los comentarios por usuario
class CommentListByUserView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, username, format=None):
        comments = Comment.objects.filter(user=username)
        if comments.exists():
            serializer = CommentSerializer(comments, many=True)
            return Response({'comments': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': f'No comments found for user {username}'}, status=status.HTTP_404_NOT_FOUND)


# Vista para buscar comentarios por término de búsqueda
class SearchCommentView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        try:
            search_term = request.query_params.get('search_term', '')
            matches = Comment.objects.filter(
                Q(user__icontains=search_term) | 
                Q(text__icontains=search_term)
            )
            if matches.exists():
                serializer = CommentSerializer(matches, many=True)
                return Response({'comments': serializer.data}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'No comments found matching the search term'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


# Vista para crear un comentario
class CommentCreateView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        # Obtener los datos del cuerpo de la solicitud
        data = request.data
        data['user'] = request.data.get('user')  # Asignar el nombre de usuario que realiza el comentario
        data['avatar'] = request.data.get('avatar', "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png")  # Avatar por defecto
        data['timestamp'] = request.data.get('timestamp', '')  # Timestamp opcional
        data['upvotes'] = request.data.get('upvotes', 0)  # Upvotes por defecto en 0
        data['parent_comment'] = request.data.get('parent_comment', None)  # Puede ser null si es un comentario principal

        # Crear una instancia del serializador con los datos
        serializer = CommentSerializer(data=data)

        if serializer.is_valid():
            # Guardar el comentario si los datos son válidos
            serializer.save()
            return Response({'message': 'Comment created successfully', 'comment': serializer.data}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'Invalid data', 'details': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        
        