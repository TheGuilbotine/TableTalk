import React from 'react'
import BusinessSignUpForm from '../BusinessSignUpForm'
import './BusinessHomePage.css'

function BusinessHomePage() {
    return (
        <div className='business-home-page'>
            <div className="business-page-left">
             <h1>Sign up with us today because...</h1>
             <h3>1: Fill more seats! lajsdlkfjasdlfkjasldkjfasldkjfasdljkfaslkjfasdfj</h3>
             <h3>2: Earn more money! lajsdlkfjasdlfkjasldkjfasldkjfasdljkfaslkjfasdfj</h3>
             <h3>3: Curate new social experiences! lajsdlkfjasdlfkjasldkjfasldkjfasdljkfaslkjfasdfj</h3>
            </div>
            <div classNme='business-page-right'>
                <BusinessSignUpForm />
            </div>
        </div>
    )
}

export default BusinessHomePage
