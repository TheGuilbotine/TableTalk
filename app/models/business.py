from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
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

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

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
