from app.models import db
from app.models.images import Image


def seed_images():
    image1a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Crazy+Rockn+Sushi/Crazy-Rockn-Sushi.jpg", restaurant_id=1)
    image1b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Crazy+Rockn+Sushi/crazyinside.jpeg", restaurant_id=1)
    image1c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Crazy+Rockn+Sushi/images+(1).jpeg", restaurant_id=1)
    image1d = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Crazy+Rockn+Sushi/images.jpeg", restaurant_id=1)
    image2a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Canyon+City+BBQ/unnamed.jpeg", restaurant_id=2)
    image2b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Canyon+City+BBQ/inside.jpeg", restaurant_id=2)
    image2c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Canyon+City+BBQ/gif3.jpeg", restaurant_id=2)
    image2d = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Canyon+City+BBQ/gif2.jpeg", restaurant_id=2)
    image3a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/President+Thai/restaurant-exterior.jpeg", restaurant_id=3)
    image3b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/President+Thai/inside.jpeg", restaurant_id=3)
    image3c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/President+Thai/Pad-Thai-Seafood-retitled.jpeg", restaurant_id=3)
    image3d = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/President+Thai/Pad-See-Ew-Lunch-website.jpeg", restaurant_id=3)
    image4a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Park+Cafe/outside-pic.png", restaurant_id=4)
    image4b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Park+Cafe/inside-pic.png", restaurant_id=4)
    image4c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Park+Cafe/food-pic.png", restaurant_id=4)
    image5a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/My+Thai/outside.png", restaurant_id=5)
    image5b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/My+Thai/inside.png", restaurant_id=5)
    image5c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/My+Thai/food-pic.jpeg", restaurant_id=5)
    image6a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Saffron+Valley/outside-pic.png", restaurant_id=6)
    image6b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Saffron+Valley/inside-pic.png", restaurant_id=6)
    image6c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Saffron+Valley/food-pic.jpeg", restaurant_id=6)
    image7a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Meatball+Shop/outside.jpeg", restaurant_id=7)
    image7b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Meatball+Shop/inside.jpeg", restaurant_id=7)
    image7c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Meatball+Shop/meal1.jpeg", restaurant_id=7)
    image7d = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Meatball+Shop/meal2.jpeg", restaurant_id=7)
    image8a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Sweet+Potatoes/outside.jpeg", restaurant_id=8)
    image8b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Sweet+Potatoes/inside.jpg", restaurant_id=8)
    image8c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Sweet+Potatoes/food1.jpeg", restaurant_id=8)
    image8d = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Sweet+Potatoes/food2.jpeg", restaurant_id=8)
    image9a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Old+Fourth+Street+Filling+Station/outside1.jpeg", restaurant_id=9)
    image9b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Old+Fourth+Street+Filling+Station/outside.jpeg", restaurant_id=9)
    image9c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Old+Fourth+Street+Filling+Station/outside2.jpeg", restaurant_id=9)
    image9d = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Old+Fourth+Street+Filling+Station/food1.jpeg", restaurant_id=9)
    image10a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Texas/outside.jpeg", restaurant_id=10)
    image10b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Texas/inside.jpeg", restaurant_id=10)
    image10c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Texas/food2.jpeg", restaurant_id=10)
    image10d = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Texas/food1.jpeg", restaurant_id=10)
    image11a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/tucanos/outside.jpeg", restaurant_id=11)
    image11b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/tucanos/inside.jpeg", restaurant_id=11)
    image11c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/tucanos/food1.jpeg", restaurant_id=11)
    image11d = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/tucanos/food2.jpeg", restaurant_id=11)
    image12a = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/flemings/outside.jpeg", restaurant_id=12)
    image12b = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/flemings/inside_view.jpeg", restaurant_id=12)
    image12c = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/flemings/food1.png", restaurant_id=12)
    image12d = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/flemings/food2.jpeg", restaurant_id=12)

    db.session.add(image1a)
    db.session.add(image1b)
    db.session.add(image1c)
    db.session.add(image1d)
    db.session.add(image2a)
    db.session.add(image2b)
    db.session.add(image2c)
    db.session.add(image2d)
    db.session.add(image3a)
    db.session.add(image3b)
    db.session.add(image3c)
    db.session.add(image3d)
    db.session.add(image4a)
    db.session.add(image4b)
    db.session.add(image4c)
    db.session.add(image5a)
    db.session.add(image5b)
    db.session.add(image5c)
    db.session.add(image6a)
    db.session.add(image6b)
    db.session.add(image6c)
    db.session.add(image7a)
    db.session.add(image7b)
    db.session.add(image7c)
    db.session.add(image7d)
    db.session.add(image8a)
    db.session.add(image8b)
    db.session.add(image8c)
    db.session.add(image8d)
    db.session.add(image9a)
    db.session.add(image9b)
    db.session.add(image9c)
    db.session.add(image9d)
    db.session.add(image10a)
    db.session.add(image10b)
    db.session.add(image10c)
    db.session.add(image10d)
    db.session.add(image11a)
    db.session.add(image11b)
    db.session.add(image11c)
    db.session.add(image11d)
    db.session.add(image12a)
    db.session.add(image12b)
    db.session.add(image12c)
    db.session.add(image12d)

    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
