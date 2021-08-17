from .db import db
from flask_login import UserMixin



class Business(db.Model, UserMixin):
    __tablename__ = "businesses"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    business_name = db.Column(db.String(50), nullable=True, unique=True)
    first_name = db.Column(db.String(30), nullable=True)
    last_name = db.Column(db.String(50), nullable=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    restaurants = db.relationship("Restaurant", back_populates="business")

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'business_name': self.business_name,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'hashed_password': self.hashed_password,
            # 'restaurants': self.restaurants
        }
