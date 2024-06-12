import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Homepage from "./Homepage";
import Chicago from "./Chicago";
import Specials from "./Specials";
import BookingPage from "./BookingPage";
import Nav from './Nav';

const Main = () => {

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
            element: <BookingPage />
        },
        {
            text: "Order Online",
            path: "/order-online",
            element: <Specials />
        },
        {
            text: "Login",
            path: "/login",
            element: <Homepage />
        },
    ]

    return (
        <Router>
            <Nav navbarLinks={navbarLinks} />
            <Routes>
                {navbarLinks.map((link, index) => (
                    <Route key={index} path={link.path} element={link.element} />
                ))}
            </Routes>
        </Router>
    );
};

export default Main;