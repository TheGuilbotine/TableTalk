import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BusinessSignUpForm from './BusinessSignUpForm'
import './BusinessSignUpForm.css'

function BusinessSignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div id="menu-signup-button" onClick={() => setShowModal(true)}>Sign Up Business</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="signup-title-container">
            <h3 className="signup-title">Sign Up for TableTalk</h3>
          </div>
          <BusinessSignUpForm />
        </Modal>
      )}
    </>
  )
}

export default BusinessSignUpFormModal;
