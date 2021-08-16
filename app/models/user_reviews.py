from .db import db


class UserReview(db.Model):
    __tablename__ = "user_reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id"), nullable=False)
    comment = db.Column(db.String, nullable=False)
    photo = db.Column(db.Text, nullable=True)

    image = db.relationship("Image", back_populates="user_review")
