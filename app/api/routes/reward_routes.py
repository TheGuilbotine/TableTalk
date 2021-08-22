from flask import Blueprint, redirect, request, jsonify
# from flask_request_params import bind_request_params
from app.models.restaurant import Restaurant
from app.models.rewards import Reward
from flask_login import login_required
# Import request to use. .json()
# from app.forms.restaurant_form import RestaurantForm
from app.models.db import db


reward_routes = Blueprint('rewards', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@reward_routes.route('/<int:userId>')
# @login_required
def user_rewards(userId):
    print('REWARDS =============> USERID', userId)
    reward_amount = Reward.query.filter(
        Reward.user_id == userId).all()[0].reward_amount
    # rewards = [reward.to_dict() for reward in rewards_query]
    # for reward in rewards:
    #     reward['restaurant'] = Restaurant.query.get(
    #         reward['restaurant_id']).to_dict()
    return {"rewards": reward_amount}
