import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { userSignUp } from '../../store/session';
import { userLogin } from '../../store/session';

const UserSignUpForm = ({setShowModal}) => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [imgUrl, setImgUrl] = useState('');
	const [gender, setGender] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	const onSignUp = async (e) => {
		e.preventDefault();
		if (password === repeatPassword) {
			const data = await dispatch(
				userSignUp(
					email,
					firstName,
					lastName,
					birthDate,
					imgUrl,
					gender,
					password
				)
			);
			if (data) {
				setErrors(data);
			}
			if (user) {
				setShowModal(false)
			}
		};

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

	const updateFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const updateLastName = (e) => {
		setLastName(e.target.value);
	};

	const updateBirthDate = (e) => {
		setBirthDate(e.target.value);
	};

	const updateImgUrl = (e) => {
		setImgUrl(e.target.value);
	};

	const updateGender = (e) => {
		setGender(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const updateRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	if (user) {
		return <Redirect to='/' />;
	}

	return (
		<div className='form_container'>
			<form onSubmit={onSignUp}>
				<div className='errors-container'>
					{errors.map((error, ind) => (
						<div className="errors" key={ind}>{error}</div>
					))}
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						placeholder=' Email Address'
						type='text'
						name='email'
						onChange={updateEmail}
						value={email}
						required={true}></input>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						placeholder=' First Name'
						type='text'
						name='firstName'
						onChange={updateFirstName}
						value={firstName}
						required></input>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						placeholder=' Last Name'
						type='text'
						name='lastName'
						onChange={updateLastName}
						value={lastName}
						required></input>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						placeholder=' Birth Date'
						type='text'
						name='birthDate'
						onChange={updateBirthDate}
						value={birthDate}
						required={true}></input>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						placeholder=' Image URL'
						type='text'
						name='imgUrl'
						onChange={updateImgUrl}
						value={imgUrl}
						required={false}></input>
				</div>
				<div className='form-label__container'>
					<select
						className='form-input'
						value={gender}
						onChange={updateGender}
						required={true}>
						<option value=''>--Select gender--</option>
						<option value='Male'>Male</option>
						<option value='Female'>Female</option>
						<option value='Prefer not to answer'>
							Prefer not to answer
						</option>
					</select>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						type='password'
						name='password'
						onChange={updatePassword}
						value={password}
						required={true}
						placeholder=' Password'></input>
				</div>
				<div className='form-label__container'>
					<input
						className='form-input'
						type='password'
						name='repeat_password'
						onChange={updateRepeatPassword}
						value={repeatPassword}
						required={true}
						placeholder=' Confirm Password'></input>
				</div>
				<div className='form-button__container'>
					<button className='user-signup-button' type='submit'>
						Sign Up
					</button>
				</div>
				<div className="demo-login-container">
					<p className="demo-text">To demo TableTalk, <a className="demo-click-here" onClick={demoLogin}>Click Here</a></p>
				</div>
			</form>
		</div>
	);
};

export default UserSignUpForm;
