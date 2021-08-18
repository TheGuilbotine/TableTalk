import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BusinessLoginForm from './BusinessLoginFormModal';

function BusinessLoginFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<div
				className='business-login-button'
				onClick={() => setShowModal(true)}>
				Login Business
			</div>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='login-title-container'>
						<h3 className='login-title'>
							Login to TableTalk Business
						</h3>
					</div>
					<BusinessLoginForm />
				</Modal>
			)}
		</>
	);
}

export default BusinessLoginFormModal;
