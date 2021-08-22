import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getCuisines } from '../../store/cuisine';
import { createRestaurant } from '../../store/restaurants';
import './CreateRestaurant.css';

const RestaurantForm = ({setShowModal}) => {
	const [errors, setErrors] = useState([]);
	//   const [businessId, setBusinessId] = useState(null);
	const [restaurantName, setRestaurantName] = useState('Test1');
	const [phoneNumber, setPhoneNumber] = useState('(111) 111-1111');
	const [cuisineId, setCuisineId] = useState(1);
	const [description, setDescription] = useState('TESTER DESCRIPTON');
	const [priceRange, setPriceRange] = useState('1');
	const [addressLineOne, setAddressLineOne] = useState('Test 1 Lane');
	const [addressLineTwo, setAddressLineTwo] = useState('');
	const [city, setCity] = useState('TESTVILLE');
	const [state, setState] = useState('TS');
	const [postalCode, setPostalCode] = useState('10001');
	const [country, setCountry] = useState('TESTINGTON');
	const [imgUrl, setImgUrl] = useState('test.url');
	const cuisines = useSelector((state) => Object.values(state.cuisines));
	const businessId = useSelector((state) => state.session.user.id);;
	const dispatch = useDispatch();
  const history = useHistory();
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
			),
    );
    setShowModal(false)
    if (data.errors) {
			setErrors(data.errors);
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
					{errors?.map((error, ind) => (
						<div key={ind}>{error}</div>
					))}
				</div>
				<div className='forms-container'>
					<div className='restaurant-info-container'>
						<p className='add-restaurant-title'>Restaurant Info:</p>
						<div className='form-label__container'>
							<input
								className='form-input'
								placeholder='Restaurant Name'
								type='text'
								name='restaurantName'
								onChange={updateRestaurantName}
								value={restaurantName}
								required={true}></input>
						</div>
						<div className='form-label__container'>
							<input
								className='form-input'
								placeholder='Image URL'
								type='text'
								name='imgUrl'
								onChange={updateImgUrl}
								value={imgUrl}
								// required={true}
							></input>
						</div>
						<div className='form-label__container'>
							<input
								className='form-input'
								placeholder='Phone Number'
								type='text'
								name='phoneNumber'
								onChange={updatePhoneNumber}
								value={phoneNumber}
								required={true}></input>
						</div>
						<div className='form-label__container'>
							<select
								className='form-input'
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
						</div>
						<div className='form-label__container'>
							<select
								className='form-input'
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
						</div>
						<div className='form-label__container'>
							<textarea
							className='form-input'
							placeholder='Description'
							type='text'
							name='description'
							onChange={updateDescription}
							value={description}
							required={true}></textarea>
						</div>
					</div>
					<div className='restaurant-address-container'>
						<p className='add-restaurant-title'>Restaurant Address:</p>
						<div className='form-label__container'>
							<input
								className='form-input'
								placeholder='Address Line One'
								type='text'
								name='addressLineOne'
								onChange={updateAddressLineOne}
								value={addressLineOne}
								required={true}></input>
						</div>
						<div className='form-label__container'>
							<input
								className='form-input'
								placeholder='Address Line Two'
								type='text'
								name='addressLineTwo'
								onChange={updateAddressLineTwo}
								value={addressLineTwo}></input>
						</div>
						<div className='form-label__container'>
							<input
								className='form-input'
								placeholder='City'
								type='text'
								name='city'
								onChange={updateCity}
								value={city}
								required={true}></input>
						</div>
						<div className='form-label__container'>
							<input
								className='form-input'
								placeholder='State'
								type='text'
								name='state'
								onChange={updateState}
								value={state}
								required={true}></input>
						</div>
						<div className='form-label__container'>
							<input
								className='form-input'
								placeholder='Zip Code'
								type='text'
								name='postalCode'
								onChange={updatePostalCode}
								value={postalCode}
								required={true}></input>
						</div>
						<div className='form-label__container'>
							<input
								className='form-input'
								placeholder='Country'
								type='text'
								name='country'
								onChange={updateCountry}
								value={country}
								required={true}></input>
						</div>
					</div>
				</div>
				<div className='add-restaurant__button-container'>
					<button id='restaurant-submit-button' type='submit'>
						Add your Restaurant
					</button>
				</div>
			</form>
		</div>
	);
};

export default RestaurantForm;
