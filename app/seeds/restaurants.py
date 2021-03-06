from app.models import db
from app.models.restaurant import Restaurant


def seed_restaurants():
    restaurant1 = Restaurant(
        restaurant_name="Crazy Rock'N Sushi", phone_number="(626) 334-2430", address_id=1, business_id=1, description="It is our great pleasure to serve you with the highest quality food and excellent service at the best prices. On the frontier of Japanese fusion restaurants, we are proud of our unique and wonderful cuisine which is created from the finest ingredients. We promise you the freshest seafood, meat and produce. The fun & friendly atmosphere of the sushi bar and the beautiful presentation of each dish with their remarkable and distinctive flavors have made us and experience that inspires our guests to return again and again.", price_range='2', cuisine_id=1)
    restaurant2 = Restaurant(
        restaurant_name="Canyon City BBQ", phone_number="(626) 815-4227", address_id=2, business_id=1, description="Our restaurant sits at the foothills of the San Gabriel Mountains.  We have been told that our restaurant looks and feels like the ones down south.  Whether it’s the tri-tip, brisket, ribs, burnt ends, or pulled pork sandwiches, the meat is cooked to perfection, and the baked beans, coleslaw, or potato salad make perfectly delicious side dishes.", price_range='2', cuisine_id=2)
    restaurant3 = Restaurant(
        restaurant_name="President Thai", phone_number="(626) 578-9814", address_id=3, business_id=1, description="Established in 1994, President Thai’s mission is to offer to the community, the authenticity in Thai food, culture, and atmosphere. Rebuilt to become the first traditional Thai style architecture restaurant in Los Angeles with the interior finely decorated with ornate Thai art form, and soothed with traditional music. Customers will find themselves being taken back in time to experience the traditional ways of Thai’s culture. We are ready to greet you in Thai, Sawadee ka!", price_range='2', cuisine_id=4)
    restaurant4 = Restaurant(
        restaurant_name="The Park Cafe", phone_number="(801) 487-1670", address_id=4, business_id=2, description="Buzzy cafe serving up homestyle breakfasts, burgers & salads in a cozy setting with park views.", price_range='1', cuisine_id=9)
    restaurant5 = Restaurant(
        restaurant_name="My Thai", phone_number="(801) 505-4999", address_id=5, business_id=2, description="Snug, no-frills cafe known for Thai classics like curries & spring rolls, with budget lunch combos.", price_range='1', cuisine_id=4)
    restaurant6 = Restaurant(
        restaurant_name="Saffron Valley", phone_number="(801) 203-3325", address_id=6, business_id=2, description="2-story contemporary outpost features classic Indian fare with a modern spin & a daily lunch buffet.", price_range='2', cuisine_id=11)
    restaurant7 = Restaurant(
        restaurant_name="The Meatball Shop", phone_number="(212) 230-5860", address_id=7, business_id=3, description="Buzzy outfit serving a range house-ground meatballs, sauces & sides plus ice cream sandwiches.", price_range='2', cuisine_id=9)
    restaurant8 = Restaurant(
        restaurant_name="Sweet Potatoes", phone_number="(336) 727-4844", address_id=8, business_id=3, description="Chicken & waffles, mac 'n' cheese & banana pudding round out the menu at this soul-food staple.", price_range='2', cuisine_id=10)
    restaurant9 = Restaurant(
        restaurant_name="The Old Fourth Street Filling Station", phone_number="(336) 724-7600", address_id=9, business_id=3, description="Trendy upscale New American eatery & bar with a fireplace & covered outdoor terrace.", price_range='2', cuisine_id=9)
    restaurant10 = Restaurant(
        restaurant_name='Texas Roadhouse', phone_number='(801) 253-8600', address_id=10, business_id=4, description='Lively chain steakhouse serving American fare with a Southwestern spin amid Texas-themed decor.', price_range='3', cuisine_id=9)
    restaurant11 = Restaurant(
        restaurant_name='Tucanos', phone_number='(801) 456-2550', address_id=11, business_id=4, description='Brazilian steakhouse chain serving all-you-can-eat churrasco" & specialty skewers in a vibrant space.', price_range='4', cuisine_id=12)
    restaurant12 = Restaurant(
        restaurant_name='Fleming’s Prime Steakhouse', phone_number='(801) 355-3704', address_id=12, business_id=4, description='High-end steakhouse chain with aged prime beef & classics such as lobster tails.', price_range='4', cuisine_id=9)

    db.session.add(restaurant1)
    db.session.add(restaurant2)
    db.session.add(restaurant3)
    db.session.add(restaurant4)
    db.session.add(restaurant5)
    db.session.add(restaurant6)
    db.session.add(restaurant7)
    db.session.add(restaurant8)
    db.session.add(restaurant9)
    db.session.add(restaurant10)
    db.session.add(restaurant11)
    db.session.add(restaurant12)

    db.session.commit()


def undo_restaurants():
    db.session.execute('TRUNCATE restaurants RESTART IDENTITY CASCADE;')
    db.session.commit()
