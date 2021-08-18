from flask import Blueprint, jsonify
from flask_login import login_required
from app.models.reservations import Reservation

reservation_routes = Blueprint('reservations', __name__)


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
