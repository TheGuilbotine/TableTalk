from flask import Blueprint
from app.models import db
from app.models.cuisine import Cuisine

cuisine_routes = Blueprint('cuisine', __name__)

@cuisine_routes.route('/')
def cuisines():
    cuisines = Cuisine.query.all()
    return {'cuisines': [cuisine.to_dict() for cuisine in cuisines]}