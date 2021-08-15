from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField, SelectField
from wtforms.validators import DataRequired


class RestaurantForm(FlaskForm):
    name = StringField("Restaurant Name", validators=[DataRequired()])
    phone_number = StringField("Phone Number", validators=[DataRequired()])
    description = TextField("Description", validators=[DataRequired()])
    price_range = SelectField("Price Range", choices=[
                              "$", "$$", "$$$", "$$$$"], validators=[DataRequired()])
