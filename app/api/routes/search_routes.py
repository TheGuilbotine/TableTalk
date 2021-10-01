from flask import Blueprint, request
from app.models import Restaurant


search_routes = Blueprint("search", __name__)

# Search Restaurants


@search_routes.route("/")
def get_results():
    """
    Search database for restaurants.
    """
    if "restaurant" in request.args:
        search_str = request.args.get("restaurant")
        results = Restaurant.query.filter(
            Restaurant.restaurant_name.ilike("%"+search_str+"%"))
    return {"results": [restaurant.to_dict() for restaurant in results]}
