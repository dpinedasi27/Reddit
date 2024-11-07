from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Categories

class ListCategoriesView(APIView):
    permission_classes=(permissions.AllowAny,)

    def get(self, request, format=None):
        if Categories.objects.all().exists():
            result = []
            categories =  Categories.objects.all()
            for category in categories:
                if not category.parent:
                    item = { 
                        'id': category.id,
                        'name': category.name,
                        'slug': category.slug,
                        'views': category.views,
                        'sub_categories': []
                        }
                    for subcategory in categories:
                        if subcategory.parent and subcategory.parent.id == category.id:
                            sub_item = { 
                                'id': subcategory.id,
                                'name': subcategory.name,
                                'slug': subcategory.slug,
                                'views': subcategory.views
                                }
                            item['sub_categories'].append(sub_item)
                    result.append(item)
            return Response({'categories': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No cateogrires found'}, status=status.HTTP_404_NOT_FOUND)