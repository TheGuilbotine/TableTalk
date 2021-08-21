import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { userLogin } from '../../store/session';
import * as sessionActions from '../../store/session'

const UserLoginForm = ({setShowModal}) => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	const onLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(userLogin(email, password));

		if (data) {
			setErrors(data);
		}
		if (user) {
			setShowModal(false)
		}
	};

	const demoLogin = async (e) => {
		e.preventDefault()
    const user = await dispatch(userLogin('demo@user.com','password'))
		if (user) {
			setShowModal(false)
		}
  }

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (user) {
		return <Redirect to='/' />;
	}

	return (
		<div className='form_container'>
			<form onSubmit={onLogin}>
				<div>
					{errors.map((error, ind) => (
						<div key={ind}>{error}</div>
					))}
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						name='email'
						type='text'
						placeholder='Email'
						value={email}
						onChange={updateEmail}
					/>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						name='password'
						type='password'
						placeholder='Password'
						value={password}
						onChange={updatePassword}
					/>
				</div>
				<div className='form-button__container'>
					<button className='user-login-button' type='submit'>
						Login
					</button>
				</div>
				<div className="demo-login-container">
					<p className="demo-text">To demo TableTalk, <a className="demo-click-here" onClick={demoLogin}>Click Here</a></p>
				</div>
			</form>
		</div>
	);
};

export default UserLoginForm;
