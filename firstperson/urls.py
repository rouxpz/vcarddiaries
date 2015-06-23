from django.conf.urls import patterns, url
from firstperson import views

urlpatterns = patterns('',

    url(r'^$', 'firstperson.views.storyindex', name='storyindex'),
    url(r'^(?P<story_id>\d+)/$', 'firstperson.views.storydetail', name='detail'),
    url(r'^submit/$', 'firstperson.views.submit', name='submit'),
    url(r'^api_definitions/$', 'firstperson.views.api_definitions'),
    url(r'^api_search/$', 'firstperson.views.api_search'),
    url(r'^api_tags/$', 'firstperson.views.api_tags'),
    (r'^tinymce/', include('tinymce.urls')),
)
