import { useReducer } from "react";
import { Route, Routes } from 'react-router-dom';
import Homepage from "./Homepage";
import Chicago from "./Chicago";
import Specials from "./Specials";
import BookingPage from "./BookingForm";
import Nav from './Nav';
import { Box } from '@chakra-ui/react';

export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Update the available times based on the selected date
export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Here, you can add logic to update times based on action.payload.date
            return state; // For now, return the same times regardless of the date
        default:
            return state;
    }
};

const Main = () => {

    // const [availableTimes, setAvailableTime] = useState(
    //     ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    // );
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
            element: <BookingPage />
        },
    ];

    return (
        <Box>
            <Nav navbarLinks={navbarLinks} />
            <Routes>
                {navbarLinks.map((link, index) => (
                    <Route key={index} path={link.path} element={link.element} />
                    ))}
            </Routes>
        </Box>
    );
};

export default Main;