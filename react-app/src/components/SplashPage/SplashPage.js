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
        {restaurants && restaurants?.map(restaurant => (
            <NavLink to={`/restaurants/${restaurant.id}`} key={restaurant.id} >
                <div className='restaurant-container'>
                    {restaurant?.image !== undefined && (<img className="restaurant-img" src={restaurant?.image[0].img_url}/>)}
                    <p className="restaurants-name">{restaurant?.restaurant_name}</p>
                    {function priceRange() {
                        let range = ""
                        for (let i = 0; i < restaurant?.price_range; i++) {
                            range +="$"
                        }
                        return <p>{range}</p>
                    }}

                    <p className="restaurants-cuisine">{restaurant?.cuisine_id.type}</p>
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
