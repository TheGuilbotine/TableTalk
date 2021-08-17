import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const BusinessSignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [description, setDescription] = useState('');
  const [priceRange, setPriceRange] = useState(1);
  const [addressLineOne, setAddressLineOne] = useState('');
  const [addressLineTwo, setAddressLineTwo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  // TODO ask what this does?
  const business = useSelector(state => state.session.business);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(email, password, firstName, lastName, businessName));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateBusinessName = (e) => {
    setBusinessName(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  const updateRestaurantName = (e) => {
    setRestaurantName(e.target.value);
  };
  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const updateCuisineType = (e) => {
    setCuisineType(e.target.value);
  };
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };
  const updatePriceRange = (e) => {
    setPriceRange(e.target.value);
  };
  const updateAddressLineOne = (e) => {
    setAddressLineOne(e.target.value);
  };
  const updateAddressLineTwo = (e) => {
    setAddressLineTwo(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  const updateCountry = (e) => {
    setCountry(e.target.value);
  };
  const updateState = (e) => {
    setState(e.target.value);
  };
  const updatePostalCode = (e) => {
    setPostalCode(e.target.value);
  };
  const updateImgUrl = (e) => {
    setImgUrl(e.target.value);
  };

  if (business) {
    return <Redirect to='/business' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <input
          placeholder = "Email Address"
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          required={true}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'First Name'
          type='text'
          name='firstName'
          onChange={updateFirstName}
          value={firstName}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Last Name'
          type='text'
          name='lastName'
          onChange={updateLastName}
          value={lastName}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Business Name'
          type='text'
          name='businessName'
          onChange={updateBusinessName}
          value={businessName}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Password'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          required={true}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Confirm Password'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      <div>
      </div>
        <input
          placeholder = 'Restaurant Name'
          type='text'
          name='restaurantName'
          onChange={updateRestaurantName}
          value={restaurantName}
          required={true}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Phone Number'
          type='text'
          name='phoneNumber'
          onChange={updatePhoneNumber}
          value={phoneNumber}
          required={true}
        ></input>
      </div>
      <div>
        <select value={cuisineType} onChange={updateCuisineType} required={true}>
          {/*  TODO check that values are capitalized */}
          <option value='American'>Sushi</option>
          <option value='BBQ'>BBQ</option>
          <option value='Brazilian'>Brazilian</option>
          <option value='French'>French</option>
          <option value='Indian'>Indian</option>
          <option value='Italian'>Italian</option>
          <option value='Korean'>Korean</option>
          <option value='Southern'>Southern</option>
          <option value='Sushi'>Sushi</option>
          <option value='Thai'>Thai</option>
          <option value='Vegan'>Vegan</option>
          <option value='Vietnamese'>Vietnamese</option>
        </select>
      </div>
      <div>
        <input
          placeholder = 'Description'
          type='text'
          name='description'
          onChange={updateDescription}
          value={description}
          required={true}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Price'
          type='number'
          name='priceRange'
          onChange={updatePriceRange}
          value={priceRange}
          required={true}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Address Line One'
          type='text'
          name='addressLineOne'
          onChange={updateAddressLineOne}
          value={addressLineOne}
          required={true}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Address Line Two'
          type='text'
          name='addressLineTwo'
          onChange={updateAddressLineTwo}
          value={addressLineTwo}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'City'
          type='text'
          name='city'
          onChange={updateCity}
          value={city}
          required={true}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'State'
          type='text'
          name='state'
          onChange={updateState}
          value={state}
          required={true}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Zip Code'
          type='text'
          name='postalCode'
          onChange={updatePostalCode}
          value={postalCode}
          required={true}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Country'
          type='text'
          name='country'
          onChange={updateCountry}
          value={country}
          required={true}
        ></input>
      </div>
      <div>
        <input
          placeholder = 'Image URL'
          type='text'
          name='imgUrl'
          onChange={updateImgUrl}
          value={imgUrl}
          required={true}
        ></input>
      </div>
      {/* TODO add a button to render another image input field */}
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default BusinessSignUpForm;
