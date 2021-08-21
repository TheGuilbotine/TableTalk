from flask import Blueprint, redirect, jsonify

from app.forms.business_signup_form import BusinessSignUpForm
from app.forms.restaurant_form import RestaurantForm
from app.models import restaurant
from app.models import cuisine
from app.models.business import Business
from app.models.cuisine import Cuisine
from app.models.restaurant import Restaurant
from app.models.images import Image
from app.models.address import Address
from app.models import db

business_routes = Blueprint('business', __name__)


@business_routes.route('/')
def business_home():
    return '<h1> Table Talk Business </h1>'


@business_routes.route('/<int:businessId>')
def business_restaurants(businessId):
    restaurants_query = Restaurant.query.filter(
        Restaurant.business_id == businessId).all()
    restaurants = [restaurant.to_dict() for restaurant in restaurants_query]
    for restaurant in restaurants:
        restaurant['cuisine_id'] = Cuisine.query.get(
            restaurant["cuisine_id"]).to_dict()
        restaurant['address_id'] = Address.query.get(
            restaurant["address_id"]).to_dict()
        images = Image.query.filter(
            Image.restaurant_id == restaurant["id"]).all()
        restaurant["images"] = [image.to_dict() for image in images]
    return {"restaurants": restaurants}
