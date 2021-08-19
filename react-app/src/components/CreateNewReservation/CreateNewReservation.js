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
    const restaurant = useSelector((state) => state.restaurants[id])
    const [partySize, setPartySize] = useState(1)
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [shareTable, setShareTable] = useState(false)
   
    const handleSubmit = async (e) => {
       e.preventDefault()
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
            <div className='reservation-form'>
                <form onSubmit={handleSubmit}>
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
                    <label>Would you like to share your table?</label>
                    <input 
                    type='checkbox'
                    name='time'
                    value={shareTable}
                    onChange={updateShareTable}
                    required={true}></input>
                    <button type='submit'>Find a table</button>
                </form>
            </div>
       </>
   )
}

export default CreateNewReservation