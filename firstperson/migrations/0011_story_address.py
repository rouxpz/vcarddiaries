# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('firstperson', '0010_remove_story_experience_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='story',
            name='address',
            field=models.TextField(default=b'', null=True, blank=True),
            preserve_default=True,
        ),
    ]
