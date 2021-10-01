import { useState } from 'react'
import EditUserReviewForm from './EditUserReviewForm'
import { Modal } from '../../context/Modal'
import './EditUserReviewForm.css'

function EditUserReviewModal({ reviewId }) {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='edit-button' onClick={() => setShowModal(true)}>Edit Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditUserReviewForm reviewId={reviewId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>

    )
}

export default EditUserReviewModal