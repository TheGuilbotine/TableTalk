import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UserLoginForm from './UserLoginModal';
import './UserLoginModal.css';

function UserLoginModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div className='login-button' onClick={() => setShowModal(true)}>
				Login
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='login-title-container'>
						<h3 className='login-title'>Login to TableTalk</h3>
					</div>
					<UserLoginForm setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}

export default UserLoginModal;
