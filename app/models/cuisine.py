from .db import db


class Cuisine(db.Model):
    __tablename__ = "cuisines"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(30))

    # TODO add options for Asian Fusion or make Many to Many FUTURE
    restaurants = db.relationship("Restaurant", back_populates="cuisine")

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            # 'restaurants': self.restaurants
        }
