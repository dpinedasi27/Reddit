from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from django.db.models import Q

from .models import Post, ViewCount
from apps.categories.models import Categories

from .pagination import SmallSetPagination

from .serializes import PostSerializer

class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self,request,format=None):
        if Post.objects.all().exists():
                posts = Post.objects.all()
                paginator = SmallSetPagination()
                results = paginator.paginate_queryset(posts, request)
                serializer = PostSerializer(results, many=True)
                return paginator.get_paginated_response({'post' : serializer.data})
        else:
            return Response({'error': 'No post found'}, status=status.HTTP_404_NOT_FOUND)

class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, category_slug, format=None):
        try:
            category = Categories.objects.get(slug=category_slug)
        except Categories.DoesNotExist:
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)
        # Obtener la categoría principal y sus hijos
        categories = Categories.objects.filter(parent=category) | Categories.objects.filter(pk=category.pk)
        
        # Obtener los posts asociados a la categoría y sus hijos
        posts = Post.objects.filter(category__in=categories)

        # posts = Post.objects.filter(category=category)
        if posts.exists():
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostSerializer(results, many=True)
            return paginator.get_paginated_response({'post': serializer.data})
        else:
            return Response({'error': 'No posts found in this category'}, status=status.HTTP_404_NOT_FOUND)
        
class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get_client_ip(self, request):
        # Obtener la dirección IP del cliente
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip
    
    def get(self, request, slug, format=None):
        try:
            post = Post.objects.get(slug=slug)
             # Obtener la dirección IP del cliente
            client_ip = self.get_client_ip(request)
            
            # Verificar si esta IP ya ha visto este post
            if not ViewCount.objects.filter(post=post, ip_address=client_ip).exists():
                # Crear un nuevo registro de vista si es una nueva IP
                ViewCount.objects.create(post=post, ip_address=client_ip)
                
                # Incrementar el contador de vistas en el post
                post.views += 1
                post.save()

            serializer = PostSerializer(post)

            return Response({'post': serializer.data}, status=status.HTTP_200_OK)
        except Post.DoesNotExist:
            return Response({'error': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)

class SearchBlogView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self,request,format=None):
        try:
            searchTerm=request.query_params.get('search_term','')
            matches = Post.objects.filter(
                Q(title__icontains=searchTerm) |
                Q(category__name__icontains=searchTerm) 
            )
            serializer = PostSerializer(matches, many=True)
            return Response({'post': serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
