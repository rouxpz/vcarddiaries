# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('firstperson', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='story',
            name='aboutyou',
        ),
        migrations.RemoveField(
            model_name='story',
            name='address',
        ),
        migrations.RemoveField(
            model_name='story',
            name='firstgraf',
        ),
        migrations.RemoveField(
            model_name='story',
            name='link',
        ),
        migrations.RemoveField(
            model_name='story',
            name='places',
        ),
        migrations.DeleteModel(
            name='Place',
        ),
        migrations.RemoveField(
            model_name='story',
            name='tags',
        ),
        migrations.AddField(
            model_name='story',
            name='city',
            field=models.CharField(default=b'', max_length=30),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='story',
            name='country',
            field=models.CharField(default=b'', max_length=2, choices=[(b'', b'your country'), (b'AF', b'Afghanistan'), (b'AL', b'Albania'), (b'DZ', b'Algeria'), (b'AS', b'American Samoa'), (b'AD', b'Andorra'), (b'AG', b'Angola'), (b'AI', b'Anguilla'), (b'AG', b'Antigua &amp; Barbuda'), (b'AR', b'Argentina'), (b'AA', b'Armenia'), (b'AW', b'Aruba'), (b'AU', b'Australia'), (b'AT', b'Austria'), (b'AZ', b'Azerbaijan'), (b'BS', b'Bahamas'), (b'BH', b'Bahrain'), (b'BD', b'Bangladesh'), (b'BB', b'Barbados'), (b'BY', b'Belarus'), (b'BE', b'Belgium'), (b'BZ', b'Belize'), (b'BJ', b'Benin'), (b'BM', b'Bermuda'), (b'BT', b'Bhutan'), (b'BO', b'Bolivia'), (b'BL', b'Bonaire'), (b'BA', b'Bosnia &amp; Herzegovina'), (b'BW', b'Botswana'), (b'BR', b'Brazil'), (b'BC', b'British Indian Ocean Ter'), (b'BN', b'Brunei'), (b'BG', b'Bulgaria'), (b'BF', b'Burkina Faso'), (b'BI', b'Burundi'), (b'KH', b'Cambodia'), (b'CM', b'Cameroon'), (b'CA', b'Canada'), (b'IC', b'Canary Islands'), (b'CV', b'Cape Verde'), (b'KY', b'Cayman Islands'), (b'CF', b'Central African Republic'), (b'TD', b'Chad'), (b'CD', b'Channel Islands'), (b'CL', b'Chile'), (b'CN', b'China'), (b'CI', b'Christmas Island'), (b'CS', b'Cocos Island'), (b'CO', b'Colombia'), (b'CC', b'Comoros'), (b'CG', b'Congo'), (b'CK', b'Cook Islands'), (b'CR', b'Costa Rica'), (b'CT', b"Cote D'Ivoire"), (b'HR', b'Croatia'), (b'CU', b'Cuba'), (b'CB', b'Curacao'), (b'CY', b'Cyprus'), (b'CZ', b'Czech Republic'), (b'DK', b'Denmark'), (b'DJ', b'Djibouti'), (b'DM', b'Dominica'), (b'DO', b'Dominican Republic'), (b'TM', b'East Timor'), (b'EC', b'Ecuador'), (b'EG', b'Egypt'), (b'SV', b'El Salvador'), (b'GQ', b'Equatorial Guinea'), (b'ER', b'Eritrea'), (b'EE', b'Estonia'), (b'ET', b'Ethiopia'), (b'FA', b'Falkland Islands'), (b'FO', b'Faroe Islands'), (b'FJ', b'Fiji'), (b'FI', b'Finland'), (b'FR', b'France'), (b'GF', b'French Guiana'), (b'PF', b'French Polynesia'), (b'FS', b'French Southern Ter'), (b'GA', b'Gabon'), (b'GM', b'Gambia'), (b'GE', b'Georgia'), (b'DE', b'Germany'), (b'GH', b'Ghana'), (b'GI', b'Gibraltar'), (b'GB', b'Great Britain'), (b'GR', b'Greece'), (b'GL', b'Greenland'), (b'GD', b'Grenada'), (b'GP', b'Guadeloupe'), (b'GU', b'Guam'), (b'GT', b'Guatemala'), (b'GN', b'Guinea'), (b'GY', b'Guyana'), (b'HT', b'Haiti'), (b'HW', b'Hawaii'), (b'HN', b'Honduras'), (b'HK', b'Hong Kong'), (b'HU', b'Hungary'), (b'IS', b'Iceland'), (b'IN', b'India'), (b'ID', b'Indonesia'), (b'IA', b'Iran'), (b'IQ', b'Iraq'), (b'IR', b'Ireland'), (b'IM', b'Isle of Man'), (b'IL', b'Israel'), (b'IT', b'Italy'), (b'JM', b'Jamaica'), (b'JP', b'Japan'), (b'JO', b'Jordan'), (b'KZ', b'Kazakhstan'), (b'KE', b'Kenya'), (b'KI', b'Kiribati'), (b'NK', b'Korea North'), (b'KS', b'Korea South'), (b'KW', b'Kuwait'), (b'KG', b'Kyrgyzstan'), (b'LA', b'Laos'), (b'LV', b'Latvia'), (b'LB', b'Lebanon'), (b'LS', b'Lesotho'), (b'LR', b'Liberia'), (b'LY', b'Libya'), (b'LI', b'Liechtenstein'), (b'LT', b'Lithuania'), (b'LU', b'Luxembourg'), (b'MO', b'Macau'), (b'MK', b'Macedonia'), (b'MG', b'Madagascar'), (b'MY', b'Malaysia'), (b'MW', b'Malawi'), (b'MV', b'Maldives'), (b'ML', b'Mali'), (b'MT', b'Malta'), (b'MH', b'Marshall Islands'), (b'MQ', b'Martinique'), (b'MR', b'Mauritania'), (b'MU', b'Mauritius'), (b'ME', b'Mayotte'), (b'MX', b'Mexico'), (b'MI', b'Midway Islands'), (b'MD', b'Moldova'), (b'MC', b'Monaco'), (b'MN', b'Mongolia'), (b'MS', b'Montserrat'), (b'MA', b'Morocco'), (b'MZ', b'Mozambique'), (b'MM', b'Myanmar'), (b'NA', b'Nambia'), (b'NU', b'Nauru'), (b'NP', b'Nepal'), (b'AN', b'Netherland Antilles'), (b'NL', b'Netherlands (Holland, Europe)'), (b'NV', b'Nevis'), (b'NC', b'New Caledonia'), (b'NZ', b'New Zealand'), (b'NI', b'Nicaragua'), (b'NE', b'Niger'), (b'NG', b'Nigeria'), (b'NW', b'Niue'), (b'NF', b'Norfolk Island'), (b'NO', b'Norway'), (b'OM', b'Oman'), (b'PK', b'Pakistan'), (b'PW', b'Palau Island'), (b'PS', b'Palestine'), (b'PA', b'Panama'), (b'PG', b'Papua New Guinea'), (b'PY', b'Paraguay'), (b'PE', b'Peru'), (b'PH', b'Philippines'), (b'PO', b'Pitcairn Island'), (b'PL', b'Poland'), (b'PT', b'Portugal'), (b'PR', b'Puerto Rico'), (b'QA', b'Qatar'), (b'ME', b'Republic of Montenegro'), (b'RS', b'Republic of Serbia'), (b'RE', b'Reunion'), (b'RO', b'Romania'), (b'RU', b'Russia'), (b'RW', b'Rwanda'), (b'NT', b'St Barthelemy'), (b'EU', b'St Eustatius'), (b'HE', b'St Helena'), (b'KN', b'St Kitts-Nevis'), (b'LC', b'St Lucia'), (b'MB', b'St Maarten'), (b'PM', b'St Pierre &amp; Miquelon'), (b'VC', b'St Vincent &amp; Grenadines'), (b'SP', b'Saipan'), (b'SO', b'Samoa'), (b'AS', b'Samoa American'), (b'SM', b'San Marino'), (b'ST', b'Sao Tome &amp; Principe'), (b'SA', b'Saudi Arabia'), (b'SN', b'Senegal'), (b'RS', b'Serbia'), (b'SC', b'Seychelles'), (b'SL', b'Sierra Leone'), (b'SG', b'Singapore'), (b'SK', b'Slovakia'), (b'SI', b'Slovenia'), (b'SB', b'Solomon Islands'), (b'OI', b'Somalia'), (b'ZA', b'South Africa'), (b'ES', b'Spain'), (b'LK', b'Sri Lanka'), (b'SD', b'Sudan'), (b'SR', b'Suriname'), (b'SZ', b'Swaziland'), (b'SE', b'Sweden'), (b'CH', b'Switzerland'), (b'SY', b'Syria'), (b'TA', b'Tahiti'), (b'TW', b'Taiwan'), (b'TJ', b'Tajikistan'), (b'TZ', b'Tanzania'), (b'TH', b'Thailand'), (b'TG', b'Togo'), (b'TK', b'Tokelau'), (b'TO', b'Tonga'), (b'TT', b'Trinidad &amp; Tobago'), (b'TN', b'Tunisia'), (b'TR', b'Turkey'), (b'TU', b'Turkmenistan'), (b'TC', b'Turks &amp; Caicos Is'), (b'TV', b'Tuvalu'), (b'UG', b'Uganda'), (b'UA', b'Ukraine'), (b'AE', b'United Arab Emirates'), (b'GB', b'United Kingdom'), (b'US', b'United States of America'), (b'UY', b'Uruguay'), (b'UZ', b'Uzbekistan'), (b'VU', b'Vanuatu'), (b'VS', b'Vatican City State'), (b'VE', b'Venezuela'), (b'VN', b'Vietnam'), (b'VB', b'Virgin Islands (Brit)'), (b'VA', b'Virgin Islands (USA)'), (b'WK', b'Wake Island'), (b'WF', b'Wallis &amp; Futana Is'), (b'YE', b'Yemen'), (b'ZR', b'Zaire'), (b'ZM', b'Zambia'), (b'ZW', b'Zimbabwe')]),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='story',
            name='demo_tags',
            field=models.ManyToManyField(related_name='demo', to='firstperson.Tag'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='story',
            name='experience_tags',
            field=models.ManyToManyField(related_name='experiences', to='firstperson.Tag', blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='story',
            name='sex_tags',
            field=models.ManyToManyField(related_name='sexuality', to='firstperson.Tag'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='story',
            name='state',
            field=models.CharField(default=b'', max_length=2, choices=[(b'', b'your state'), (b'EM', b'Not applicable'), (b'AL', b'Alabama'), (b'AK', b'Alaska'), (b'AZ', b'Arizona'), (b'AR', b'Arkansas'), (b'CA', b'California'), (b'CO', b'Colorado'), (b'CT', b'Connecticut'), (b'DE', b'Delaware'), (b'DC', b'District Of Columbia'), (b'FL', b'Florida'), (b'GA', b'Georgia'), (b'HI', b'Hawaii'), (b'ID', b'Idaho'), (b'IL', b'Illinois'), (b'IN', b'Indiana'), (b'IA', b'Iowa'), (b'KS', b'Kansas'), (b'KY', b'Kentucky'), (b'LA', b'Louisiana'), (b'ME', b'Maine'), (b'MD', b'Maryland'), (b'MA', b'Massachusetts'), (b'MI', b'Michigan'), (b'MN', b'Minnesota'), (b'MS', b'Mississippi'), (b'MO', b'Missouri'), (b'MT', b'Montana'), (b'NE', b'Nebraska'), (b'NV', b'Nevada'), (b'NH', b'New Hampshire'), (b'NJ', b'New Jersey'), (b'NM', b'New Mexico'), (b'NY', b'New York'), (b'NC', b'North Carolina'), (b'ND', b'North Dakota'), (b'OH', b'Ohio'), (b'OK', b'Oklahoma'), (b'OR', b'Oregon'), (b'PA', b'Pennsylvania'), (b'RI', b'Rhode Island'), (b'SC', b'South Carolina'), (b'SD', b'South Dakota'), (b'TN', b'Tennessee'), (b'TX', b'Texas'), (b'UT', b'Utah'), (b'VT', b'Vermont'), (b'VA', b'Virginia'), (b'WA', b'Washington'), (b'WV', b'West Virginia'), (b'WI', b'Wisconsin'), (b'WY', b'Wyoming')]),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='story',
            name='theme_tags',
            field=models.ManyToManyField(related_name='themes', to='firstperson.Tag'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='story',
            name='age',
            field=models.CharField(max_length=3, choices=[(b'ETE', b'Early teens (Under 14)'), (b'LTE', b'High school (14-18)'), (b'ETW', b'Early 20s'), (b'LTW', b'Late 20s'), (b'ETR', b'Early 30s'), (b'LTR', b'Late 30s'), (b'EFO', b'Early 40s'), (b'LFO', b'Late 40s'), (b'EFI', b'Early 50s'), (b'LFI', b'Late 50s'), (b'OSX', b'60s and over')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='story',
            name='date',
            field=models.DateTimeField(default=datetime.datetime.now, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='story',
            name='definition',
            field=models.TextField(max_length=130),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='story',
            name='title',
            field=models.CharField(default=b'', max_length=200),
            preserve_default=True,
        ),
    ]
