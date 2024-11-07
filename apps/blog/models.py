from django.utils import timezone
from django.db import models
from apps.categories.models import Categories
# Create your models here.

def blog_thumbnail_directory(instance, filname):
    return 'blog/{0}/{1}'.format(instance.title, filname)

class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.CharField(max_length=255, unique=True)
    thumnail = models.ImageField(upload_to=blog_thumbnail_directory)
    time_read = models.IntegerField()
    published = models.DateTimeField(default=timezone.now)
    views = models.IntegerField(default=0, blank=True)
    category = models.ForeignKey(Categories, on_delete=models.PROTECT)

    class Meta:
        ordering = ('-published',)
    
    def __str__(self):
        return self.title
    
    def get_view_count(self):
        views = ViewCount.objects.filter(post = self).count()
        return views

class ViewCount(models.Model):
    post = models.ForeignKey(Post, related_name='post_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255, unique=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['post', 'ip_address'], name='unique_post_ip')
        ]
        
    def __str__(self):
        return self.ip_address