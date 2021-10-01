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
    user_reviews = UserReview.query.all()
    return {'reviews': [review.to_dict() for review in user_reviews]}


@user_review_routes.route('/', methods=['POST'])
def create_review():
    form = UserReviewForm()
    print(form.data)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_review = UserReview(
            user_id=form.data['user_id'],
            image_id=form.data['image_id'],
            restaurant_id=form.data['restaurant_id'],
            comment=form.data['comment'],
            photo=form.data['photo']
        )
        db.session.add(new_review)
        db.session.commit()
        return {'message': 'We made a review!'}, 200
    errors = form.errors
    return {'errors': validation_errors_to_error_messages(errors)}, 401

@user_review_routes.route('/<int:id>', methods=['PUT'])
def edit_review(id):
    data = request.json
    review = UserReview.query.get(id)

    review.comment = data['review']
    db.session.commit()
    return review.to_dict()

@user_review_routes.route('/<int:id>', methods=['DELETE'])
def delete_review(id):
    review = UserReview.query.get(id)

    db.session.delete(review)
    db.session.commit()
    return {}, 200
