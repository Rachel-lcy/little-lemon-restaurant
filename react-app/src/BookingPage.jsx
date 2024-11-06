import logo from './assets/logo.jpg';
import React from 'react';
import BookingForm from './BookingForm'

function BooingPage(){
  return(
    <div>
      <img src={logo} alt="Logo" />
      <h1>Little Lemon Restaurant Booking Page</h1>
        <BookingForm />
    </div>
  );
}

export default BooingPage;