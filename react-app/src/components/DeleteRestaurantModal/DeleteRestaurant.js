import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { destroyRestaurant } from '../../store/restaurants';
import './DeleteRestaurant.css'
// import DeleteRestaurantModal from '.';


function DeleteRestaurant({restaurantId, setShowModal}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const {id} = useParams()
    const handleDelete = async (e) => {
        e.preventDefault();
        const success = await dispatch(destroyRestaurant(restaurantId));
        if (success) {
            e.preventDefault();
            debugger
            setShowModal(false);
            return <Redirect to={`/business/${id}`} />;
        } else {
            alert('Please try again')
        }
    };
    const handleCancel = ((e) => {
        e.preventDefault();
        setShowModal(false)
    });
    return (
        <div className="delete-confirmation-container">
          <div className="delete-confirmation-message">
            <p className="confirmation-message">Are you sure you want to delete this restaurant?</p>
          </div>
          <div className="delete-confirmation-buttons">
            <button className="delete-confirmation-button" onClick={handleDelete}>Delete</button>
            <button className="cancel-confirmation-button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      );
}


export default DeleteRestaurant
