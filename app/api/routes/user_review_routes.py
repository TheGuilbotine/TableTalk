from flask import Blueprint, request
from app.models import db, UserReview, User
from app.forms.user_review_form import UserReviewForm

user_review_routes = Blueprint('user_reviews', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@user_review_routes.route('/')
def user_reviews():
    user_reviews = User.query.all()
    return {'reviews': [review.to_dict() for review in user_reviews]}

