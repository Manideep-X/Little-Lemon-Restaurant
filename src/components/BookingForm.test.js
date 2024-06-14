import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import {updateTimes, initializeTimes} from './Main'

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const dispatch = jest.fn();

// Test static text of heading in BookingForm
test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const headingElement = screen.getByText("Let's Reserve a Table for You !");
    expect(headingElement).toBeInTheDocument();
});

// Test initializeTimes function
test('initializeTimes returns the expected initial times correctly', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
});

// Test updateTimes function
test('updateTimes returns the same state provided in the action correctly', () => {
    const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = { type: 'UPDATE_TIMES', payload: { date: "2023-06-14" } };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
});