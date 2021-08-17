
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import UserSignUpFormModal from './UserSignUpFormModal';
import BusinessSignUpFormModal from './BusinessSignUpFormModal';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/business' exact={true} activeClassName='active'>
            Are you a business?
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <UserSignUpFormModal />
        </li>
        <li>
          <BusinessSignUpFormModal />
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
