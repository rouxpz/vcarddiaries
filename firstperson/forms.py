from django import forms
from firstperson.models import Story, Tag
from django.utils.translation import ugettext_lazy as _
from django.forms import Textarea

class StoryForm(forms.ModelForm):

	demo_tags = forms.ModelMultipleChoiceField(queryset=Tag.objects.filter(tagtype="Demographic"), required = False, widget=forms.CheckboxSelectMultiple, label="tell us about yourself. it will help others find stories from people who share their experiences.")
	sex_tags = forms.ModelMultipleChoiceField(queryset=Tag.objects.filter(tagtype="Sexuality"), required = False, widget=forms.CheckboxSelectMultiple)
	theme_tags = forms.ModelMultipleChoiceField(queryset=Tag.objects.filter(tagtype="Theme"), required = False, widget=forms.CheckboxSelectMultiple, label="pick the most important themes in your story.")

	class Meta:
		model = Story
		fields = ('name', 'demo_tags', 'sex_tags', 'age', 'city', 'state', 'country', 'definition', 'text', 'theme_tags', 'email')
		labels = {
			'name' : _("name (any name you want, but please don't use \"anonymous\")"),
			'email' : _('email address (we promise we will never share this with anyone)'),
			'age' : _('age range (select one)'),
			'definition' : _("what is your definition of virginity? (130 character maximum)"),
			'text' : _('tell us your story (500 words max):'),
		}
		widgets = {
			'definition' : Textarea(attrs={'cols': 70, 'rows': 5}),
			'text' : Textarea(attrs={'cols': 100, 'rows': 20, 'id': 'storytext'}),
		}