from flask import Blueprint, jsonify
from flask_login import login_required

home_routes = Blueprint('', __name__)


@home_routes.route('/')
def home():
    return '<h1> Table Talk </h1>'
