from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required
from app.models.reservations import Reservation
from app.models.reservation_form import ReservationForm
from app.models.db import db

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


@reservation_routes.route('/')
@login_required
def reservations():
    reservations = Reservation.query.all()
    return {'reservations': [reservation.to_dict() for reservation in reservations]}


@reservation_routes.route('/<int:id>')
@login_required
def reservation(id):
    reservation = Reservation.query.get(id)
    return reservation.to_dict()


@reservation_routes.route('/', methods=['POST'])
@login_required
def create_reservation():
    form = Reservation()
    if form.validate_on_submit():
        data = ReservationForm()
        form.populate_obj(data)
        db.session.add(data)
        db.session.commit()
        return redirect("/'")
    errors = form.errors
    print(errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@reservation_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_reservation(id):
    user = request.args.get('user')
    print(user)
    Reservation.query.get(id).delete()
    db.session.commit()
    # TODO which business f'{business.id}
    return redirect("/")


@reservation_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_reservation(id):
    Reservation.query.get(id).update()
    db.session.commit()
    return redirect("/<int:id>")
