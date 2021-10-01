from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, TextField, SubmitField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired, ValidationError
# from app.models.user_reviews import UserReview


class UserReviewForm(FlaskForm):
    user_id = IntegerField('User Id', validators=[DataRequired()])
    image_id = IntegerField('Image Id')
    restaurant_id = IntegerField('Restaurant Id', validators=[DataRequired()])
    comment = StringField('Comment', validators=[DataRequired()])
    photo = TextField('Photo URL')
    submit = SubmitField('Submit')
