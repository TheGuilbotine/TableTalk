
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BusinessLoginModal from '../BusinessLoginFormModal'
import BusinessLogoutButton from '../auth/BusinessLogoutButton';
import BusinessSignUpForm from '../BusinessSignUpForm/index';
import './BusinessNavBar.css'

const BusinessNavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to={`/business/${sessionUser.id}`} className="business-profile-button">Business Profile</NavLink>
        <BusinessLogoutButton />
      </>
      );
  } else {
    sessionLinks = (
      <>
        <NavLink to='/' className='are-you-a-business' exact={true} activeClassName='active'>
          Looking for a table?
        </NavLink>
        <BusinessLoginModal />
      </>
    );
  }

  return (
    <div className="nav-container">
      <div className="left-nav">
        <NavLink to='/' exact={true} activeClassName='active'>
          <img className="logo" src="https://i.imgur.com/Xessboi.png"/>
        </NavLink>
      </div>
      <div className="mid-nav">
        <div className="search-bar-container">
          <form>
            <input placeholder="Search for restaurants or cuisines" className="search-input"></input>
          </form>
        </div>
      </div>
      <div className="business-right-nav">
        {sessionLinks}
      </div>
    </div>
  );
}

export default BusinessNavBar;
