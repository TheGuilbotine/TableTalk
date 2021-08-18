import React from 'react';
import { useDispatch } from 'react-redux';
import { businessLogout } from '../../store/session';

const BusinessLogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(businessLogout());
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default BusinessLogoutButton;