from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, TextField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import UserReview


class UserReviewForm(FlaskForm):
    comment = StringField('Comment', validators=[DataRequired()])
    photo = TextField('Photo URL')
    submit = SubmitField('Submit')
