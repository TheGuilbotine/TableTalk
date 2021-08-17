// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const userLogout = () => async (dispatch) => {
  const response = await fetch('/api/auth/user/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const userSignUp = (email, firstName, lastName, birthDate, imgUrl, gender, password) => async (dispatch) => {
  const response = await fetch('/api/auth/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      first_name: firstName,
      last_name: lastName,
      birth_date: birthDate,
      img_url: imgUrl,
      gender,
      hashed_password: password
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const businessSignUp = (email, password, firstName, lastName, businessName, restaurantName, phoneNumber, cuisineType, description, priceRange, addressLineOne, addressLineTwo, city, state, postalCode, country, imgUrl) => async (dispatch) => {
  const response = await fetch('/api/auth/business/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email,
        business_name: businessName,
        first_name: firstName,
        last_name: lastName,
        hashed_password: password,
        address_line_one: addressLineOne,
        address_line_two: addressLineTwo,
        city,
        state,
        postal_code: postalCode,
        country,
        restaurant_name: restaurantName,
        phone_number: phoneNumber,
        cuisine_type: cuisineType,
        description,
        price_range: priceRange,
        img_url: imgUrl
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    default:
      return state;
  }
}
