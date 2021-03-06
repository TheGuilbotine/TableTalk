export const LOAD_RESTAURANTS = 'restaurants/LOAD_RESTAURANTS';
export const CREATE_RESTAURANT = 'restaurants/CREATE_RESTAURANT';
export const DESTROY_RESTAURANT = 'restaurants/DESTROY_RESTAURANT'

const load = restaurants => ({
    type: LOAD_RESTAURANTS,
    restaurants,
});

const addOneRestaurant = restaurant => ({
    type: CREATE_RESTAURANT,
    restaurant
})

const removeRestaurant = restaurantId => ({
    type: DESTROY_RESTAURANT,
    restaurantId
})


export const getRestaurants = () => async dispatch => {
    const res = await fetch('/api/restaurants/');

    if (res.ok) {
        const restaurants = await res.json();
        dispatch(load(restaurants.restaurants));
        return res
    }
};

export const getAllBusinessRestaurants = (id) => async dispatch => {
    const res = await fetch(`/api/business/${id}`);

    if (res.ok) {
        const restaurants = await res.json();
        dispatch(load(restaurants.restaurants));
        return res
    }
};


export const getOneRestaurant = id => async dispatch => {
    const res = await fetch(`/api/restaurants/${id}`);

    const restaurant = await res.json();
    if (res.ok) {
        dispatch(addOneRestaurant(restaurant));
    }
};


export const createRestaurant = (businessId, restaurantName, phoneNumber, cuisineId, description, priceRange, addressLineOne, addressLineTwo, city, state, postalCode, country, imgUrl) => async dispatch => {
    const res = await fetch('/api/restaurants/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            business_id: businessId,
            address_line_one: addressLineOne,
            address_line_two: addressLineTwo,
            city,
            state,
            postal_code: postalCode,
            country,
            restaurant_name: restaurantName,
            phone_number: phoneNumber,
            cuisine_id: +cuisineId,
            description,
            price_range: priceRange,
            img_url: imgUrl
        })
    });
    const restaurant = await res.json();
    if (res.ok){
        const formattedRestaurant = {
            address: {
                address_line_one: addressLineOne,
                address_line_two: addressLineTwo,
                city,
                state,
                postal_code: postalCode,
                country,
            },
            address_id: restaurant.address_id,
            business_id: businessId,
            cuisine: {
                id: cuisineId,
                type: restaurant?.cuisine_type
            },
            cuisine_id: cuisineId,
            description,
            id: restaurant.id,
            images: [imgUrl],
            phone_number: phoneNumber,
            price_range: priceRange,
            restaurant_name: restaurantName,
        }
        dispatch(addOneRestaurant(formattedRestaurant));
        return restaurant;
    }
};


export const destroyRestaurant = restaurantId => async dispatch => {
    const deleted = await fetch(`/api/restaurants/${restaurantId}`, {
        method: 'DELETE'
    });
    if (deleted) {
        dispatch(removeRestaurant(restaurantId))
        return deleted;
    }
};


export const editRestaurant = (restaurantId, businessId, restaurantName, phoneNumber, cuisineId, description, priceRange, imgUrl) => async dispatch => {
    const res = await fetch(`/api/restaurants/${restaurantId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: restaurantId,
            business_id: businessId,
            restaurant_name: restaurantName,
            phone_number: phoneNumber,
            cuisine_id: +cuisineId,
            description,
            price_range: priceRange,
            img_url: imgUrl
        })
    });
    const restaurant = await res.json();
    if (res.ok) {
        dispatch(addOneRestaurant(restaurant));
    }
    return restaurant;
};




const initialState = [];

const sortList = (restaurants) => {

    restaurants.sort((a, b) => {
      if (a.restaurant_name > b.restaurant_name) {
        return 1;
      }
      if (a.restaurant_nam < b.restaurant_nam) {
        return -1;
      }
      return 0;
    });

    return restaurants.map(restaurant => restaurant.id);
  };


const restaurantsReducer = (state = {}, action) => {
    if (!action) return state;
    switch (action.type) {
        case LOAD_RESTAURANTS: {
            const newState = {};
            action.restaurants.forEach(restaurant => {
                newState[restaurant.id] = restaurant
            })
            return newState;
        }
        case CREATE_RESTAURANT: {
            const newState = {
                ...state,
                [action.restaurant.id]: action.restaurant
            };
            return newState;
        }
        case DESTROY_RESTAURANT: {
            const newState = {...state};
            delete newState[action.restaurantId]
            // const restaurants = newState.restaurants.filter(restaurantId => restaurantId !== action.restaurantId);
            // newState.restaurants = restaurants;
            // delete newState[action.restaurantId];

            return newState;
        }
        default:
            return state;
    }
}



export default restaurantsReducer;
