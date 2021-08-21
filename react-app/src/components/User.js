import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getUserReservations, destroyReservation } from '../store/reservations'


function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch()
  const reservations = Object.values(useSelector((state) => state.reservations))
  console.log(reservations)

  function onDelete(reservationId) {
      dispatch(destroyReservation(reservationId))
  }

  useEffect(() => {
    if (!userId) {
      return;
    }
    dispatch(getUserReservations(userId))
  }, [userId, dispatch]);

  return (

    <div>
      {reservations?.map((reservation) => (
        <>
          <p>{reservation.date_start}</p>
          <div onClick={() => onDelete(reservation.id)}>Delete</div>
        </>
      ))}
    </div>
  );
}
export default User;
