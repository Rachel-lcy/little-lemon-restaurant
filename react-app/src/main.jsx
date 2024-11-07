import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import BookingForm from './BookingForm.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function updateTimes(state, action) {
  switch (action.type) {
    case "update":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
  );
}

export default Main;
