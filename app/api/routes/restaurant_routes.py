from flask import Blueprint
from app.models.restaurant import Restaurant

restaurant_routes = Blueprint('restaurant', __name__)

@restaurant_routes.route('/')
def restaurants():
    restaurants = Restaurant.query.all()
    return {'restaurants': [restaurant.to_dict() for restaurant in restaurants]}

