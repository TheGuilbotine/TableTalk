const LOAD = 'images/LOAD'

const loadImages = (images) => ({
    type: LOAD,
    images
})

export const getImages = () => async (dispatch) => {
    const res = await fetch(`/api/image`);

    if (res.ok) {
        const images = await res.json();
        dispatch(loadImages(images.images))
        return res;
    }
}

const initialState = [];

const imageReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD: {
            const allImages = [...action.images]
            return allImages
        }
        default:
            return state;
    }
}

export default imageReducer;
