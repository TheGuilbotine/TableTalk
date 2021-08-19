import React from 'react';
import { useDispatch } from 'react-redux';
import { businessLogout } from '../../store/session';
import './auth.css'

const BusinessLogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(businessLogout());
  };

  return <button className='logout-button' onClick={onLogout}>Logout</button>;
};

export default BusinessLogoutButton;
