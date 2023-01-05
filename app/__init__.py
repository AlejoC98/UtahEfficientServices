from flask import Flask
from config import DevelopmentConfig
import os

app = Flask(__name__)
app.config.from_object(DevelopmentConfig)

from app import views