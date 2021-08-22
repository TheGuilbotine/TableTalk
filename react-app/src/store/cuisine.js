
const LOAD = 'cuisines/LOAD'

const loadCuisines = (cuisines) => ({
    type: LOAD,
    cuisines
})

export const getCuisines = () => async (dispatch) => {
    const res = await fetch(`/api/cuisine/`);

    if (res.ok) {
        const cuisines = await res.json();
        console.log(cuisines)
        dispatch(loadCuisines(cuisines.cuisines))
        return res;
    }
}

const initialState = [];

const cuisineReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            const allCuisines = [...action.cuisines]
            // action.cuisines.forEach((cuisine) => {
            //     allCuisines[cuisine.id] = cuisine;
            // });
            return allCuisines
        }
        default:
            return state;
    }
}

export default cuisineReducer;
