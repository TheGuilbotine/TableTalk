from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.user import User
from app.models.business import Business
from app.models.address import Address
from app.models.restaurant import Restaurant
from app.models.images import Image
from app.forms.user_login_form import UserLoginForm
from app.forms.user_signup_form import UserSignUpForm
from app.forms.business_login_form import BusinessLoginForm
from app.forms.business_signup_form import BusinessSignUpForm
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/user/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = UserLoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/user/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = UserSignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            email=form.data['email'],
            first_name=form.data['first_name'],
            last_name=form.data['last_name'],
            birth_date=form.data['birth_date'],
            img_url=form.data['img_url'],
            gender=form.data['gender'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/business/login', methods=['POST'])
def business_login():
    """
    Logs a business in
    """
    form = BusinessLoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        business = Business.query.filter(
            User.email == form.data['email']).first()
        login_user(business)
        return business.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/business/signup', methods=['POST'])
def business_sign_up():
    """
    Creates a new business and logs them in
    """
    form = BusinessSignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("==========================")
    print(form.data['cuisine_id'])
    print("==========================")
    if form.validate_on_submit():
        business = Business(
            email=form.data['email'],
            business_name=form.data['business_name'],
            first_name=form.data['first_name'],
            last_name=form.data['last_name'],
            password=form.data['password']
        )
        db.session.add(business)
        db.session.commit()
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
        login_user(business)
        return {**business.to_dict(), **address.to_dict(), **restaurant.to_dict(), **image.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/user/logout')
def user_logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/business/logout')
def business_logout():
    """
    Logs a business out
    """
    logout_user()
    return {'message': 'Business logged out'}


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
