import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const BusinessSignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const business = useSelector(state => state.session.business);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(email, password, firstName, lastName, businessName));
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

  const updateBusinessName = (e) => {
    setBusinessName(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (business) {
    return <Redirect to='/business' />;
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
          placeHolder = "Email Address"
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
          placeHolder = 'Business Name'
          type='text'
          name='businessName'
          onChange={updateBusinessName}
          value={businessName}
        ></input>
      </div>
      <div>
        <input
          placeHolder = 'Password'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <input
          placeHolder = 'Confirm Password'
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

export default BusinessSignUpForm;
