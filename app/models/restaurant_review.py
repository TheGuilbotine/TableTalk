from .db import db


class RestaurantReview(db.Model):
    __tablename__ = "restaurant_reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey("restaurants.id"))
    image_id = db.Column(db.Integer, db.ForeignKey('images.id'), nullable=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String, nullable=False)
    photo = db.Column(db.Text, nullable=False)

    image = db.relationship("Image", back_populates="restaurant_review")
    user = db.relationship("User", back_populates="restaurant_reviews")
    restaurant = db.relationship(
        "Restaurant", back_populates="restaurant_reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'restaurant_id': self.restaurant_id,
            'image_id': self.image_id,
            'rating': self.rating,
            'comment': self.comment,
            'photo': self.photo,
            # 'image': self.image,
            # 'user': self.user,
            # 'restaurant': self.restaurant
        }
