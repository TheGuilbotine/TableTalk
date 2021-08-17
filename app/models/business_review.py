from .db import db


class BusinessReview(db.Model):
    __tablename__ = "business_reviews"

    id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(db.Integer, db.ForeignKey(
        "businesses.id"), nullable=False)
    comment = db.Column(db.String, nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'business_id': self.business_id,
            'comment': self.comment
        }
