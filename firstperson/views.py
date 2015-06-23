from django.shortcuts import render, redirect
from django.http import HttpResponse
from firstperson.models import *
from firstperson.forms import StoryForm
from django.core import serializers

import json
import twitter
import os
# Create your views here.

# api = twitter.Api(consumer_key=os.environ['TWITTER_CONSUMER_KEY'],
# 	consumer_secret=os.environ['TWITTER_CONSUMER_SECRET'],
# 	access_token_key=os.environ['TWITTER_ACCESS_TOKEN'],
# 	access_token_secret=os.environ['TWITTER_ACCESS_SECRET'])

api = twitter.Api(consumer_key="BfytXot6RuJOysmod0EzqAhMZ",
	consumer_secret="I91hJfXSDfoMzAhTcMwPfvGqqPmPTfzmj7lcPXS0dU4me1xAKH",
	access_token_key="1534472840-rNDci8QvsY9RGLI1B9RxtPTi1SJG0ZkynLLZCIa",
	access_token_secret="JMArFQpe7JkqG4LxWg8UVdqU4AVlfWPBVKqFMYa6LQ8zn"

def storyindex(request):
	all_stories = Story.objects.order_by('date')
	# all_tags = Tag.objects.order_by('pk')
	all_tags = Tag.objects.all()
	# all_tags = story.tags.all()
	context = {'all_stories': all_stories,
			   'all_tags': all_tags,
				}

	return render(request, 'firstperson/storyindex.html', context)

def storydetail(request, story_id):
	story = Story.objects.get(id=story_id)
	context = {'story': story,}

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
			return HttpResponse('Thank you for submitting!')

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