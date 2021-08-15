from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Business


def business_user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = Business.query.filter(Business.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


def business_name_exists(form, field):
    # Checking if businessname is already in use
    business_name = field.data
    business = Business.query.filter(
        Business.business_name == business_name).first()
    if business:
        raise ValidationError('Business name is already in use.')


class BusinessSignUpForm(FlaskForm):
    # username = StringField(
    #     'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[
                        DataRequired(), business_user_exists])
    business_name = StringField(
        "Business Name", validators=[business_name_exists])
    first_name = StringField("First Name")
    last_name = StringField("Last Name")
    # TODO hashed or password?
    hashed_password = PasswordField('password', validators=[DataRequired()])
    submit = SubmitField('Sign Up')
