import React, { useState, useReducer, useEffect } from 'react';
import logo from './assets/logo.jpg';
import { Link } from 'react-router-dom';
import footerLogo from './assets/logo-footer.png';

function BookingForm({ availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"], dispatch }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  // Set up useReducer with initializeTimes and updateTimes
  

 // Dispatch an action to update available times when the date changes
  useEffect(()=>{
    dispatch({type: "update_times", payload: date});
  }, [date]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Successfully Submit")
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(selectedDate);
    
  };

  return (
    <>
      <div className="booking-header-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="booking-logo" />
        </Link>
        <h1 className="booking-header">Book Now</h1>
      </div>

      <form onSubmit={handleSubmit} className="booking-form" style={{ display: 'grid', maxWidth: '800px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input role="button" type="submit" value="Make Your Reservation" />
      </form>

      <div className="booking-footer">
        <img src={footerLogo} alt="footer logo" className="footer-image" />
        <p>&copy; {new Date().getFullYear()} Little Lemon Website</p>
      </div>
    </>
  );
}

export default BookingForm;
