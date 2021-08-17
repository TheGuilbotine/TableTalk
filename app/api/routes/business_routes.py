from flask import Blueprint, redirect, jsonify

from app.forms.business_signup_form import BusinessSignUpForm
from app.forms.restaurant_form import RestaurantForm
from app.models.business import Business
from app.models import db

business_routes = Blueprint('business', __name__)


@business_routes.route('/')
def business_home():
    return '<h1> Table Talk Business </h1>'

