import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/session';
import '../UserLoginModal/UserLoginModal.css';


const UserLogoutButton = () => {
	const dispatch = useDispatch();
	const onLogout = async (e) => {
		await dispatch(userLogout());
	};

	return (
		<button className='logout-button' onClick={onLogout}>
			Logout
		</button>
	);
};

export default UserLogoutButton;
