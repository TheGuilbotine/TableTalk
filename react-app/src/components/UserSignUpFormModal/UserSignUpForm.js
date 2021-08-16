import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const UserSignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [imgUrl, setImgUrl] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

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
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <input
          placeHolder = 'Email Address'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <input
          placeHolder = 'First Name'
          type='text'
          name='firstName'
          onChange={updateFirstName}
          value={firstName}
        ></input>
      </div>
      <div>
        <input
          placeHolder = 'Last Name'
          type='text'
          name='lastName'
          onChange={updateLastName}
          value={lastName}
        ></input>
      </div>
      <div>
        <input
          placeHolder = 'Birth Date'
          type='text'
          name='birthDate'
          onChange={updateBirthDate}
          value={birthDate}
        ></input>
      </div>
      <div>
        <input
          placeHolder = 'Image URL'
          type='text'
          name='imgUrl'
          onChange={updateImgUrl}
          value={imgUrl}
        ></input>
      </div>
      <div>
        <select value={gender} onChange={updateGender}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Prefer not to answer'>Prefer not to answer</option>
        </select>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default UserSignUpForm;
