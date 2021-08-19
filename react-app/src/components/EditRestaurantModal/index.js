import { useState } from 'react'
import EditRestaurantForm from './EditRestaurantForm'
import { Modal } from '../../context/Modal'
import './EditRestaurantForm.css'

function EditRestaurantModal({ restaurantId }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button id='edit-restaurant-button' onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditRestaurantForm restaurantId={restaurantId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

    )
}

export default EditRestaurantModal
