import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UserSignUpForm from './UserSignUpForm';
import './UserSignUpForm.css';

function UserSignUpFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className='menu-signup-button' onClick={() => setShowModal(true)}>
				Sign Up
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='signup-title-container'>
						<h3 className='signup-title'>Sign Up for TableTalk</h3>
					</div>
					<UserSignUpForm setShowModal={setShowModal}/>
				</Modal>
			)}
		</>
	);
}

export default UserSignUpFormModal;
