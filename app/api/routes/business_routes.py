from flask import Blueprint, redirect, jsonify

from app.forms.business_signup_form import BusinessSignUpForm
from app.forms.restaurant_form import RestaurantForm
from app.models.business import Business
from app.models import db

business_routes = Blueprint('business', __name__)


@business_routes.route('/')
def business_home():
    return '<h1> Table Talk Business </h1>'

# Business SignUp

@business_routes.route('/signup', methods=['POST'])
def business_signup():
    form = BusinessSignUpForm()
    if form.validate_on_submit():
        data = Business()
        form.populate_obj(data)
        db.session.add(data)
        db.session.commit()
        return redirect('/:id')
    errors = form.errors
    return errors

# Business LogIn
