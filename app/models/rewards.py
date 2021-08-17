from .db import db

# Super difficult feature. Points earned and spent at the same restuarant.
# Need authentication to reset points or remove points spent.
# Extra points given to unsatisfied users.
# Track times visited, loyalty, amount spent per visit.


class Reward(db.Model):
    __tablename__ = "rewards"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    restaurant_id = db.Column(db.Integer, db.ForeignKey(
        "restaurants.id"), nullable=False)
    reward_amount = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates="rewards")
    restaurant = db.relationship("Restaurant", back_populates="reward")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'restaurant_id': self.restaurant_id,
            'rewards_amount': self.rewards_amount,
            # 'user': self.user,
            # 'restaurant': self.restaurant
        }
