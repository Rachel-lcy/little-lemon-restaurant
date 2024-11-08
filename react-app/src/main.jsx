import React, { useState, useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import BookingForm from './BookingForm.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

function initializeTimes() {
  const today = new Date();// Get today's date
  return fetchAPI(today);
  //return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function updateTimes(state, action) {

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.availableTimes;
    default:
      return state;
  }
   
}

function Main() {

  return (
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
  );
}

export default Main;
