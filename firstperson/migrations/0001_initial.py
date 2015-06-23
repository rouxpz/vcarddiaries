# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Definition',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('text', models.TextField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Story',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=75)),
                ('title', models.CharField(max_length=200)),
                ('firstgraf', models.TextField()),
                ('age', models.TextField(max_length=50)),
                ('aboutyou', models.TextField()),
                ('link', models.URLField(unique=True)),
                ('date', models.DateField()),
                ('definition', models.TextField()),
                ('text', models.TextField()),
                ('address', models.TextField()),
                ('places', models.ManyToManyField(related_name='stories', to='firstperson.Place')),
            ],
            options={
                'verbose_name_plural': 'Stories',
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('tagtype', models.CharField(max_length=200)),
                ('nstories', models.IntegerField(default=0)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AlterUniqueTogether(
            name='tag',
            unique_together=set([('name', 'tagtype')]),
        ),
        migrations.AddField(
            model_name='story',
            name='tags',
            field=models.ManyToManyField(related_name='stories', to='firstperson.Tag'),
            preserve_default=True,
        ),
    ]
