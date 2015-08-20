# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('firstperson', '0009_auto_20150729_1756'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='story',
            name='experience_tags',
        ),
    ]
