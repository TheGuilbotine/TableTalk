import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOneRestaurant } from '../../store/restaurants';
import CreateNewReservation from '../CreateNewReservation/CreateNewReservation';
import './IndividualRestaurantPage.css'

function IndividualRestaurant() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const restaurant = useSelector((state) => state.restaurants[id])
    // const cuisine = useSelector((state) => state.cuisine[id])

    useEffect(() => {
        dispatch(getOneRestaurant(id))
    }, [dispatch, id])

    return (
        <>
            <div className='restaurant-details'>
                <div className="restaurant-image-container">
                    {restaurant?.images?.map(image => (
                    <img className="restaurant-image"src={image.img_url}/>
                    ))}
                </div>
                {/* <img src={restaurant.images[0].img_url}></img> */}
                <h1>{restaurant?.restaurant_name}</h1>
                <p>{restaurant?.description}</p>
                <p>{restaurant?.phone_number}</p>
                <p>{restaurant?.type}</p>
                <p>{restaurant?.address_line_one}</p>
                <p>{restaurant?.address_line_two}</p>
                <p>{restaurant?.city}, {restaurant?.state} {restaurant?.postal_code}</p>
            </div>
            <div>
                <CreateNewReservation />
            </div>
        </>
    )
}

export default IndividualRestaurant
