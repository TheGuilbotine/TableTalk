export const LOAD_RESERVATIONS = 'reservations/LOAD_RESERVATIONS';
export const REMOVE_RESERVATION = 'reservations/REMOVE_RESERVATION';
export const ADD_ONE = 'reservations/ADD_ONE';


const load = list => ({
    type: LOAD_RESERVATIONS,
    list,
});

const addOneReservation = reservation => ({
    type: ADD_ONE,
    reservation,
  });

  const removeReservation = reservationId => ({
      type: REMOVE_RESERVATION,
      reservationId,
  });


export const getReservations = () => async dispatch => {
    const res = await fetch('/api/reservations');

    if (res.ok) {
        const list = await res.json();
        dispatch(load(list));
    }
};


export const getOneReservation = id => async dispatch => {
    const res = await fetch(`/api/reservations/${id}`);

    const reservation = await res.json();
    if (res.ok) {
      dispatch(addOneReservation(reservation));
    }
};

export const createReservation = (userId, restaurantId, partySize, date, time, shareTable) => async dispatch => {
const res = await fetch(`/api/reservations/`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: userId,
      restaurant_id: restaurantId,
      number_of_guests: partySize,
      date_start: date,
      time_start: time,
      share_table: shareTable
    })
});
const reservation = await res.json();
if (res.ok) {
    dispatch(addOneReservation(reservation));
    return res;
}
};

  export const destroyReservation = id => async dispatch => {
    const res = await fetch(`/api/reservations/${id}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      await res.json();
      dispatch(removeReservation(id));
    }
    return res;
  };

  export const editReservation = (payload) => async dispatch => {
      const res = await fetch(`/api/reservations/${payload.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          const reservation = await res.json();
          dispatch(addOneReservation(reservation));
        }
        return res;
  };


const initialState = {
    list: []
};

const sortList = (reservations) => {

    reservations.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    return reservations.map(reservation => reservation.id);
  };


const reservationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RESERVATIONS: {
            const allReservations = {};
            action.list.forEach(reservation => {
                allReservations[reservation.id] = reservation;
            });
            return {...allReservations, ...state, list: sortList(action.list),
            };
        }
        case ADD_ONE: {
          const newState = {
              ...state,
              [action.reservation.id]: action.reservation
          }
            return newState
        }
        default:
            return state;
    }
}

export default reservationsReducer;
