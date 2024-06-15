import { fetchAPI } from "../api";
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { updateTimes, initializeTimes } from './Main'

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const dispatch = jest.fn();

jest.mock('../api', () => ({
    fetchAPI: jest.fn(),
}));

// Test static text of heading in BookingForm
test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
    const headingElement = screen.getByText("Let's Reserve a Table for You !");
    expect(headingElement).toBeInTheDocument();
});

describe('Booking Times using API', () => {
    beforeEach(() => {
        // Reset mock before each test
        fetchAPI.mockReset();
    });

    // Test initializeTimes function
    test('initializeTimes should return the available times from fetchAPI', () => {
        const mockTimes = ["17:00", "18:00", "19:00"];
        fetchAPI.mockReturnValue(mockTimes);

        const initialTimes = initializeTimes();
        expect(initialTimes).toEqual(mockTimes);
    });

    // Test updateTimes function
    test('updateTimes should return the available times for the given date from fetchAPI', () => {
        const mockTimes = ["17:00", "18:00", "19:00"];
        fetchAPI.mockReturnValue(mockTimes);
        const date = "2024-06-15"; // Pre-selected date

        const updatedTimes = updateTimes([], { type: 'UPDATE_TIMES', payload: {date} });
        expect(updatedTimes).toEqual(mockTimes);
    });
});