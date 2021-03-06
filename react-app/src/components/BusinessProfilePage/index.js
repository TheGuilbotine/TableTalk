import React from 'react'
import { useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
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

    useEffect(() => {
        dispatch(getAllBusinessRestaurants(id))
    }, [dispatch])


    return (
        <div className="business-profile-page">
            <div className='business-restaurant-div'>
              {restaurants && restaurants?.map(restaurant => (
                <>
                    <div className='business-restaurant-container'>
                    <NavLink className="navlink" to={`/restaurants/${restaurant.id}`} key={restaurant.id} >
                        <div>
                            {restaurant?.images !== undefined && (<img className="restaurants-img" src={restaurant?.images[0].img_url}/>)}
                          </div>
                    </NavLink>
                              <div className="name-address-container">
                                    <div className="name-cuisine-container">
                                     <p className="restaurants-name">{restaurant?.restaurant_name}</p>
                                     <div className="cuisine-city-state-container">
                                        <p className="restaurants-cuisine">{restaurant?.cuisine?.type}</p>
                                        <p className="city-state">{restaurant?.address?.city} , {restaurant?.address?.state} </p>
                                     </div>
                                </div>
                            </div>
                        <div className='edit-delete-container'>
                            <EditRestaurantModal restaurantId={restaurant?.id} />
                            <DeleteRestaurantModal restaurantId={restaurant?.id} />
                        </div>
                    </div>
                </>

            ))}
                <div id="plus-button" className='business-restaurant-container'>
                  <RestaurantFormModal />
                  <p className="add-new">Add New Restaurant</p>
                </div>
            </div>
        </div>
    )
}


export default BusinessProfile;
