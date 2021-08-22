import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getUserReservations, destroyReservation } from '../store/reservations'
import './User.css'


function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch()
  const reservations = Object.values(useSelector((state) => state.reservations))
  console.log(reservations)

  function onDelete(reservationId) {
      dispatch(destroyReservation(reservationId))
  }

  const sessionUser = useSelector(state => state.session.user);


  useEffect(() => {
    if (!userId) {
      return;
    }
    dispatch(getUserReservations(userId))
  }, [userId, dispatch]);

  return (
//   Moontes incoming changes
    // <div>
    //   {reservations?.map((reservation) => (
    //     <>
    //       <p>{reservation.date_start}</p>
    //       <div onClick={() => onDelete(reservation.id)}>Delete</div>
    //     </>
    //   ))}
    // </div>

//       TODO: Adapt with new info
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
      <div className="space-filler">

      </div>
      <div className="user-profile__rewards-container">
        <div className="rewards-points__container">
          <h1 className="rewards-total__text">Total TableTalk Points:</h1>
          <h1 className="rewards-total__text-amount">1 000</h1>
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
      <div className="space-filler">

</div>
      <div className="reservations__container">
        <h2>Reservations</h2>
        {/* TODO Move below code into map of reservations */}
        <div className="reservation-info__container">
        {reservations?.map((reservation) => (
            <>
              <p>{reservation.date_start}</p>
              <div onClick={() => onDelete(reservation.id)}>Delete</div>
            </>
        ))}
        </div>
        {/* {reservations && reservations?.map(reservation => (
          // TODO: Add reservation cards here
        ))} */}
      </div>
    </div>
  );
}
export default User;
