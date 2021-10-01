import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getReviews, editReview } from "../../store/reviews";

const EditUserReviewForm = ({reviewId, setShowModal}) => {
    const editedReview = useSelector(state => state.reviews[reviewId])
    const userId = editedReview?.user_id
    const restaurantId = editedReview?.restaurant_id
    const [errors, setErrors] = useState([])
    const [review, setReview] = useState(editedReview.comment)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch])

    const handleEdit = (e) => {
        e.preventDefault();
        const data = dispatch(editReview(+reviewId, review, userId, restaurantId))

        if (data) {
            setShowModal(false)
        }
        if (data.errors) {
            setErrors(data.errors)
        }
    }

    const updateReview = (e) => {
        setReview(e.target.value)
    }

    return (
        <>
            <div className='review-edit-container'>
                <form onSubmit={handleEdit} className='review-edit-form'>
                    <div className='comment-errors'>
                        {errors?.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <div className='edit-form-container'>
                        <p>Update Your Review</p>
                        <textarea
                            className='form-input'
                            placeholder='Edit Review'
                            name='review'
                            onChange={updateReview}
                            value={review}
                            required={true}></textarea>
                    </div>
                    <div className='confirm-edit-button'>
                        <button className='confirm-button' type='submit'>
                            Update Review
                        </button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default EditUserReviewForm