from flask import Blueprint
from app.models.restaurant import Restaurant

restaurant_routes = Blueprint('restaurants', __name__)


@restaurant_routes.route('/')
def restaurants():
    restaurants = Restaurant.query.all()
    return {'restaurants': [restaurant.to_dict() for restaurant in restaurants]}


@restaurant_routes.route('/<int:id>')
def restaurant(id):
    restaurant = Restaurant.query.get(id)
    return restaurant.to_dict()
