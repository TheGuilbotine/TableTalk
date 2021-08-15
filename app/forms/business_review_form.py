from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField, SelectField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import BusinessReview


class BusinessReviewForm(FlaskForm):
    comment = StringField('Comment', validators=[DataRequired()])
    photo = TextField('Photo URL')
    submit = SubmitField('Submit')
