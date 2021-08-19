from flask import Blueprint, redirect, jsonify

from app.forms.business_signup_form import BusinessSignUpForm
from app.forms.restaurant_form import RestaurantForm
from app.models import restaurant
from app.models.business import Business
from app.models.restaurant import Restaurant
from app.models import db

business_routes = Blueprint('business', __name__)


@business_routes.route('/')
def business_home():
    return '<h1> Table Talk Business </h1>'

# Get restaurants by business


@business_routes.route('/<int:businessId>')
def business_restaurants(businessId):
    restaurants = Restaurant.query.filter(
        Restaurant.business_id == businessId).all()
    print(restaurants)
    return {'restaurants': [restaurant.to_dict() for restaurant in restaurants]}
