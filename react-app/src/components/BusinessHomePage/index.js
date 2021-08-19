import React from 'react'
import BusinessSignUpForm from '../BusinessSignUpForm'
import './BusinessHomePage.css'

function BusinessHomePage() {
    return (
        <div>
          <img className='restaurant-img' src='https://i.imgur.com/3rx9VkF.jpg'/>
          <div className='business-home-page'>
            <div className="business-page-left">
             <h1>Join TableTalk, create experiences, and be the Talk of the town.</h1>
             <div className="reasons">
                <img className="time-img" src="https://i.imgur.com/fNkyTlf.png" />
                <h3>Reduce wait times for your valued guests, lessen walkouts for waits too long and fill empty seats!</h3>
             </div>
             <div className="reasons">
                <img className="money-img" src="https://i.imgur.com/LxqBJ6p.png" />
                <h3>Increase revenue by filling empty seats, increase the average tab per person, and increase the amount of daily serviced customers</h3>
             </div>
             <div className="reasons">
                <img className="social-img" src="https://i.imgur.com/PQg3kk5.png" />
                <h3>Curate a new type of social experience! Use our data to join your reservations or match reserved tables with guests waiting and create an unforgettable experience.</h3>
             </div>
            </div>
            <div className='business-page-right'>
                <BusinessSignUpForm />
            </div>
          </div>
        </div>
    )
}

export default BusinessHomePage
