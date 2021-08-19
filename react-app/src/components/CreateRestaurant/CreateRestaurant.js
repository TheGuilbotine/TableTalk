import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getCuisines } from '../../store/cuisine';
import { createRestaurant } from '../../store/restaurants';
import './CreateRestaurant.css';

const RestaurantForm = () => {
	const [errors, setErrors] = useState([]);
	//   const [businessId, setBusinessId] = useState(null);
	const [restaurantName, setRestaurantName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [cuisineId, setCuisineId] = useState(null);
	const [description, setDescription] = useState('');
	const [priceRange, setPriceRange] = useState('');
	const [addressLineOne, setAddressLineOne] = useState('');
	const [addressLineTwo, setAddressLineTwo] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [country, setCountry] = useState('');
	const [imgUrl, setImgUrl] = useState('');
	const cuisines = useSelector((state) => Object.values(state.cuisines));
	console.log('>>>>>>>>>>>>>>>>>>>', cuisines);
	const businessId = useSelector((state) => state.session.user.id);
	console.log(businessId);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCuisines());
	}, [dispatch]);

	const onCreate = async (e) => {
		e.preventDefault();
		const data = await dispatch(
			createRestaurant(
				businessId,
				restaurantName,
				phoneNumber,
				cuisineId,
				description,
				priceRange,
				addressLineOne,
				addressLineTwo,
				city,
				state,
				postalCode,
				country,
				imgUrl
			)
		);
		if (data) {
			setErrors(data);
		}
	};

	const updateRestaurantName = (e) => {
		setRestaurantName(e.target.value);
	};
	const updatePhoneNumber = (e) => {
		setPhoneNumber(e.target.value);
	};
	const updateCuisineId = (e) => {
		setCuisineId(e.target.value);
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

	return (
		<div className='restaurant-form-container'>
			<form onSubmit={onCreate} className='restaurant-form'>
				<div>
					{errors.map((error, ind) => (
						<div key={ind}>{error}</div>
					))}
				</div>
				<div className='forms-container'>
					<div className='restaurant-info-container'>
						<p>Restaurant Info:</p>
						<input
							placeholder='Restaurant Name'
							type='text'
							name='restaurantName'
							onChange={updateRestaurantName}
							value={restaurantName}
							required={true}></input>
						<input
							placeholder='Image URL'
							type='text'
							name='imgUrl'
							onChange={updateImgUrl}
							value={imgUrl}
							// required={true}
						></input>
						<input
							placeholder='Phone Number'
							type='text'
							name='phoneNumber'
							onChange={updatePhoneNumber}
							value={phoneNumber}
							required={true}></input>
						<select
							value={cuisineId}
							onChange={updateCuisineId}
							required={true}>
							<option value='' disabled selected>
								Select Cuisine Type
							</option>
							{cuisines?.map((cuisine) => (
								<option key={cuisine.id} value={cuisine.id}>
									{cuisine?.type}
								</option>
							))}
						</select>
						<select
							value={priceRange}
							onChange={updatePriceRange}
							required={true}>
							<option value='' disabled selected>
								Select Price Range
							</option>
							<option value='1'>$ - under $10 per plate</option>
							<option value='2'>$$ - $11-$20 per plate</option>
							<option value='3'>$$$ - $21 -$30 per plate</option>
							<option value='4'>$$$$ - $31 + per plate</option>
						</select>
						<textarea
							placeholder='Description'
							type='text'
							name='description'
							onChange={updateDescription}
							value={description}
							required={true}></textarea>
					</div>
					<div className='restaurant-address-container'>
						<p>Restaurant Address:</p>
						<input
							placeholder='Address Line One'
							type='text'
							name='addressLineOne'
							onChange={updateAddressLineOne}
							value={addressLineOne}
							required={true}></input>
						<input
							placeholder='Address Line Two'
							type='text'
							name='addressLineTwo'
							onChange={updateAddressLineTwo}
							value={addressLineTwo}></input>
						<input
							placeholder='City'
							type='text'
							name='city'
							onChange={updateCity}
							value={city}
							required={true}></input>
						<input
							placeholder='State'
							type='text'
							name='state'
							onChange={updateState}
							value={state}
							required={true}></input>
						<input
							placeholder='Zip Code'
							type='text'
							name='postalCode'
							onChange={updatePostalCode}
							value={postalCode}
							required={true}></input>
						<input
							placeholder='Country'
							type='text'
							name='country'
							onChange={updateCountry}
							value={country}
							required={true}></input>
					</div>
				</div>
				<button id='restaurant-submit-button' type='submit'>
					Add your Restaurant
				</button>
			</form>
		</div>
	);
};

export default RestaurantForm;
