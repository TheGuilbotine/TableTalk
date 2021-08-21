from flask import Blueprint, jsonify
from flask_login import login_required
from app.models.user import User
from app.models.rewards import Reward

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    reward_points = Reward.query.filter(Reward.user_id == id)
    print(reward_points, "here for rewards <=======================")
    # return user.to_dict()
    return {**user.to_dict(), "reward_points": reward_points}
