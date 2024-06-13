// import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from '../icons_assets/Logo.svg';
import { Box, HStack } from "@chakra-ui/react";

const Nav = ({ navbarLinks }) => {

    return (
        <nav className="navbar">
            <Box as="nav" >
                <HStack spacing={8} style={{display : "flex" , justifyContent : "center"}}>
                    <img src={Logo} alt="Little Lemon" width="200vw" />
                    {navbarLinks.map((link, index) => (
                        <Link key={index} to={link.path} style={{fontSize:"1rem"}}>
                            {link.text}
                        </Link>
                    ))}
                </HStack>
            </Box>
        </nav>
    );
};

export default Nav;