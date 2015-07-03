from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from firstperson.models import *
from firstperson.forms import StoryForm
from django.core import serializers
from django.core.mail import send_mail

import html5lib
import django_wysiwyg
import json
import twitter
import os
# Create your views here.

api = twitter.Api(consumer_key=os.environ['TWITTER_CONSUMER_KEY'],
	consumer_secret=os.environ['TWITTER_CONSUMER_SECRET'],
	access_token_key=os.environ['TWITTER_ACCESS_TOKEN'],
	access_token_secret=os.environ['TWITTER_ACCESS_SECRET'])

def storyindex(request):
	all_stories = Story.objects.order_by('date')
	# all_tags = Tag.objects.order_by('pk')
	all_tags = Tag.objects.all()
	# all_tags = story.tags.all()
	age_choices = Story.AGE_CHOICES
	state_choices = Story.STATE_CHOICES
	country_choices = Story.COUNTRY_CHOICES
	context = {'all_stories': all_stories,
			   'all_tags': all_tags,
			   'age_choices': age_choices,
			   'state_choices': state_choices,
			   'country_choices': country_choices,
				}

	return render(request, 'firstperson/storyindex.html', context)

def storydetail(request, story_id):
	story = Story.objects.get(id=story_id)
	age_choices = Story.AGE_CHOICES
	state_choices = Story.STATE_CHOICES
	country_choices = Story.COUNTRY_CHOICES
	context = {'story': story,
			'age_choices': age_choices,
			'state_choices': state_choices,
			'country_choices': country_choices,}

	return render(request, 'firstperson/storydetail.html', context)

def submit(request):
	all_tags = Tag.objects.all()

	if request.method == 'POST':
		form = StoryForm(request.POST)

		if form.is_valid():

			form = form.save(commit = True)
			post = '#VirginityIs ' + form.definition
			api.PostUpdate(post)
			# form.save()
			send_mail('New V-Card Diaries Submission!', 'Hi Therese!\n\nYou have a new V-Card Diaries submission. Please log in to approve or reject it.\n\nFrom: ' + form.name + '\nSubmitted on: ' + str(form.date) + '\n\nThanks!', os.environ['EMAIL_ADDRESS'], os.environ['THERESE_EMAIL'], fail_silently=False)
			return HttpResponseRedirect('/stories/')

		else:
			print form.errors

	else:
		form = StoryForm()

	context = { 'form' : form,
	'all_tags' : all_tags,}

	return render(request, 'firstperson/submit.html', context)

def api_definitions(request):
	definitions = [story.definition for story in Story.objects.all()]
	return HttpResponse(json.dumps(definitions))

def api_search(request):
	stories = Story.objects.all()
	return HttpResponse(serializers.serialize("json", stories))

def api_tags(request):
	tags = Tag.objects.all()
	return HttpResponse(serializers.serialize("json", tags))