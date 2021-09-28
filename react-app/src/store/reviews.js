export const LOAD_REVIEWS = 'comments/LOAD_REVIEWS';
export const CREATE_REVIEW = 'comments/CREATE_REVIEW';
export const DESTROY_REVIEW = 'comments/DESTROY_REVIEW';

const load = reviews => ({
    type: LOAD_REVIEWS,
    reviews
})

const placeReview = comment => ({
    type: CREATE_REVIEW,
    comment
})

const destroy = reviewId => ({
    type: DESTROY_REVIEW,
    reviewId
})

export const getReviews = () => async dispatch => {
    const res = await fetch('/api/reviews/');

    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews.reviews))
        return res;
    }
}

export const getOneReview = (id) => async dispatch => {
    const res = await fetch(`/api/reviews/${id}`);

    const review = await res.json();
    if (res.ok) {
        dispatch(placeComment(review))
    }
}

export const createReview = (review, userId, photoUrl) => async dispatch => {
    const res = await fetch('/api/reviews/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            review: review,
            user_id: userId,
            photo: photoUrl
        })
    })
    if (res.ok) {
        const newReview = await res.json();
        dispatch(placeComment(newReview))
        return newReview;
    }
}