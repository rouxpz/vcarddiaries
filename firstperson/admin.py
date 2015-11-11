from django.contrib import admin
from firstperson.models import Story, Tag
from moderation.admin import ModerationAdmin

# Register your models here.

class YourModelAdmin(ModerationAdmin):

	def formfield_for_manytomany(self, db_field, request, **kwargs):
		if db_field.name == "demo_tags":
			kwargs["queryset"] = Tag.objects.filter(tagtype="Demographic")
		elif db_field.name == "sex_tags":
			kwargs["queryset"] = Tag.objects.filter(tagtype="Sexuality")
		elif db_field.name == "theme_tags":
			kwargs["queryset"] = Tag.objects.filter(tagtype="Theme")
		return super(YourModelAdmin, self).formfield_for_manytomany(db_field, request, **kwargs)

	admin_integration_enabled = True
	change_form_template = 'firstperson/admin/change_form.html'
	search_fields = ['text']
	filter_horizontal = ('demo_tags', 'sex_tags', 'theme_tags',)

admin.site.register(Story, YourModelAdmin)
admin.site.register(Tag, YourModelAdmin)