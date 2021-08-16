from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, TextField, SelectField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import RestaurantReview


class RestaurantReviewForm(FlaskForm):
    comment = StringField('Comment', validators=[DataRequired()])
    photo = TextField('Photo URL')
    rating = SelectField('Rating', choices=[
                         '⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️'], validate_choice=True)
    submit = SubmitField('Submit')
