from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField, PasswordField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


class UserSignUpForm(FlaskForm):
    # username = StringField(
    #     'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    first_name = StringField("First Name", validators=[DataRequired()])
    last_name = StringField("Last Name", validators=[DataRequired()])
    birth_date = IntegerField("Birth Date", validators=[DataRequired()])
    img_url = TextField("Profile Photo")
    gender = StringField("Gender", choices=[
                         "Male", "Female", "Prefer not to say"])
    hashed_password = PasswordField('password', validators=[DataRequired()])
    submit = SubmitField('Sign Up')
