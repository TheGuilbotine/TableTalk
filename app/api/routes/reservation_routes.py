from app.models.restaurant import Restaurant
from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from app.models.reservations import Reservation
from app.forms.reservation_form import ReservationForm
from app.models.db import db
from app.models.rewards import Reward

reservation_routes = Blueprint('reservations', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# Get user reservations


@reservation_routes.route('/users/<int:userId>')
@login_required
def user_reservations(userId):
    reservations_query = Reservation.query.filter(
        Reservation.user_id == userId).all()
    reservations = [reservation.to_dict()
                    for reservation in reservations_query]
    for reservation in reservations:
        reservation['restaurant'] = Restaurant.query.get(
            reservation['restaurant_id']).to_dict()
    return {"reservations": reservations}
    # return {'reservations': [reservation.to_dict() for reservation in reservations]}

# Get restaurant reservations


@reservation_routes.route('/restaurants/<int:restaurantId>')
@login_required
def restaurant_reservations(restaurantId):
    reservations = Reservation.query.filter(
        Reservation.restaurant_id == restaurantId)
    return {'reservations': [reservation.to_dict() for reservation in reservations]}

# Get one reservation


@reservation_routes.route('/<int:id>')
@login_required
def reservation(id):
    reservation = Reservation.query.get(id)
    return reservation.to_dict()

# Create one reservation


@reservation_routes.route('/', methods=['GET', 'POST'])
@login_required
def create_reservation():
    print("++++++++++++++")
    print(current_user)
    print("++++++++++++++")
    form = ReservationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        reservation = Reservation(
            user_id=current_user.id,
            restaurant_id=form.data['restaurant_id'],
            number_of_guests=form.data['number_of_guests'],
            date_start=form.data['date_start'],
            time_start=form.data['time_start'],
            share_table=form.data['share_table'],
        )
        db.session.add(reservation)
        db.session.commit()
        reward = Reward(
            user_id=current_user.id,
            restaurant_id=form.data['restaurant_id'],
            reward_amount=50,
        )
        db.session.add(reward)
        db.session.commit()
        return {"message": "Let's Eat"}, 200
    errors = form.errors
    print(errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Delete one reservation


@reservation_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_reservation(id):
    reservation = Reservation.query.get(id)
    db.session.delete(reservation)
    db.session.commit()

    # TODO which business f'{business.id}
    return {}, 200


# Edit one reservation

@reservation_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_reservation(id):
    Reservation.query.get(id).update()
    db.session.commit()
    return redirect("/<int:id>")
