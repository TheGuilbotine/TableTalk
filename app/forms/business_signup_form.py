from flask_wtf import FlaskForm
from wtforms import StringField, TextField, TextAreaField, IntegerField, SelectField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models.business import Business
from app.models.restaurant import Restaurant


def business_user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = Business.query.filter(Business.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def business_name_exists(form, field):
    # Checking if businessname is already in use
    business_name = field.data
    business = Business.query.filter(
        Business.business_name == business_name).first()
    if business:
        raise ValidationError('Business name is already in use.')

def phone_number_exists(form, field):
    # Checking if restaurant phone number is already in use
    phone_number = field.data
    phone = Restaurant.query.filter(
        Restaurant.phone_number == phone_number).first()
    if phone:
        raise ValidationError('This phone number is already in use.')


class BusinessSignUpForm(FlaskForm):
    # username = StringField(
    #     'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[
                        DataRequired(), business_user_exists, Email()])
    business_name = StringField(
        "Business Name", validators=[business_name_exists])
    first_name = StringField("First Name")
    last_name = StringField("Last Name")
    restaurant_name = StringField("Restaurant Name", validators=[
        DataRequired()])
    phone_number = StringField("Phone Number", validators=[
                               DataRequired(), phone_number_exists])
    cuisine_type = SelectField('Cuisine Type', choices=[
                               'Sushi', 'BBQ', 'Italian',
                               'Thai', 'Vegan', 'French',
                               'Vietnamese', 'Korean', 'American',
                               'Southern', 'Indian', 'Brazilian'], validate_choice=True)
    description = TextAreaField("Description", validators=[DataRequired()])
    price_range = SelectField("Price Range", choices=[
                              "$ - under $10 per plate", "$$ - $11-$20 per plate", "$$$ - $21 -$30 per plate", "$$$$ - $31 + per plate"], validators=[DataRequired()])
    address_line_one = StringField(
        'Address Line 1', validators=[DataRequired()])
    address_line_two = StringField('Address Line 2')
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    postal_code = IntegerField('Zip Code', validators=[DataRequired()])
    country = StringField('Country', validators=[DataRequired()])
    image_url = TextField('Image URL', validators=[DataRequired()])
    hashed_password = PasswordField('password', validators=[DataRequired()])
    submit = SubmitField('Sign Up')
