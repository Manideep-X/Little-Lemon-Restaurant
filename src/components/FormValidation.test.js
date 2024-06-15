import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';
import { ChakraProvider } from "@chakra-ui/react";

// Mock functions
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

// Helper to render component with ChakraProvider
const renderWithChakraProvider = (component) => {
    return render(<ChakraProvider>{component}</ChakraProvider>);
};

describe('BookingForm', () => {
    beforeEach(() => {
        mockDispatch.mockClear();
        mockSubmitForm.mockClear();
    });

    test('renders the form with all fields', () => {
        renderWithChakraProvider(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        // Check if all fields are rendered
        expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    });

    test('displays validation messages when fields are touched and invalid', async () => {
        renderWithChakraProvider(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        // Trigger validation by touching and blurring the fields
        fireEvent.blur(screen.getByLabelText(/Choose date/i));
        fireEvent.blur(screen.getByLabelText(/Choose Time/i));
        fireEvent.blur(screen.getByLabelText(/Occasion/i));

        // Check if validation messages are displayed
        await waitFor(() => {
            expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Occasion is required/i)).toBeInTheDocument();
        });
    });

    test('disables the submit button when form is invalid', () => {
        renderWithChakraProvider(<BookingForm availableTimes={[]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });

        // Check if submit button is disabled
        expect(submitButton).toBeDisabled();
    });

    test('enables the submit button when form is valid', async () => {
        renderWithChakraProvider(<BookingForm availableTimes={["17:00"]} dispatch={mockDispatch} submitForm={mockSubmitForm} />);

        const dateInput = screen.getByLabelText(/Choose date/i);
        const timeSelect = screen.getByLabelText(/Choose Time/i);
        const occasionSelect = screen.getByLabelText(/Occasion/i);
        const submitButton = screen.getByRole('button', { name: /Make Your Reservation/i });

        // Fill out the form
        fireEvent.change(dateInput, { target: { value: '2024-06-15' } });
        fireEvent.change(timeSelect, { target: { value: '17:00' } });
        fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

        // Check if submit button is enabled
        await waitFor(() => {
            expect(submitButton).toBeEnabled();
        });
    });
});
