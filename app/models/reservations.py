from .db import db


class Reservation(db.Model):
    __tablename__ = "reservations"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(
        "restaurants.id"), nullable=False)
    number_of_guests = db.Column(db.Integer, nullable=False)
    date_start = db.Column(db.Date, nullable=False)
    time_start = db.Column(db.Time, nullable=False)
    share_table = db.Column(db.Boolean, nullable=False)

    # TODO Something to lok forward to ... Many to Many relationship :D
    user = db.relationship("User", back_populates="reservations")
    restaurant = db.relationship("Restaurant", back_populates="reservations")
