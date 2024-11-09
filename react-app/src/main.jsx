import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import BookingForm from './BookingForm.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
  //return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    const availableTimes = fetchAPI(action.payload); // action.payload should be the selected date
    return availableTimes;
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [],initializeTimes());

  useEffect(() => {
    // Dispatch an action to update available times when the date changes
    dispatch({ type: "UPDATE_TIMES", payload: formattedDate });
  }, [formattedDate]);

  return (
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
  );
}

export default Main;
