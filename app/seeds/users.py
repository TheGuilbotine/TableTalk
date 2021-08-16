from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        email="demo@user.com",
        first_name="Demo",
        last_name="Licious",
        birth_date="2021/08/16",
        img_url="https: // cdn0.iconfinder.com/data/icons/people-57/24/user-square-512.png",
        gender="Prefer not to answer",
        password="password"
    )
    monte = User(
        email="monte@user.com",
        first_name="Monte",
        last_name="Flagg",
        birth_date="1985/12/04",
        img_url="https=//i.imgur.com/VMYPjVw.jpg",
        gender="Male",
        password="password"
    )
    sunny = User(
        email="sunny@user.com",
        first_name="Sunny",
        last_name="Mallick",
        birth_date="1996/06/24",
        img_url="url",
        gender="Male",
        password="password"
    )
    pierre = User(
        email="pierre@user.com",
        first_name="Pierre",
        last_name="Guilbault",
        birth_date="1989/09/11",
        img_url="url",
        gender="Male",
        password="password"
    )
    jonathan = User(
        email="jonathan@user.com",
        first_name="Jonathan",
        last_name="Borja",
        birth_date="1984/09/06",
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
