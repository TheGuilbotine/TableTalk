from app.models import db
from app.models.business import Business


def seed_businesses():
    monte = Business(
        email="monte@business.com", business_name="TheFlaggShip Group", first_name="Monte", last_name="Flagg", password="password")
    sunny = Business(
        email="sunny@business.com", business_name="SunnyCorp", first_name="Sunny", last_name="Mallick", password="password")
    pierre = Business(
        email="pierre@business.com", business_name="PMG", first_name="Pierre", last_name="Guilbault", password="password")
    jonathan = Business(
        email="jonathan@business.com", business_name="QPS", first_name="Jonathan", last_name="Borja", password="password")

    db.session.add(monte)
    db.session.add(sunny)
    db.session.add(pierre)
    db.session.add(jonathan)

    db.session.commit()


def undo_businesses():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
