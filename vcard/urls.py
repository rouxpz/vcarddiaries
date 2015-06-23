from django.conf.urls import patterns, include, url
from django.contrib import admin
from moderation.helpers import auto_discover
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView

auto_discover()
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'^stories/', include('firstperson.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^tinymce/', include('tinymce.urls')),
)
