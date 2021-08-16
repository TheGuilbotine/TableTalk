from .db import db


class Restaurant(db.Model):
    __tablename__ = "restaurants"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(14), nullable=False, unique=True)
    description = db.Column(db.Text)
    price_range = db.Column(db.Integer, nullable=False)
    address_id = db.Column(db.Integer, db.ForeignKey(
        "restaurants.id"), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey(
        "businesses.id"), nullable=False)
    cuisine_id = db.Column(db.Integer, db.ForeignKey(
        "cuisines.id"), nullable=False)
    # TODO add set reward amount that is given to users who share tables.

    address = db.relationship(
        "Address", back_populates="restaurant", uselist=False)
    business = db.relationship("Business", back_populates="restaurants")
    cuisine = db.relationship("Cuisine", back_populates="restaurants")
    images = db.relationship("Images", back_populates="restaurant")
