export const LOAD_RESTAURANTS = 'restaurants/LOAD_RESTAURANTS';

const load = list => ({
    type: LOAD_RESTAURANTS,
    list,
});


export const getRestaurants = () => async dispatch => {
    const res = await fetch('/api/restaurants');

    if (res.ok) {
        const list = await res.json();
        dispatch(load(list));
    }
};


const initialState = {
    list: []
};

const sortList = (restaurants) => {

    restaurants.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    return restaurants.map(restaurant => restaurant.id);
  };


const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RESTAURANTS: {
            const allRestaurants = {};
            action.list.forEach(restaurant => {
                allRestaurants[restaurant.id] = restaurant;
            });
            return {...allRestaurants, ...state, list: sortList(action.list),
            };
        }
        default:
            return state;
    }
}

export default restaurantsReducer;
