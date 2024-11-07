from django.urls import path

from .views import *

urlpatterns=[
    path('list',BlogListView.as_view(),name='blog-list'),
    path('search', SearchBlogView.as_view(), name='search-blog'),
    path('category/<str:category_slug>', ListPostsByCategoryView.as_view(), name='posts-by-category'),
    path('post/<str:slug>', PostDetailView.as_view(), name='post-detail'),
]