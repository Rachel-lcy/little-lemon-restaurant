import React, { useState, useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.jsx';
import BookingForm from './BookingForm.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

const initializeTimes = async () => {
  const today = new Date().toISOString().split("T")[0]; // Format date as "YYYY-MM-DD"
  
  // Call the fetchData API function
  const availableTimes = await window.fetchData(selectedDate);
 
  console.log("Available times for selected date:", availableTimes);

  return availableTimes || []; // Return the fetched times or an empty array as a fallback
};


const updateTimes = async (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const selectedDate = action.payload;
      const availableTimes = await window.fetchData(selectedDate); // Call the API with the selected date
      return availableTimes || []; // Return the fetched times or an empty array as a fallback

    default:
      return state;
  }
};
// Assuming fetchData is available globally (e.g., from the script you included)

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    dispatch({ type: "UPDATE_TIMES", payload: today });
  }, []);

  return (
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
  );
}

export default Main;
