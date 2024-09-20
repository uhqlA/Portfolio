from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'updated_at')  # Fields to display in the admin list view
    search_fields = ('title', 'content', 'author')  # Fields that can be searched
    list_filter = ('created_at', 'author')  # Fields you can filter by
    ordering = ('-created_at',)  # Order by most recent posts

# Alternatively, you can use the simpler method to register the model:
# admin.site.register(Post)
