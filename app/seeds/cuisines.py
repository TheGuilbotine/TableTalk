from app.models import cuisine, db


def seed_cuisines():
    sushi = Cuisine(type="Sushi")
    bbq = Cuisine(type="BBQ")
    italian = Cuisine(type="Italian")
    thai = Cuisine(type="Thai")
    vegan = Cuisine(type="Vegan")
    french = Cuisine(type="French")
    vietnamese = Cuisine(type="Vietnamese")
    korean = Cuisine(type="Korean")
    american = Cuisine(type="American")
    southern = Cuisine(type="Southern")
    indian = Cuisine(type="Indian")

    db.session.add(sushi)
    db.session.add(bbq)
    db.session.add(italian)
    db.session.add(thai)
    db.session.add(vegan)
    db.session.add(french)
    db.session.add(vietnamese)
    db.session.add(korean)
    db.session.add(american)
    db.session.add(southern)
    db.session.add(indian)

    db.session.commit()


def undo_cuisines():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
