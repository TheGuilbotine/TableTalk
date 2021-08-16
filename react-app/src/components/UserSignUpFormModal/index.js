import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UserSignUpForm from './UserSignUpForm'
import './UserSignUpForm.css'

function UserSignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div id="menu-signup-button" onClick={() => setShowModal(true)}>Sign Up User</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="signup-title-container">
            <h3 className="signup-title">Sign Up for TableTalk</h3>
          </div>
          <UserSignUpForm />
        </Modal>
      )}
    </>
  )
}

export default UserSignUpFormModal;
