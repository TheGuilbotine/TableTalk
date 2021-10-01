import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom';
import * as sessionActions from '../../store/session'
import UserLogoutButton from '../auth/UserLogoutButton';
import UserSignUpFormModal from '../UserSignUpFormModal';
import UserLoginModal from '../UserLoginModal';
import BusinessLoginModal from '../BusinessLoginFormModal'
import BusinessLogoutButton from '../auth/BusinessLogoutButton';
import SearchBar from '../Search/SearchBar';
import './NavBar.css';

function NavBar() {
  const sessionUser = useSelector(state => state?.session.user);
  const id = sessionUser?.id
  const dispatch = useDispatch();
  const location = useLocation();

  const demoLogin = () => {
    return dispatch(sessionActions.userLogin({ credential: 'demo@user.com', password: 'password' }))
  }

  let sessionLinks;
  if (!sessionUser) {
    if (location.pathname == "/business") {
      sessionLinks = (
          <>
            <NavLink to='/' className='looking-for-a-table' exact={true} activeClassName='active'>
              Looking for a table?
            </NavLink>
            <BusinessLoginModal />
          </>
      );
    } else
      sessionLinks = (
        <>
          {/* <button className="demo-button" onClick={demoLogin}>Demo</button> */}
          <NavLink to='/business' className='are-you-a-business' exact={true} activeClassName='active'>
            Are you a business?
          </NavLink>
          {/* <NavLink to='/login' className='login-button' exact={true} activeClassName='active'>
            Login
          </NavLink> */}
          <UserLoginModal />
          <UserSignUpFormModal />
        </>
    );
  } else {
    if (sessionUser?.business_name && location.pathname == `/business/${id}`) {
      sessionLinks = (
        <>
          <BusinessLogoutButton />
        </>
       );
    } else {
      sessionLinks = (
        <>
          <NavLink to={`/business/${sessionUser.id}`} className="business-profile-button">Business Profile</NavLink>
          <BusinessLogoutButton />
        </>
      );
    }
    if (sessionUser && !sessionUser.business_name) {
      if (location?.pathname == `/users/${id}`) {
        sessionLinks = (
          <>
            <UserLogoutButton />
          </>
        );
      } else {
        sessionLinks = (
          <>
            {/* <button className="demo-button" onClick={demoLogin}>Demo</button> */}
            <NavLink to={`/users/${sessionUser.id}`} className="profile-page-button">My Profile</NavLink>
            <UserLogoutButton />
          </>
        );
      }
    }
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
          <SearchBar />
          {/* <form>
            <input placeholder="Search for restaurants or cuisines" className="search-input"></input>
          </form> */}
        </div>
      </div>
      <div className="right-nav">
        {sessionLinks}
      </div>
    </div>
  );
}


export default NavBar;
