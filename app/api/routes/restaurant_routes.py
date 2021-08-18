from flask import Blueprint, redirect, request
from flask_request_params import bind_request_params
from app.models.restaurant import Restaurant
from flask_login import login_required
from app.forms.restaurant_form import RestaurantForm
from app.models.db import db


restaurant_routes = Blueprint('restaurants', __name__)


@restaurant_routes.route('/')
def restaurants():
    restaurants = Restaurant.query.all()
    return {'restaurants': [restaurant.to_dict() for restaurant in restaurants]}


@restaurant_routes.route('/<int:id>')
def restaurant(id):
    restaurant = Restaurant.query.get(id)
    return restaurant.to_dict()


@restaurant_routes.route('/', methods=['POST'])
@login_required
def create_restaurant():
    form = Restaurant()
    if form.validate_on_submit():
        data = RestaurantForm()
        form.populate_obj(data)
        db.session.add(data)
        db.session.commit()
        return redirect("/f'{data.id}'")
    errors = form.errors
    print(errors)


@restaurant_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_restaurant(id):
    business = request.args.get('business')
    print(business)
    Restaurant.query.get(id).delete()
    db.session.commit()
    # TODO which business f'{business.id}
    return redirect("/business'")


@restaurant_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_restaurant(id):
    Restaurant.query.get(id).update()
    db.session.commit()
    return redirect("/<int:id>")
