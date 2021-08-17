from .db import db


class Address(db.Model):
    __tablename__ = 'addresses'

    id = db.Column(db.Integer, primary_key=True)
    address_line_one = db.Column(db.String(100), nullable=False)
    address_line_two = db.Column(db.String(100), nullable=True)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    postal_code = db.Column(db.Integer, nullable=False)
    country = db.Column(db.String(50), nullable=False)

    restaurant = db.relationship(
        "Restaurant", back_populates="address")

    def to_dict(self):
        return {
            'id': self.id,
            'address_line_one': self.address_line_one,
            'address_line_two': self.address_line_two,
            'city': self.city,
            'state': self.state,
            'postal_code': self.postal_code,
            'country': self.country,
            # 'restaurant': self.restaurant
        }
