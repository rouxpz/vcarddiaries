from django.db import models
from moderation import moderation
from datetime import datetime

# Create your models here.

class Definition(models.Model):
	text = models.TextField()

	def __unicode__(self):
		return self.text

class Place(models.Model):
	name = models.CharField(max_length = 200)

	def __unicode__(self):
		return self.name

class Tag(models.Model):
	name = models.CharField(max_length = 200)
	tagtype = models.CharField(max_length = 200)
	nstories = models.IntegerField(default = 0)

	def __unicode__(self):
		return self.name

	class Meta:
		unique_together = ("name", "tagtype")

class Story(models.Model):
	AGE_CHOICES = (
		("ETE", "Early teens (Under 14)"),
		("LTE", "High school (14-18)"),
		("ETW", "Early 20s"),
		("LTW", "Late 20s"),
		("ETR", "Early 30s"),
		("LTR", "Late 30s"),
		("EFO", "Early 40s"),
		("LFO", "Late 40s"),
		("EFI", "Early 50s"),
		("LFI", "Late 50s"),
		("OSX", "60s and over"),
	)

	STATE_CHOICES = (("", "your state"),
					("EM", "Not applicable"),
					("AL", "Alabama"),
					("AK", "Alaska"),
					("AZ", "Arizona"),
					("AR", "Arkansas"),
					("CA", "California"),
					("CO", "Colorado"),
					("CT", "Connecticut"),
					("DE", "Delaware"),
					("DC", "District Of Columbia"),
					("FL", "Florida"),
					("GA", "Georgia"),
					("HI", "Hawaii"),
					("ID", "Idaho"),
					("IL", "Illinois"),
					("IN", "Indiana"),
					("IA", "Iowa"),
					("KS", "Kansas"),
					("KY", "Kentucky"),
					("LA", "Louisiana"),
					("ME", "Maine"),
					("MD", "Maryland"),
					("MA", "Massachusetts"),
					("MI", "Michigan"),
					("MN", "Minnesota"),
					("MS", "Mississippi"),
					("MO", "Missouri"),
					("MT", "Montana"),
					("NE", "Nebraska"),
					("NV", "Nevada"),
					("NH", "New Hampshire"),
					("NJ", "New Jersey"),
					("NM", "New Mexico"),
					("NY", "New York"),
					("NC", "North Carolina"),
					("ND", "North Dakota"),
					("OH", "Ohio"),
					("OK", "Oklahoma"),
					("OR", "Oregon"),
					("PA", "Pennsylvania"),
					("RI", "Rhode Island"),
					("SC", "South Carolina"),
					("SD", "South Dakota"),
					("TN", "Tennessee"),
					("TX", "Texas"),
					("UT", "Utah"),
					("VT", "Vermont"),
					("VA", "Virginia"),
					("WA", "Washington"),
					("WV", "West Virginia"),
					("WI", "Wisconsin"),
					("WY", "Wyoming")
				)
	
	COUNTRY_CHOICES = (("", "your country"),
					("AF", "Afghanistan"),
					("AL", "Albania"),
					("DZ", "Algeria"),
					("AS", "American Samoa"),
					("AD", "Andorra"),
					("AG", "Angola"),
					("AI", "Anguilla"),
					("AG", "Antigua &amp; Barbuda"),
					("AR", "Argentina"),
					("AA", "Armenia"),
					("AW", "Aruba"),
					("AU", "Australia"),
					("AT", "Austria"),
					("AZ", "Azerbaijan"),
					("BS", "Bahamas"),
					("BH", "Bahrain"),
					("BD", "Bangladesh"),
					("BB", "Barbados"),
					("BY", "Belarus"),
					("BE", "Belgium"),
					("BZ", "Belize"),
					("BJ", "Benin"),
					("BM", "Bermuda"),
					("BT", "Bhutan"),
					("BO", "Bolivia"),
					("BL", "Bonaire"),
					("BA", "Bosnia &amp; Herzegovina"),
					("BW", "Botswana"),
					("BR", "Brazil"),
					("BC", "British Indian Ocean Ter"),
					("BN", "Brunei"),
					("BG", "Bulgaria"),
					("BF", "Burkina Faso"),
					("BI", "Burundi"),
					("KH", "Cambodia"),
					("CM", "Cameroon"),
					("CA", "Canada"),
					("IC", "Canary Islands"),
					("CV", "Cape Verde"),
					("KY", "Cayman Islands"),
					("CF", "Central African Republic"),
					("TD", "Chad"),
					("CD", "Channel Islands"),
					("CL", "Chile"),
					("CN", "China"),
					("CI", "Christmas Island"),
					("CS", "Cocos Island"),
					("CO", "Colombia"),
					("CC", "Comoros"),
					("CG", "Congo"),
					("CK", "Cook Islands"),
					("CR", "Costa Rica"),
					("CT", "Cote D'Ivoire"),
					("HR", "Croatia"),
					("CU", "Cuba"),
					("CB", "Curacao"),
					("CY", "Cyprus"),
					("CZ", "Czech Republic"),
					("DK", "Denmark"),
					("DJ", "Djibouti"),
					("DM", "Dominica"),
					("DO", "Dominican Republic"),
					("TM", "East Timor"),
					("EC", "Ecuador"),
					("EG", "Egypt"),
					("SV", "El Salvador"),
					("GQ", "Equatorial Guinea"),
					("ER", "Eritrea"),
					("EE", "Estonia"),
					("ET", "Ethiopia"),
					("FA", "Falkland Islands"),
					("FO", "Faroe Islands"),
					("FJ", "Fiji"),
					("FI", "Finland"),
					("FR", "France"),
					("GF", "French Guiana"),
					("PF", "French Polynesia"),
					("FS", "French Southern Ter"),
					("GA", "Gabon"),
					("GM", "Gambia"),
					("GE", "Georgia"),
					("DE", "Germany"),
					("GH", "Ghana"),
					("GI", "Gibraltar"),
					("GB", "Great Britain"),
					("GR", "Greece"),
					("GL", "Greenland"),
					("GD", "Grenada"),
					("GP", "Guadeloupe"),
					("GU", "Guam"),
					("GT", "Guatemala"),
					("GN", "Guinea"),
					("GY", "Guyana"),
					("HT", "Haiti"),
					("HW", "Hawaii"),
					("HN", "Honduras"),
					("HK", "Hong Kong"),
					("HU", "Hungary"),
					("IS", "Iceland"),
					("IN", "India"),
					("ID", "Indonesia"),
					("IA", "Iran"),
					("IQ", "Iraq"),
					("IR", "Ireland"),
					("IM", "Isle of Man"),
					("IL", "Israel"),
					("IT", "Italy"),
					("JM", "Jamaica"),
					("JP", "Japan"),
					("JO", "Jordan"),
					("KZ", "Kazakhstan"),
					("KE", "Kenya"),
					("KI", "Kiribati"),
					("NK", "Korea North"),
					("KS", "Korea South"),
					("KW", "Kuwait"),
					("KG", "Kyrgyzstan"),
					("LA", "Laos"),
					("LV", "Latvia"),
					("LB", "Lebanon"),
					("LS", "Lesotho"),
					("LR", "Liberia"),
					("LY", "Libya"),
					("LI", "Liechtenstein"),
					("LT", "Lithuania"),
					("LU", "Luxembourg"),
					("MO", "Macau"),
					("MK", "Macedonia"),
					("MG", "Madagascar"),
					("MY", "Malaysia"),
					("MW", "Malawi"),
					("MV", "Maldives"),
					("ML", "Mali"),
					("MT", "Malta"),
					("MH", "Marshall Islands"),
					("MQ", "Martinique"),
					("MR", "Mauritania"),
					("MU", "Mauritius"),
					("ME", "Mayotte"),
					("MX", "Mexico"),
					("MI", "Midway Islands"),
					("MD", "Moldova"),
					("MC", "Monaco"),
					("MN", "Mongolia"),
					("MS", "Montserrat"),
					("MA", "Morocco"),
					("MZ", "Mozambique"),
					("MM", "Myanmar"),
					("NA", "Nambia"),
					("NU", "Nauru"),
					("NP", "Nepal"),
					("AN", "Netherland Antilles"),
					("NL", "Netherlands (Holland, Europe)"),
					("NV", "Nevis"),
					("NC", "New Caledonia"),
					("NZ", "New Zealand"),
					("NI", "Nicaragua"),
					("NE", "Niger"),
					("NG", "Nigeria"),
					("NW", "Niue"),
					("NF", "Norfolk Island"),
					("NO", "Norway"),
					("OM", "Oman"),
					("PK", "Pakistan"),
					("PW", "Palau Island"),
					("PS", "Palestine"),
					("PA", "Panama"),
					("PG", "Papua New Guinea"),
					("PY", "Paraguay"),
					("PE", "Peru"),
					("PH", "Philippines"),
					("PO", "Pitcairn Island"),
					("PL", "Poland"),
					("PT", "Portugal"),
					("PR", "Puerto Rico"),
					("QA", "Qatar"),
					("ME", "Republic of Montenegro"),
					("RS", "Republic of Serbia"),
					("RE", "Reunion"),
					("RO", "Romania"),
					("RU", "Russia"),
					("RW", "Rwanda"),
					("NT", "St Barthelemy"),
					("EU", "St Eustatius"),
					("HE", "St Helena"),
					("KN", "St Kitts-Nevis"),
					("LC", "St Lucia"),
					("MB", "St Maarten"),
					("PM", "St Pierre &amp; Miquelon"),
					("VC", "St Vincent &amp; Grenadines"),
					("SP", "Saipan"),
					("SO", "Samoa"),
					("AS", "Samoa American"),
					("SM", "San Marino"),
					("ST", "Sao Tome &amp; Principe"),
					("SA", "Saudi Arabia"),
					("SN", "Senegal"),
					("RS", "Serbia"),
					("SC", "Seychelles"),
					("SL", "Sierra Leone"),
					("SG", "Singapore"),
					("SK", "Slovakia"),
					("SI", "Slovenia"),
					("SB", "Solomon Islands"),
					("OI", "Somalia"),
					("ZA", "South Africa"),
					("ES", "Spain"),
					("LK", "Sri Lanka"),
					("SD", "Sudan"),
					("SR", "Suriname"),
					("SZ", "Swaziland"),
					("SE", "Sweden"),
					("CH", "Switzerland"),
					("SY", "Syria"),
					("TA", "Tahiti"),
					("TW", "Taiwan"),
					("TJ", "Tajikistan"),
					("TZ", "Tanzania"),
					("TH", "Thailand"),
					("TG", "Togo"),
					("TK", "Tokelau"),
					("TO", "Tonga"),
					("TT", "Trinidad &amp; Tobago"),
					("TN", "Tunisia"),
					("TR", "Turkey"),
					("TU", "Turkmenistan"),
					("TC", "Turks &amp; Caicos Is"),
					("TV", "Tuvalu"),
					("UG", "Uganda"),
					("UA", "Ukraine"),
					("AE", "United Arab Emirates"),
					("GB", "United Kingdom"),
					("US", "United States of America"),
					("UY", "Uruguay"),
					("UZ", "Uzbekistan"),
					("VU", "Vanuatu"),
					("VS", "Vatican City State"),
					("VE", "Venezuela"),
					("VN", "Vietnam"),
					("VB", "Virgin Islands (Brit)"),
					("VA", "Virgin Islands (USA)"),
					("WK", "Wake Island"),
					("WF", "Wallis &amp; Futana Is"),
					("YE", "Yemen"),
					("ZR", "Zaire"),
					("ZM", "Zambia"),
					("ZW", "Zimbabwe")
				)

	name = models.CharField(max_length = 100)
	title = models.CharField(max_length=200, default="")
	email = models.EmailField()
	age = models.CharField(max_length=3, choices=AGE_CHOICES)
	date = models.DateTimeField(default=datetime.now, blank=True)
	demo_tags = models.ManyToManyField(Tag, related_name="demo")
	sex_tags = models.ManyToManyField(Tag, related_name="sexuality")
	theme_tags = models.ManyToManyField(Tag, related_name="themes")
	experience_tags = models.ManyToManyField(Tag, related_name="experiences", blank=True)
	city = models.CharField(max_length=30, default="")
	state = models.CharField(max_length=2, choices=STATE_CHOICES, default="")
	country = models.CharField(max_length=2, choices=COUNTRY_CHOICES, default="")
	definition = models.TextField(max_length=130) # of virginity
	text = models.TextField()

	def __unicode__(self):
		return self.definition

	class Meta:
		verbose_name_plural = 'Stories'

moderation.register(Definition)
moderation.register(Story)
moderation.register(Tag)