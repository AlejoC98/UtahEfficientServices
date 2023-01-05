from flask_mail import Mail, Message
from flask import render_template
from app import app

mail = Mail()

def send_email(customer_data):

	data = {'customer_name': customer_data['name'], 
				'customer_lastname': customer_data['lastname'],
				'customer_phone' : customer_data['phone'],
				'customer_email' : customer_data['email'],
				'customer_message' : customer_data['message']
				}

	msg = Message("This person is triying to contact you!", 
		sender = 'Admin High Tech',
		recipients = ["alegomezc98@outlook.es"])

	msg.html = render_template('email.html', data = data, title = "This person is triying to contact you!")

	with app.open_resource("static/images/Logo Options/email-logo.png") as fp:
		msg.attach("static/images/Logo Options/email-logo.png", "image/png", fp.read(), 'inline', headers=[['Content-ID','<logo>'],])
	
	try:
		if mail.send(msg):			
			response = {"status" : True, "title" : "Thanks for contact us! ","message" : " Your message had been sent."}
		else:			
			response = {"status" : True, "title" : "Thanks for contact us! ","message" : " Your message had been sent."}			
	except Exception  as ex:		
		response = {"status" : False, "title" : "Sorry! ","message" : ". Something went wrong.{}".format(e.errno, e.strerror)}

	return response