# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('firstperson', '0006_auto_20150702_0217'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='city',
            field=models.CharField(default=b'N/A', max_length=30),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='story',
            name='demo_tags',
            field=models.ManyToManyField(related_name='demo', to='firstperson.Tag', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='story',
            name='sex_tags',
            field=models.ManyToManyField(related_name='sexuality', to='firstperson.Tag', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='story',
            name='theme_tags',
            field=models.ManyToManyField(related_name='themes', to='firstperson.Tag', blank=True),
            preserve_default=True,
        ),
    ]
