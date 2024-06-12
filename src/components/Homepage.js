import React, { useState, useEffect, useRef } from "react";
import Chicago from "./Chicago";
import CustomersSay from './CustomersSay';
import Specials from './Specials';
import BookingPage from './BookingPage';
import CallToAction from "./CallToAction";
import { Box, HStack } from "@chakra-ui/react";

const Homepage = () => {

    

    return (
        <>
            <CallToAction />
            <Chicago />
        </>
    );
};

export default Homepage;