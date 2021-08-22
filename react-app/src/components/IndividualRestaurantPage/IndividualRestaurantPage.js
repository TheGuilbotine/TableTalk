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
            <div>
                <CreateNewReservation />
            </div>
        </div>
    )
}

export default IndividualRestaurant
