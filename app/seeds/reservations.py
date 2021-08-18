from app.models import db
from app.models.reservations import Reservation
import datetime


def seed_reservations():
    res1 = Reservation(
        user_id=4, restaurant_id=8, number_of_guests=3, date_start=datetime.date(2021, 11, 9), time_start=datetime.time(20, 00), share_table=True)

    db.session.add(res1)

    db.session.commit()


def unndo_reservations():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE;')
    db.session.commit()
