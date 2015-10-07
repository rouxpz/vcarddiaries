from django import VERSION
from moderation import moderation
from moderation.moderator import GenericModerator
from moderation.managers import ModeratedObjectManager
from firstperson.models import Story
from django.contrib.sites.models import Site
from django.template.loader import render_to_string

class CustomModerator(GenericModerator):

    notify_user = True
    notify_moderator = False
    auto_approve_for_superusers = True
    auto_approve_for_staff = True
    message_template_user = 'email_template.txt'
    subject_template_user = 'subject_template.txt'
    
    recipient_email = 'roopakutty@gmail.com'

    # recipient_email = Story.definition

    def inform_user(self, content_object, user, extra_context=None):
        '''Send notification to user when object is approved or rejected'''

        if self.notify_user:
            self.send(
                content_object=content_object,
                subject_template=self.subject_template_user,
                message_template=self.message_template_user,
                recipient_list=[str(content_object)],
                extra_context=extra_context)

moderation.register(Story, CustomModerator)