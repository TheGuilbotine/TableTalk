# demo = User(
#         username='Demo', email='demo@aa.io', password='password')
#     marnie = User(
#         username='marnie', email='marnie@aa.io', password='password')
#     bobbie = User(
#         username='bobbie', email='bobbie@aa.io', password='password')

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(50), nullable=False)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(30), nullble=False)
    birth_date = db.Column(db.Date, nullable=False)
    img_url = db.Column(db.Text, nullable=True)
    gender = db.Column(db.String, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    menu_items = db.relationship("MenuItem", back_populates="menu")


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

# 1 { email: "demo@user.com", first_name: "first_name", last_name: "last_name", birth_date: "date", img_url: "url", gender: "gender", password: "password"}
# 2 { email: "monte@user.com", first_name: "Monte", last_name: "Flagg", birth_date: "12/04/1985", img_url: "https://i.imgur.com/VMYPjVw.jpg", gender: "Male", password: "password"}
# 3 { email: "sunny@user.com", first_name: "Sunny", last_name: "Mallick", birth_date: "06/24/1996", img_url: "url", gender: "Male", password: "password"}
# 4 { email: "pierre@user.com", first_name: "Pierre", last_name: "Guilbault", birth_date: "09/11/1989", img_url: "url", gender: "Male", password: "password"}
# 5 { email: "jonathan@user.com", first_name: "Jonathan", last_name: "Borja", birth_date: "09/06/1984, img_url: "url", gender: "gender", password: "password"}
