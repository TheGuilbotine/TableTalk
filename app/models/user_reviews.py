from .db import db
from .user import User


class UserReview(db.Model):
    __tablename__ = "user_reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    image_id = db.Column(db.Integer, db.ForeignKey('images.id'), nullable=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurants.id'), nullable=False)
    comment = db.Column(db.String, nullable=False)
    photo = db.Column(db.Text, nullable=True)

    image = db.relationship("Image", back_populates="user_review")
    user = db.relationship("User", back_populates="user_reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'image_id': self.image_id,
            'restaurant_id': self.restaurant_id,
            'comment': self.comment,
            'photo': self.photo,
            'user': User.query.get(self.user_id).first_name
            # 'image': self.image,
            # 'user': self.user
        }
