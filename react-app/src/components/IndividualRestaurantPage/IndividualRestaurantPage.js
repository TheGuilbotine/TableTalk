import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOneRestaurant } from '../../store/restaurants';
import { getReviews, createReview, deleteReview } from '../../store/reviews';
import CreateNewReservation from '../CreateNewReservation/CreateNewReservation';
import './IndividualRestaurantPage.css'

function IndividualRestaurant() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser?.id
    const [review, setReview] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const restaurant = useSelector((state) => state.restaurants[id])
    const restaurantId = restaurant?.id
    console.log(id)
    const reviews = Object.values(useSelector(state => state.reviews))
    // const restaurantReviews = reviews.filter(review => review?.)
    // const cuisine = useSelector((state) => state.cuisine[id])

    useEffect(() => {
      dispatch(getOneRestaurant(id))
      dispatch(getReviews())
    }, [dispatch, id])

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (review) {
        const data = await dispatch(createReview(review, photoUrl, userId, restaurantId))
        if (data) {
          dispatch(getReviews())
          setReview('')
          setPhotoUrl('')
        }
      } else {
        alert('Review field cannot be empty.')
      }
    }

    let reviewSubmitButton;
    if (sessionUser) {
       
        reviewSubmitButton = (
            <button className='submit-review-button' type='submit'>Submit Review</button>   
        )
    } else {
        reviewSubmitButton = (
            <p>You need to be logged in to place a review.</p> 
        )
    }

    const updateReview = (e) => {
       setReview(e.target.value)
    }

    const updatePhotoUrl = (e) => {
      setPhotoUrl(e.target.value)
    }
  
    return (
        <div className='restaurant-details'>
            <div className="restaurant-image-container">
              {restaurant?.images?.map(image => (
               <img className="restaurant-image"src={image.img_url} key={image.id}/>
              ))}
            </div>
            <div className="name-cuisine">
              <h1 className='restaurant-name'>{restaurant?.restaurant_name}   -  </h1>
              <p className='restaurant-type'>{restaurant?.type}</p>
            </div>
            <div className="restaurant-name-address-phone">
              <p className='restaurant-phone'>{restaurant?.phone_number}</p>
              <p className='restaurant-add1'>{restaurant?.address_line_one}</p>
              <p className='restaurant-add2'>{restaurant?.address_line_two}</p>
              <p className='restaurant-city-state-zip'>{restaurant?.city}, {restaurant?.state} {restaurant?.postal_code}</p>
            </div>
                <p className='restaurant-description'>{restaurant?.description}</p>
            <div className='restaurant-reviews-container'>
                <div className='review-form'>
                  <form onSubmit={handleSubmit}>
                    <input
                      id='review-input'
                      type='text'
                      placeholder='Post a review...'
                      name='reviewArea'
                      maxLength='500'
                      value={review}
                      onChange={updateReview}></input>
                      <input 
                      id='review-photo'
                      type='text'
                      placeholder='Photo URL'
                      name='reviewPhoto'
                      value={photoUrl}
                      onChange={updatePhotoUrl}></input>
                      {reviewSubmitButton}
                  </form>
                </div>
                <div className='posted-reviews-container'>
                    <h3>Restaurant Reviews:</h3>
                </div>
            </div>
            <div>
                <CreateNewReservation />
            </div>
        </div>
    )
}

export default IndividualRestaurant
