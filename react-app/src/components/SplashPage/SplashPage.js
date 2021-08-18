import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getRestaurants } from '../../store/restaurants';

import './SplashPage.css'

export default function SplashPage() {
    const dispatch = useDispatch();
    const restaurants = useSelector((state) => {
        return state.restaurants.list.map(restaurantId => state.restaurants[restaurantId]);
    });

    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    return (
    <div>
        <h1>SPLASH PAGE</h1>
        {restaurants && restaurants.map(resto => (
            <NavLink to={`/restaurants/${resto.id}/reservations`} key={resto.id} >
                {resto.name}
            </NavLink>
        ))}
    </div>
    )
}
