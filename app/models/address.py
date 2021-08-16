from .db import db


class Address(db.Model):
    __tablename__ = 'addresses'

    id = db.Column(db.Integer, primary_key=True)
    address_line_one = db.Column(db.String(100), nullable=False)
    address_line_two = db.Column(db.String(100), nullable=True)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    postal_code = db.Column(db.Integer, nullable=False)
    country = db.Column(db.String(50), nullable=False)

    # TODO: one to many or one to one?
    restaurant = db.relationship(
        "Restaurant", back_populates="address")
