from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField, SelectField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models.cuisine import Cuisine
from app.models.restaurant import Restaurant


def restaurant_types(form, field):
    cuisines = Cuisine.query.all()

    return cuisines


def restaurant_name_exists(form, field):
    # Checking if restaurantname is already in use
    restaurant_name = field.data
    restaurant = Restaurant.query.filter(
        Restaurant.restaurant_name == restaurant_name).first()
    if restaurant:
        raise ValidationError('Restaurant name is already in use.')


def phone_number_exists(form, field):
    # Checking if restaurant phone number is already in use
    phone_number = field.data
    phone = Restaurant.query.filter(
        Restaurant.phone_number == phone_number).first()
    if phone:
        raise ValidationError('This phone number is already in use.')


class RestaurantForm(FlaskForm):
    business_id = IntegerField('Business ID', validators=[
        DataRequired()])
    restaurant_name = StringField("Restaurant Name", validators=[
        DataRequired(), restaurant_name_exists])
    phone_number = StringField("Phone Number", validators=[
                               DataRequired(), phone_number_exists])
    # TODO make dynamic
    cuisine_id = SelectField('Cuisine Type', choices=[
                             1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], validate_choice=True)
    description = TextField("Description", validators=[DataRequired()])
    price_range = SelectField("Price Range", choices=[
                              1, 2, 3, 4], validators=[DataRequired()])
    address_line_one = StringField(
        'Address Line 1', validators=[DataRequired()])
    address_line_two = StringField('Address Line 2')
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    postal_code = IntegerField('Zip Code', validators=[DataRequired()])
    country = StringField('Country', validators=[DataRequired()])
    img_url = TextField('Image URL')
    submit = SubmitField('Add Restaurant')
