from .db import db


class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.Text, nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(
        "restaurants.id"), nullable=True)
    # TODO add user_id?
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)

    restaurant = db.relationship(
        "Restaurant", back_populates="images")
    user = db.relationship(
        "User", back_populates="image")
    business_review = db.relationship(
        "BusinessReview", back_populates="image")
    user_review = db.relationship(
        "UserReview", back_populates="image")
    restaurant_review = db.relationship(
        "RestaurantReview", back_populates="image")
