from flask import Blueprint, redirect, request
# from flask_request_params import bind_request_params
from app.models.restaurant import Restaurant
from flask_login import login_required
# from app.forms.restaurant_form import RestaurantForm
from app.models.db import db
# from app.models.business import Business
from app.models.address import Address
from app.forms.restaurant_form import RestaurantForm
from app.models.images import Image
from app.models.cuisine import Cuisine


restaurant_routes = Blueprint('restaurants', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@restaurant_routes.route('/')
def restaurants():
    restaurants = Restaurant.query.all()
    return {'restaurants': [restaurant.to_dict() for restaurant in restaurants]}


@restaurant_routes.route('/<int:id>')
def restaurant(id):
    restaurant = Restaurant.query.get(id)
    cuisine = Cuisine.query.get(restaurant.cuisine_id)
    address = Address.query.get(restaurant.address_id)
    return {**restaurant.to_dict(), **cuisine.to_dict(), **address.to_dict()}


@restaurant_routes.route('/', methods=['POST'])
@login_required
def create_restaurant():
    """
    Creates a new restaurant
    """
    form = RestaurantForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("========flags============")
    print(form.data)
    print("========flags============")
    if form.validate_on_submit():
        address = Address(
            address_line_one=form.data['address_line_one'],
            address_line_two=form.data['address_line_two'],
            city=form.data['city'],
            state=form.data['state'],
            postal_code=form.data['postal_code'],
            country=form.data['country'],
        )
        db.session.add(address)
        db.session.commit()
        restaurant = Restaurant(
            business_id=form.data['business_id'],
            restaurant_name=form.data['restaurant_name'],
            address_id=address.id,
            phone_number=form.data['phone_number'],
            cuisine_id=form.data['cuisine_id'],
            description=form.data['description'],
            price_range=form.data['price_range'],
        )
        db.session.add(restaurant)
        db.session.commit()
        image = Image(
            img_url=form.data['img_url'],
            restaurant_id=restaurant.id
        )
        db.session.add(image)
        db.session.commit()
        return {**address.to_dict(), **restaurant.to_dict(), **image.to_dict()}
    errors = form.errors
    print(errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@restaurant_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_restaurant(id):
    business = request.args.get('business')
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
