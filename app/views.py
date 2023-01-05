from flask import request, redirect, render_template, url_for, copy_current_request_context
from app import app
from flask_mail import Mail, Message
import threading, json
from . import functions
 
# mail = Mail()

@app.errorhandler(404)
def page_not_found(e):
	return render_template('page-404.html.j2', title = 'Page not found', body_type = "innerPage"), 404
	
@app.route("/")
@app.route("/Home")
def index():
	return render_template("index.html.j2", title = "Utah Efficient Services LLC", body_type = "homePage")

@app.route("/About Us")
def about():
	return render_template("about.html.j2", title = "About Us", body_type = "homePage")

@app.route("/Our Services")
def gallery():
	return render_template("gallery.html.j2", title = "Our Services", body_type = "innerPage")

@app.route("/Contact", methods = ['POST', 'GET'])
def contact():

	return render_template("contact.html.j2", title = "Contact Us", body_type = "innerPage")

@app.route("/ajax-request", methods = ['POST', 'GET'])
def ajax_request():
	# Getting info
	getting_info = request.form
	# Calling the funcution
	method_to_call = getattr(functions, getting_info["function_name"])(getting_info)

	return json.dumps(method_to_call)