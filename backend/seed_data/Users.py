# class User(db.Model):
#     __tablename__ = "users"

#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(50), nullable=False)
#     first_name = db.Column(db.String(20), nullable=False)
#     last_name = db.Column(db.String(30), nullble=False)
#     birth_date = db.Column(db.Date, nullable=False)
#     img_url = db.Column(db.Text, nullable=True)
#     gender = db.Column(db.String, nullable=False)
#     password = db.Column(db.String(255), nullable=False)
#     menu_items = db.relationship("MenuItem", back_populates="menu")


# demo = User(
#     email="demo@user.com",
#     first_name="John",
#     last_name="Dough",
#     birth_date="1999-09-09",
#     img_url="https://cdn0.iconfinder.com/data/icons/people-57/24/user-square-512.png",
#     gender="Prefer Not To Answer",
#     password="password"
# )
# monte = User(
#     email="monte@user.com",
#     first_name="Monte",
#     last_name="Flagg",
#     birth_date="1985-12-04",
#     img_url="https=//i.imgur.com/VMYPjVw.jpg",
#     gender="Male",
#     password="password"
# )
# sunny = User(
#     email="sunny@user.com",
#     first_name="Sunny",
#     last_name="Mallick",
#     birth_date="1996-06-24",
#     img_url="url",
#     gender="Male",
#     password="password"
# )
# pierre = User(
#     email="pierre@user.com",
#     first_name="Pierre",
#     last_name="Guilbault",
#     birth_date="1989-09-11",
#     img_url="url",
#     gender="Male",
#     password="password"
# )
# jonathan = User(
#     email="jonathan@user.com",
#     first_name="Jonathan",
#     last_name="Borja",
#     birth_date="1984-09-06",
#     img_url="url",
#     gender="gender",
#     password="password"
# )
