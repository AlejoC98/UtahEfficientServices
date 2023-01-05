from app import app
from app.functions import mail

if __name__ == '__main__':
	mail.init_app(app)
	
	app.run()
