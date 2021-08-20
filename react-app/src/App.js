import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import {createBrowserHistory} from "history"
import { useDispatch } from 'react-redux';
import BusinessHomePage from './components/BusinessHomePage'
import NavBar from './components/NavBar/index';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import SplashPage from './components/SplashPage';
import BusinessProfile from './components/BusinessProfilePage';
import IndividualRestaurant from './components/IndividualRestaurantPage';
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
        <Route path='/' exact={true}>
          <SplashPage />
        </Route>
        <ProtectedRoute path='/users' exact={true}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/business/:id' exact={true}>
          <BusinessProfile />
        </ProtectedRoute>
        <Route path='/business' exact={true}>
          <BusinessHomePage />
        </Route>
        <Route path='/restaurants/:id'>
          <IndividualRestaurant />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
