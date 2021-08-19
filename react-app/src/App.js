import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import {createBrowserHistory} from "history"
import { useDispatch } from 'react-redux';
import BusinessHomePage from './components/BusinessHomePage'
import NavBar from './components/NavBar/index';
import BusinessNavBar from './components/BusinessNavBar';
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
      <Switch>
        <Route path='/' exact={true}>
          <NavBar />
          <h1>Home</h1>
          <SplashPage />
        </Route>
        <ProtectedRoute path='/users' exact={true}>
          <NavBar />
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true}>
          <NavBar />
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/business/:id' exact={true}>
          <BusinessNavBar />
          <BusinessProfile />
        </ProtectedRoute>
        <Route path='/business' exact={true}>
          <BusinessNavBar />
          <BusinessHomePage />
        </Route>
        <Route path='/restaurants/:id'>
          <NavBar />
          <IndividualRestaurant />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
