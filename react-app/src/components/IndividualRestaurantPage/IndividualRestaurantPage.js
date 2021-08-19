import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getOneRestaurant } from '../../store/restaurants';
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
                <h1>{restaurant?.restaurant_name}</h1>
                <p>{restaurant?.description}</p>
                <p>{restaurant?.phone_number}</p>
                {/* <p>{restaurant?.cuisine.type}</p> */}
            </div>
        </>
    )
}

export default IndividualRestaurant