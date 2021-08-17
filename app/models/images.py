from .db import db


class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key=True)
    img_url = db.Column(db.Text, nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(
        "restaurants.id"), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)

    restaurant = db.relationship(
        "Restaurant", back_populates="images")
    user = db.relationship(
        "User", back_populates="image")
    user_review = db.relationship(
        "UserReview", back_populates="image")
    restaurant_review = db.relationship(
        "RestaurantReview", back_populates="image")

    def to_dict(self):
        return {
            'id': self.id,
            'img_url': self.img_url,
            'restaurant_id': self.restaurant_id,
            'user_id': self.user_id,
            # 'restaurant': self.restaurant,
            # 'user': self.user,
            # 'user_review': self.user_review,
            # 'restaurant_review': self.restaurant_review
        }
