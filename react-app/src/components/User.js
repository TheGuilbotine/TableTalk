import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './User.css'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const sessionUser = useSelector(state => state.session.user);
  // const reservations = useSelector(state => state.session.user.reservations)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className="user-profile__container">
      <div className="user-info__container">
        <h2>{sessionUser.first_name}'s Information</h2>
        <div className="profile-photo">
          <img href={sessionUser.img_url}></img>
        </div>
        <div className="user-info">
          <p>{sessionUser.first_name} {sessionUser.last_name}, {sessionUser.gender}</p>
          <p>Born: {sessionUser.birth_date}</p>
          <p>{sessionUser.email}</p>
        </div>
      </div>
      <div className="user-profile__rewards-container">
        <div className="rewards-points__container">
          <h1 className="rewards-total__text">Total Rewards Points:</h1>
          <h1 className="rewards-total__text">1 000</h1>
        </div>
        <div className="reward-examples__container">
          <table>
            <tr>
              <th className="table-header">Amount Required</th>
              <th className="table-header">Goodies Possible</th>
            </tr>
            <tr>
              <td>********************************</td>
              <td>*****************************</td>
            </tr>
            <tr>
              <td>50</td>
              <td>Appetizer</td>
            </tr>
            <tr>
              <td>100</td>
              <td>Desert</td>
            </tr>
            <tr>
              <td>250</td>
              <td>Two Mixed Drinks</td>
            </tr>
            <tr>
              <td>500</td>
              <td>Entree</td>
            </tr>
            <tr>
              <td>1000</td>
              <td>Appetizer, Two Entrees and Two Deserts</td>
            </tr>
            <tr>
              <td>5000</td>
              <td>Dinner with Drinks for Two</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="reservations__container">
        {/* TODO Move below code into map of reservations */}
        <div className="reservation-info__container">
          {/* TODO add reservation cards here */}
        </div>
        {/* {reservations && reservations?.map(reservation => (
          // TODO: Add reservation cards here
        ))} */}
      </div>
    </div>
    // <ul>
    //   <li>
    //     <strong>User Id</strong> {userId}
    //   </li>
    //   <li>
    //     <strong>Username</strong> {user.username}
    //   </li>
    //   <li>
    //     <strong>Email</strong> {user.email}
    //   </li>
    // </ul>
  );
}
export default User;
