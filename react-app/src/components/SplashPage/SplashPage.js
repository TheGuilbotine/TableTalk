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
    <div>
        <h1>SPLASH PAGE</h1>
        {restaurants && restaurants?.map(restaurant => (
            <NavLink to={`/restaurants/${restaurant.id}`} key={restaurant.id} >
                <div>
                    {restaurant?.restaurant_name}
                </div>
            </NavLink>
        ))}
    </div>
    )
}


// {lodgings?.map(lodging => (
//     <NavLink key={lodging?.id} to={`/lodgings/${lodging?.id}`}>
//       <div className="lodging-container">
//           {lodging?.Images !== undefined && (<img className="lodging-img" src={lodging?.Images[0].imgUrl}/>)}
//           <p className="lodging-name">{lodging?.name}</p>
//           <p className="lodging-price">${lodging?.price} / night</p>
//       </div>
//     </NavLink>
