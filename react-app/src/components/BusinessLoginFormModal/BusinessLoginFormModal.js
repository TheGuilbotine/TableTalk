import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { businessLogin } from '../../store/session';

const BusinessLoginForm = () => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	const onLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(businessLogin(email, password));
		if (data) {
			setErrors(data);
		}
	};

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
		<div className='form_container__business_login'>
			<form onSubmit={onLogin}>
				<div>
					{errors.map((error, ind) => (
						<div key={ind}>{error}</div>
					))}
				</div>
				<div className='form-label'>
					<label htmlFor='email'>Email</label>
					<input
						className='form-input'
						name='email'
						type='text'
						placeholder='Email'
						value={email}
						onChange={updateEmail}
					/>
				</div>
				<div className='form-label'>
					<label htmlFor='password'>Password</label>
					<input
						className='form-input'
						name='password'
						type='password'
						placeholder='Password'
						value={password}
						onChange={updatePassword}
					/>
					<button type='submit'>Login</button>
				</div>
			</form>
		</div>
	);
};

export default BusinessLoginForm;
