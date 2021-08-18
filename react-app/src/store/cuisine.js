
const LOAD = 'cuisines/LOAD'

const loadCuisines = (cuisines) => ({
    type: LOAD,
    cuisines
})

export const getCuisines = () => async (dispatch) => {
    const res = await fetch(`/api/cuisine`);

    if (res.ok) {
        const cuisines = await res.json();
        dispatch(loadCuisines(cuisines))
        return res;
    }
}

const cuisineReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            const allCuisines = {
                ...state,
            };
            action.cuisines.forEach((cuisine) => {
                allCuisines[cuisine.id] = cuisine;
            });
            return allCuisines 
        }
        default: 
            return state;
    }
}

export default cuisineReducer;