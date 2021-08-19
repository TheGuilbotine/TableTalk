import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteRestaurant from './DeleteRestaurant'
import './DeleteRestaurant.css';

function DeleteRestaurantModal({restaurantId}) {
	const [showModal, setShowModal] = useState(false);

	return (
        <>
            <button id='delete-restaurant-button' onClick={() => setShowModal(true)}>Delete</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteRestaurant restaurantId={restaurantId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

	);
}

export default DeleteRestaurantModal;
