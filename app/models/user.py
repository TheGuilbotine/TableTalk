from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), nullable=False)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)
    birth_date = db.Column(db.Date, nullable=False)
    img_url = db.Column(db.Text, nullable=True)
    gender = db.Column(db.String, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    reservations = db.relationship("Reservation", back_populates="user")
    restaurant_reviews = db.relationship(
        "RestaurantReview", back_populates="user")
    user_reviews = db.relationship("UserReview", back_populates="user")
    image = db.relationship('Image', back_populates='user')
    rewards = db.relationship('Reward', back_populates='user')

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
            'first_name': self.first_name,
            'last_name': self.last_name,
            'birth_date': self.birth_date,
            'img_url': self.img_url,
            'gender': self.gender,
            'hashed_password': self.hashed_password,
            # 'reservations': self.reservations,
            # 'restaurant_reviews': self.restaurant_reviews,
            # 'user_reviews': self.user_reviews,
            # 'image': self.image,
            # 'rewards': self.rewards
        }
