import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import RestaurantFormModal from '../CreateRestaurant'
import { getAllBusinessRestaurants } from '../../store/restaurants.js'
import DeleteRestaurantModal from '../DeleteRestaurantModal'
import EditRestaurantModal from '../EditRestaurantModal'
import './BusinessProfilePage.css'


function BusinessProfile() {
    const dispatch = useDispatch();
    const { id } = useParams()
    const restaurants = Object.values(useSelector((state) => state.restaurants))
    console.log("=================", restaurants)

    useEffect(() => {
        dispatch(getAllBusinessRestaurants(id))
    }, [dispatch])


    return (
        <div>
            <h1>Welcome Business User</h1>
            <button>
                <RestaurantFormModal />
            </button>
            <div>
              {restaurants?.map(restaurant => (
                <div key={restaurant.id}>
                  <p>{restaurant?.restaurant_name}, {restaurant?.cuisine}</p>
                  <EditRestaurantModal restaurantId={restaurant?.id} />
                  <DeleteRestaurantModal restaurantId={restaurant?.id} />
                </div>
              ))}
            </div>
        </div>
    )
}


export default BusinessProfile;
