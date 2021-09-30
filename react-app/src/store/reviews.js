export const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
export const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
export const DESTROY_REVIEW = 'reviews/DESTROY_REVIEW';

const load = reviews => ({
    type: LOAD_REVIEWS,
    reviews
})

const placeReview = review => ({
    type: CREATE_REVIEW,
    review
})

const destroy = reviewId => ({
    type: DESTROY_REVIEW,
    reviewId
})

export const getReviews = () => async dispatch => {
    const res = await fetch('/api/user_reviews/');

    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews.reviews))
        return res;
    }
}

export const createReview = (review, photoUrl, userId) => async dispatch => {
    console.log('++++++++++', 'state')
    console.log(review)
    console.log('++++++++++')
    const res = await fetch('/api/user_reviews/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user_id: userId,
            image_id: userId,
            comment: review,
            photo: photoUrl,
        })
    })
    if (res.ok) {
        const newReview = await res.json();
        dispatch(placeReview(newReview))
        return newReview;
    }
}

export const editReview = (reviewId, review, userId, restaurantId) => async dispatch => {
    const res = await fetch(`/api/user_reviews/${reviewId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            review: review,
            user_id: userId,
            restaurant_id: restaurantId,
        })
    })

    if (res.ok) {
        const editedReview = await res.json();
        dispatch(placeReview(editedReview))
    }
}

export const deleteReview = (id) => async dispatch => {
    const res = await fetch(`/api/user_reviews/${id}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        await res.json();
        dispatch(destroy(id))
    }
    return res;
}


let initialState = {}

const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_REVIEWS: {
            const allReviews = {
                ...state,
            };
            action.reviews.forEach((review) => {
                allReviews[review.id] = review;
            })
            return allReviews
        }
        case CREATE_REVIEW: {
            const newState = {
                ...state,
                [action.review?.id]: action.review
            }
            return newState
        }
        case DESTROY_REVIEW: {
            const newState = {...state};
                delete newState[action.reviewId]
            return newState;
        }
        default:
            return state
    }
}

export default reviewReducer