import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import {createBrowserHistory} from "history"
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import UserSignUpForm from './components/UserSignUpFormModal/UserSignUpForm';
import BusinessSignUpForm from './components/BusinessSignUpFormModal/BusinessSignUpForm';
import NavBar from './components/NavBar/index';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  // const history = createBrowserHistory()

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }



  return (
    <BrowserRouter >
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <h1>Home</h1>
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
