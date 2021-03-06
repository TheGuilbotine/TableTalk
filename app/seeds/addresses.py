from app.models import db
from app.models.address import Address

# address_line_two not needed because can be false?


def seed_addresses():
    addresses1 = Address(
        address_line_one="942 Arrow Hwy STE #6", city="Covina", state="CA", postal_code=91722, country="United States")
    addresses2 = Address(
        address_line_one="347 N San Gabriel Ave", city="Azusa", state="CA", postal_code=91702, country="United States")
    addresses3 = Address(
        address_line_one="498 S Rosemead Blvd", city="Pasadena", state="CA", postal_code=91107, country="United States")
    addresses4 = Address(
        address_line_one="604 E 1300 S", city="Salt Lake City", state="UT", postal_code=84105, country="United States")
    addresses5 = Address(
        address_line_one="1425 S 300 W", city="Salt Lake City", state="UT", postal_code=84115, country="United States")
    addresses6 = Address(
        address_line_one="26 E St E", city="Salt Lake City", state="UT", postal_code=84103, country="United States")
    addresses7 = Address(
        address_line_one="789 9th Avenue", city="New York", state="NY", postal_code=10019, country="United States")
    addresses8 = Address(
        address_line_one="607 Trade Street NW", city="Winston-Salem", state="NC", postal_code=84115, country="United States")
    addresses9 = Address(
        address_line_one="871 W 4th Street", city="Winston-Salem", state="NC", postal_code=27101, country="United States")
    addresses10 = Address(
        address_line_one="11593 South 4000 West", city="South Jordan", state="UT", postal_code=84009, country="United States")
    addresses11 = Address(
        address_line_one="62 South 400 West", city="Salt Lake City", state="UT", postal_code=84101, country="United States")
    addresses12 = Address(
        address_line_one="20 South 400 West Suite# 2020", city="Salt Lake City", state="UT", postal_code=84101, country="United States")

    db.session.add(addresses1)
    db.session.add(addresses2)
    db.session.add(addresses3)
    db.session.add(addresses4)
    db.session.add(addresses5)
    db.session.add(addresses6)
    db.session.add(addresses7)
    db.session.add(addresses8)
    db.session.add(addresses9)
    db.session.add(addresses10)
    db.session.add(addresses11)
    db.session.add(addresses12)

    db.session.commit()


def undo_addresses():
    db.session.execute('TRUNCATE addresses RESTART IDENTITY CASCADE;')
    db.session.commit()
