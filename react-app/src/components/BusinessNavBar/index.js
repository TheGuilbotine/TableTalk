
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BusinessLoginModal from '../BusinessLoginFormModal'
import BusinessLogoutButton from '../auth/BusinessLogoutButton';
import BusinessSignUpForm from '../BusinessSignUpForm/index';

const BusinessNavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to='/business/:id' className="my-profile">Business Profile</NavLink>
        <BusinessLogoutButton />
      </>
      );
  } else {
    sessionLinks = (
      <>
        {/* <NavLink to='/login' className='login-button' exact={true} activeClassName='active'>
          Login
        </NavLink> */}
        <BusinessLoginModal />
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li>
            {sessionLinks}
          {/* <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink> */}
        </li>
        {/* <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default BusinessNavBar;
