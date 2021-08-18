from flask import Blueprint, redirect, request
# from flask_request_params import bind_request_params
from app.models.restaurant import Restaurant
from flask_login import login_required
# from app.forms.restaurant_form import RestaurantForm
from app.models.db import db
# from app.models.business import Business
from app.models.address import Address
from app.models.restaurant import Restaurant
from app.models.images import Image


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
    print("========flags============")
    print("are we here?")
    print("========flags============")
    form = Restaurant()
    if form.validate_on_submit():
        business = request.args.get('business')
        print("========flags============")
        print(business)
        print("========flags============")
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
            business_id=business.id,
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
