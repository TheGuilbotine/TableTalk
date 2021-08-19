import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import TimePicker from 'react-time-picker'
import { createReservation } from '../../store/reservations'
import './CreateNewReservation.css'


const CreateNewReservation = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id
    const restaurantId = id //total roundabout way to get restaurantId as we are doing useParams()
    const [errors, setErrors] = useState([]);
    const [partySize, setPartySize] = useState(1)
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [shareTable, setShareTable] = useState(false)
   

    const handleSubmit = async (e) => {
       e.preventDefault()
       const data = await dispatch(createReservation(userId, restaurantId, partySize, date, time, shareTable))

       if (data.errors) {
            setErrors(data.errors)
       }
   }

   const updatePartySize = (e) => {
       setPartySize(e.target.value)
   }

   const updateDate = async (e) => {
       setDate(e.target.value)
   }
// 
   const updateTime = async (e) => {
       setTime(e.target.value)
   }

   const updateShareTable = async (e) => {
       setShareTable(e.target.value)
   }
   return (
       <>
            <div className='reservation-form-container'>
                <form onSubmit={handleSubmit} className='reservation-form'>
                <div>
                    {errors.map((error, ind) => (
                        <div key={ind}>{error}</div>
                    ))}
                </div>
                    <h4>Make a reservation</h4>
                    <label>Party size</label>
                    <input 
                        type='number'
                        name='partySize'
                        value={partySize}
                        onChange={updatePartySize}
                        required={true}
                     ></input>
                    <label>Date</label>
                    <input 
                        type='date'
                        name='date'
                        value={date}
                        onChange={updateDate}
                        required={true}
                    ></input>
                    <label>Time</label>
                    <input 
                        type='time'
                        name='time'
                        value={time}
                        onChange={updateTime}
                        required={true}
                    ></input>
                    <label>Would you like to share your table? Earn 50 TTPoints for sharing your table!</label>
                    <input 
                        type='checkbox'
                        name='time'
                        value={shareTable}
                        onChange={updateShareTable}
                        required={true}
                    ></input>
                    <button type='submit'>Find a table</button>
                </form>
            </div>
       </>
   )
}

export default CreateNewReservation