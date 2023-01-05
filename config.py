import os

class Config(object):

	MAIL_SERVER='smtp.gmail.com'
	MAIL_PORT = 465
	MAIL_USE_SSL = True
	MAIL_USERNAME = 'alegomezc64@gmail.com'
	MAIL_PASSWORD = 'bskhtlashcloysah'	

class DevelopmentConfig(Config):
	DEBUG = True