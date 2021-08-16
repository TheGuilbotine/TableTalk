from flask.cli import AppGroup
from .users import seed_users, undo_users
from .addresses import seed_addresses, undo_addresses
from .businesses import seed_businesses, undo_businesses
from .cuisines import seed_cuisines, undo_cuisines
from .images import seed_images, undo_images
from .restaurants import seed_restaurants, undo_restaurants

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_addresses()
    seed_users()
    seed_businesses()
    seed_cuisines()
    seed_restaurants()
    seed_images()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_addresses()
    undo_users()
    undo_businesses()
    undo_cuisines()
    undo_restaurants()
    undo_images()
    # Add other undo functions here
