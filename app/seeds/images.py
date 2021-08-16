from app.models import db
from app.models.images import Image


def seed_images():
    image1 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Crazy+Rockn+Sushi/Crazy-Rockn-Sushi.jpg", restaurant_id=1)
    image2 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Crazy+Rockn+Sushi/crazyinside.jpeg", restaurant_id=1)
    image3 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Crazy+Rockn+Sushi/images+(1).jpeg", restaurant_id=1)
    image4 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Crazy+Rockn+Sushi/images.jpeg", restaurant_id=1)
    image5 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Canyon+City+BBQ/unnamed.jpeg", restaurant_id=2)
    image6 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Canyon+City+BBQ/inside.jpeg", restaurant_id=2)
    image7 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Canyon+City+BBQ/gif3.jpeg", restaurant_id=2)
    image8 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Canyon+City+BBQ/gif2.jpeg", restaurant_id=2)
    image9 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/President+Thai/restaurant-exterior.jpeg", restaurant_id=3)
    image10 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/President+Thai/inside.jpeg", restaurant_id=3)
    image11 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/President+Thai/Pad-Thai-Seafood-retitled.jpeg", restaurant_id=3)
    image12 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/President+Thai/Pad-See-Ew-Lunch-website.jpeg", restaurant_id=3)
    image13 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Park+Cafe/outside-pic.png", restaurant_id=4)
    image14 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Park+Cafe/inside-pic.png", restaurant_id=4)
    image15 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Park+Cafe/food-pic.png", restaurant_id=4)
    image16 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/My+Thai/outside.png", restaurant_id=5)
    image17 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/My+Thai/inside.png", restaurant_id=5)
    image18 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/My+Thai/food-pic.jpeg", restaurant_id=5)
    image19 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Saffron+Valley/outside-pic.png", restaurant_id=6)
    image20 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Saffron+Valley/inside-pic.png", restaurant_id=6)
    image21 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Saffron+Valley/food-pic.jpeg", restaurant_id=6)
    image22 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Meatball+Shop/outside.jpeg", restaurant_id=7)
    image23 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Meatball+Shop/inside.jpeg", restaurant_id=7)
    image24 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Meatball+Shop/meal1.jpeg", restaurant_id=7)
    image25 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Meatball+Shop/meal2.jpeg", restaurant_id=7)
    image26 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Sweet+Potatoes/outside.jpeg", restaurant_id=8)
    image27 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Sweet+Potatoes/inside.jpg", restaurant_id=8)
    image28 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Sweet+Potatoes/food1.jpeg", restaurant_id=8)
    image29 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Sweet+Potatoes/food2.jpeg", restaurant_id=8)
    image30 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Old+Fourth+Street+Filling+Station/outside1.jpeg", restaurant_id=9)
    image31 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Old+Fourth+Street+Filling+Station/outside.jpeg", restaurant_id=9)
    image32 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Old+Fourth+Street+Filling+Station/outside2.jpeg", restaurant_id=9)
    image33 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/The+Old+Fourth+Street+Filling+Station/food1.jpeg", restaurant_id=9)
    image34 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Texas/outside.jpeg", restaurant_id=10)
    image35 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Texas/inside.jpeg", restaurant_id=10)
    image36 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Texas/food2.jpeg", restaurant_id=10)
    image37 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/Texas/food1.jpeg", restaurant_id=10)
    image38 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/tucanos/outside.jpeg", restaurant_id=11)
    image39 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/tucanos/inside.jpeg", restaurant_id=11)
    image40 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/tucanos/food1.jpeg", restaurant_id=11)
    image41 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/tucanos/food2.jpeg", restaurant_id=11)
    image42 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/flemings/outside.jpeg", restaurant_id=12)
    image43 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/flemings/inside_view.jpeg", restaurant_id=12)
    image44 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/flemings/food1.png", restaurant_id=12)
    image45 = Image(
        img_url="https://tabletalkproject.s3.us-west-1.amazonaws.com/flemings/food2.jpeg", restaurant_id=12)

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    db.session.add(image16)
    db.session.add(image17)
    db.session.add(image18)
    db.session.add(image19)
    db.session.add(image20)
    db.session.add(image21)
    db.session.add(image22)
    db.session.add(image23)
    db.session.add(image24)
    db.session.add(image25)
    db.session.add(image26)
    db.session.add(image27)
    db.session.add(image28)
    db.session.add(image29)
    db.session.add(image30)
    db.session.add(image31)
    db.session.add(image32)
    db.session.add(image33)
    db.session.add(image34)
    db.session.add(image35)
    db.session.add(image36)
    db.session.add(image37)
    db.session.add(image38)
    db.session.add(image39)
    db.session.add(image40)
    db.session.add(image41)
    db.session.add(image42)
    db.session.add(image43)
    db.session.add(image44)
    db.session.add(image45)

    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
