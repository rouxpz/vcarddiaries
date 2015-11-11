from django.contrib import admin
from firstperson.models import Story, Tag
from moderation.admin import ModerationAdmin

# Register your models here.

class YourModelAdmin(ModerationAdmin):

	admin_integration_enabled = True
	change_form_template = 'firstperson/admin/change_form.html'
	search_fields = ['text']
	filter_horizontal = ('demo_tags', 'sex_tags', 'theme_tags',)

admin.site.register(Story, YourModelAdmin)
admin.site.register(Tag, YourModelAdmin)