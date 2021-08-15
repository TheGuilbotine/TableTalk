from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField, SelectField, SubmitField
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
    cuisine_type = SelectField('Cuisine Type', choices=[
                               'Sushi', 'BBQ', 'Italian', 'Thai', 'Vegan', 'French', 'Vietnamese', 'Korean', 'American', 'Southern', 'Indian'], validate_choice=True)
    description = TextField("Description", validators=[DataRequired()])
    price_range = SelectField("Price Range", choices=[
                              "$", "$$", "$$$", "$$$$"], validators=[DataRequired()])
    address_line_one = StringField(
        'Address Line 1', validators=[DataRequired()])
    address_line_two = StringField('Address Line 2')
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    postal_code = IntegerField('Zip Code', validators=[DataRequired()])
    country = StringField('Country', validators=[DataRequired()])
    image_url = TextField('Image URL', validators=[DataRequired()])
    submit = SubmitField('Continue?')
