from flask_wtf import FlaskForm
from wtforms import IntegerField, BooleanField, DateField, TimeField, SubmitField
from wtforms.validators import DataRequired


# TODO add validators on date and time.
# TODO potentail validators on how many seats are available.

class ReservationForm(FlaskForm):
    user_id = IntegerField('User ID', validators=[DataRequired()])
    restaurant_id = IntegerField('Restaurant ID', validators=[DataRequired()])
    number_of_guests = IntegerField("Guests", validators=[DataRequired()])
    date_start = DateField("Date", validators=[DataRequired()])
    time_start = TimeField("Time", validators=[DataRequired()])
    share_table = BooleanField("Up to sharing?", validators=[DataRequired()])
    submit = SubmitField('Reserve my Table!')
