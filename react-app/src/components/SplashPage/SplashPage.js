import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getRestaurants } from '../../store/restaurants';

import './SplashPage.css'

export default function SplashPage() {
    const dispatch = useDispatch();
    const restaurants = Object.values(useSelector((state) => state.restaurants));

    useEffect(() => {
        dispatch(getRestaurants())
    }, [dispatch])

    return (
        <div className="restaurants-page">
            <img className='splash-img' src='https://i.imgur.com/4PE9VQY.png'/>
            {restaurants && restaurants?.map(restaurant => (
                <NavLink className="navlink" to={`/restaurants/${restaurant.id}`} key={restaurant.id} >
                    <div className='restaurant-container'>
                        {restaurant?.image !== undefined && (<img className="restaurants-img" src={restaurant?.image[0].img_url}/>)}
                          <div className="name-address-container">
                                <div className="name-cuisine-container">
                                 <p className="restaurants-name">{restaurant?.restaurant_name}</p>
                                 <div className="cuisine-city-state-container">
                                    <p className="restaurants-cuisine">{restaurant?.cuisine?.type}</p>
                                    <p className="city-state">{restaurant?.address?.city} , {restaurant?.address?.state} </p>
                                 </div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}
