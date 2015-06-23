# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('firstperson', '0002_auto_20150623_1541'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='text',
            field=tinymce.models.HTMLField(),
            preserve_default=True,
        ),
    ]
