import React from 'react'
import Header from '../components/Header'

const Contact = () => {
  return (
    <div>
        <Header name="CONTACT US" />
          <div className="container my-5">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img src="https://www.yellosa.co.za/img/za/h/1539937940-91-toyota-head-office.png" height='50%' width='50%' className='about' alt="" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h1 className='display-5 text-dark'>Trading Hours:</h1>
              <span className='fw-bold text-primary text-dark'>Mon to Fri: 8:00AM to 5:00PM</span>
              <span className='fw-bold text-primary text-dark'>Sat to Sun: 9:00AM to 1:00PM</span>
              <br />
              <h1 className='display-5 text-dark'>Contacts:</h1>
              <span className='fw-bold text-primary text-dark'>071 043 3326</span>
              <span className='fw-bold text-primary text-dark'>Toyota@sa.com</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact