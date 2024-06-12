import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Box, HStack } from "@chakra-ui/react";

const Nav = ({ navbarLinks }) => {

    return (
        <nav className="navbar">
            <Box as="nav" >
                <HStack spacing={4}>
                    {navbarLinks.map((link, index) => (
                        <Link key={index} to={link.path}>
                            {link.text}
                        </Link>
                    ))}
                </HStack>
            </Box>
        </nav>
    );
};

export default Nav;