import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getCuisines } from '../../store/cuisine';
import { editRestaurant, getOneRestaurant } from '../../store/restaurants';
import './EditRestaurantModal.css';

const EditRestaurantForm = ({restaurantId, showModal}) => {
  const restaurant = useSelector(state => state.restaurants[restaurantId]);
  const business = useSelector(state => state.session.user)
  const cuisines = useSelector((state) => Object.values(state.cuisines));
  const businessId = useSelector((state) => state.session.user.id);

	const [errors, setErrors] = useState([]);
	const [restaurantName, setRestaurantName] = useState(restaurant.restaurant_name);
	const [phoneNumber, setPhoneNumber] = useState(restaurant.phone_number);
	const [cuisineId, setCuisineId] = useState(restaurant.cuisine_id);
	const [description, setDescription] = useState(restaurant.description);
	const [priceRange, setPriceRange] = useState(restaurant.price_range);
	const [imgUrl, setImgUrl] = useState(restaurant.img_url);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCuisines());
		dispatch(getOneRestaurant())
	}, [dispatch]);

	const onEdit = async (e) => {
		e.preventDefault();
		const data = await dispatch(
			editRestaurant(
				restaurantId,
				businessId,
				restaurantName,
				phoneNumber,
				cuisineId,
				description,
				priceRange,
				imgUrl
			)
		);
		if (data.errors) {
			console.log("%cYou,ve got errors", "color:yellow")
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

	const updateImgUrl = (e) => {
		setImgUrl(e.target.value);
	};

	return (
		<div className='restaurant-form-container'>
			<form onSubmit={onEdit} className='restaurant-form'>
				<div>
					{errors?.map((error, ind) => (
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
				</div>
				<button id='restaurant-submit-button' type='submit'>
					Update Restaurant
				</button>
			</form>
		</div>
	);
};

export default EditRestaurantForm;
