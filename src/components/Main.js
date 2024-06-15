import { fetchAPI, submitAPI } from '../api'
import { useReducer } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Homepage from "./Homepage";
import Chicago from "./Chicago";
import Specials from "./Specials";
import BookingPage from "./BookingForm";
import ConfirmedBooking from './ConfirmedBooking';
import Nav from './Nav';
import { Box } from '@chakra-ui/react';

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(new Date(action.payload.date));
        default:
            return state;
    }
};

const Main = () => {

    // const [availableTimes, setAvailableTime] = useState(
    //     ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    // );
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const navigation = useNavigate();
    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigation("/confirmation-page");
        } else {
            throw new Error("Maybe the API is not working, or else I don't know")
        }
    };

    const navbarLinks = [
        {
            text: "Home",
            path: "/",
            element: <Homepage />
        },
        {
            text: "About",
            path: "/about",
            element: <Chicago />
        },
        {
            text: "Menu",
            path: "/menu",
            element: <Specials />
        },
        {
            text: "Reservations",
            path: "/reservations",
            element: <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        },
        {
            text: "Order Online",
            path: "/order-online",
            element: <Specials />
        },
        {
            text: "Login",
            path: "/login",
            element: <BookingPage
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        },
    ];

    return (
        <Box>
            <Nav navbarLinks={navbarLinks} />
            <Routes>
                {navbarLinks.map((link, index) => (
                    <Route key={index} path={link.path} element={link.element} />
                ))}
                <Route path='/confirmation-page' element={<ConfirmedBooking />} />
            </Routes>
        </Box>
    );
};

export default Main;