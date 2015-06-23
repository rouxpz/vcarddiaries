# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('firstperson', '0003_auto_20150623_2233'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='text',
            field=models.TextField(),
            preserve_default=True,
        ),
    ]
