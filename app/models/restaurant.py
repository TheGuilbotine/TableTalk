from .db import db


class Restaurant(db.Model):
    __tablename__ = "restaurants"

    id = db.Column(db.Integer, primary_key=True)
    restaurant_name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(14), nullable=False, unique=True)
    description = db.Column(db.Text)
    price_range = db.Column(db.Integer, nullable=False)
    address_id = db.Column(db.Integer, db.ForeignKey(
        "addresses.id"), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey(
        "businesses.id"), nullable=False)
    cuisine_id = db.Column(db.Integer, db.ForeignKey(
        "cuisines.id"), nullable=False)
    # TODO add set reward amount that is given to users who share tables.

    address = db.relationship(
        "Address", back_populates="restaurant", uselist=False)
    business = db.relationship("Business", back_populates="restaurants")
    cuisine = db.relationship("Cuisine", back_populates="restaurants")
    images = db.relationship("Image", back_populates="restaurant")
    reservations = db.relationship("Reservation", back_populates="restaurant")
    restaurant_reviews = db.relationship(
        "RestaurantReview", back_populates="restaurant")
    reward = db.relationship('Reward', back_populates='restaurant')

    def to_dict(self):
        return {
            'id': self.id,
            'restaurant_name': self.restaurant_name,
            'phone_number': self.phone_number,
            'description': self.description,
            'price_range': self.price_range,
            'address_id': self.address_id,
            'business_id': self.business_id,
            'cuisine_id': self.cuisine_id,
            # 'address': self.address,
            # 'business': self.business,
            # 'cuisine': self.cuisine,
            # 'image': self.images,
            # 'reservations': self.reservations,
            # 'restaurant_reviews': self.restaurant_reviews,
            # 'reward': self.reward
        }
