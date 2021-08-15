from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField, SelectField
from wtforms.validators import DataRequired, ValidationError
from app.models import Restaurant


def restaurant_name_exists(form, field):
    # Checking if restaurantname is already in use
    restaurant_name = field.data
    restaurant = Restaurant.query.filter(
        Restaurant.name == restaurant_name).first()
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
    name = StringField("Restaurant Name", validators=[
                       DataRequired(), restaurant_name_exists])
    phone_number = StringField("Phone Number", validators=[
                               DataRequired(), phone_number_exists])
    description = TextField("Description", validators=[DataRequired()])
    price_range = SelectField("Price Range", choices=[
                              "$", "$$", "$$$", "$$$$"], validators=[DataRequired()])
