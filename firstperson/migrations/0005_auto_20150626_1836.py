# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('firstperson', '0004_auto_20150623_2247'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='title',
            field=models.CharField(default=b'<New Submission>', max_length=200),
            preserve_default=True,
        ),
    ]
