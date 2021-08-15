from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        email="demo@user.com",
        first_name="first_name",
        last_name="last_name",
        birth_date="date",
        img_url="url",
        gender="gender",
        password="password"
    )
    monte = User(
        email="monte@user.com",
        first_name="Monte",
        last_name="Flagg",
        birth_date="12/04/1985",
        img_url="https=//i.imgur.com/VMYPjVw.jpg",
        gender="Male",
        password="password"
    )
    sunny = User(
        email="sunny@user.com",
        first_name="Sunny",
        last_name="Mallick",
        birth_date="06/24/1996",
        img_url="url",
        gender="Male",
        password="password"
    )
    pierre = User(
        email="pierre@user.com",
        first_name="Pierre",
        last_name="Guilbault",
        birth_date="09/11/1989",
        img_url="url",
        gender="Male",
        password="password"
    )
    jonathan = User(
        email="jonathan@user.com",
        first_name="Jonathan",
        last_name="Borja",
        birth_date="09/06/1984",
        img_url="url",
        gender="gender",
        password="password"
    )

    db.session.add(demo)
    db.session.add(monte)
    db.session.add(sunny)
    db.session.add(jonathan)
    db.session.add(pierre)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
