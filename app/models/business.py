from .db import db


class Business(db.Model):
    __tablename__ = "businesses"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    business_name = db.Column(db.String(50), nullable=True, unique=True)
    first_name = db.Column(db.String(30), nullable=True)
    last_name = db.Column(db.String(50), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    restaurants = db.relationship("Restaurant", back_populate="business")
