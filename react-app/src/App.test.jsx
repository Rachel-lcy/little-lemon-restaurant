import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import {initializeTimes} from './path/to/your/functions';
import {updateTimes} from  './path/to/your/functions';

test('Renders the BookingForm heading', ()=>{
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();

  const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
  expect(submitButton).toHaveAttribute("disabled");

});

test('initializeTimes returns expected initial times', ()=> {
  const initializeTimes = initializeTimes();
  const expectedTimes = ["11:00"];
  expect(initializeTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same state when no action is given', () => {
  const initialState = ["11:00"];
  const action = {};
  const updateState = updateTimes(initialState,action);
  expect(updateState).toEqual(initialState);

})