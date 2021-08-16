from .db import db


class RestaurantReview(db.Model):
    __tablename__ = "restaurant_reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurant.id"))
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String, nullable=False)
    photo = db.Column(db.Text, nullable=False)

    image = db.relationship("Image", back_populates="user_review")
    user = db.relationship("User", back_populates="restaurant_reviews")
