import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import RestaurantForm from './CreateRestaurant'
import './CreateRestaurant.css'

function RestaurantFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        <div className="add-restaurant-button" onClick={() => setShowModal(true)}>
          <img src="https://i.imgur.com/DEL32n3.png"/>
        </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="restaurant-title-container">
            <h3 className="restaurant-title">Add another Restaurant</h3>
          </div>
          <RestaurantForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  )
}

export default RestaurantFormModal;
