from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models.business import Business


def business_exists(form, field):
    # Checking if user exists
    email = field.data
    business = Business.query.filter(Business.email == email).first()
    if not business:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    business = Business.query.filter(Business.email == email).first()
    if not business:
        raise ValidationError('No such user exists.')
    if not business.check_password(password):
        raise ValidationError('Password was incorrect.')


class BusinessLoginForm(FlaskForm):
    email = StringField('email', validators=[
                        DataRequired(), business_exists, Email()])
    password = StringField('password', validators=[
                           DataRequired(), password_matches])
    submit = SubmitField('Login')
