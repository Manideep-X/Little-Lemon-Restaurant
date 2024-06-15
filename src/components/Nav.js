import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../icons_assets/Logo.svg';
import { Box, HStack } from "@chakra-ui/react";
import '../stylesheets/Nav.css'

const Nav = ({ navbarLinks }) => {

    const [isVisible, setIsVisible] = useState(true);
    const prevYPos = useRef(window.scrollY);

    const handleScroll = () => {
        const currYPos = window.scrollY;
        if (currYPos > prevYPos.current) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        prevYPos.current = currYPos;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return (
        <nav className="navbar" style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}>
            <Box as="nav" >
                <HStack spacing="10vw" style={{ display: "flex", justifyContent: "center", padding: "2vh 0vw" }}>
                    <Link className="img-link" to='/'>
                        <img src={Logo} alt="Little Lemon" width="255vw" />
                    </Link>
                    <HStack spacing="1.8vw">
                        {navbarLinks.map((link, index) => (
                            <Link className="anchor" key={index} to={link.path} style={{ fontWeight: "600", paddingTop: "0.6vh" }}>
                                {link.text}
                            </Link>
                        ))}
                    </HStack>
                </HStack>
            </Box>
        </nav>
    );
};

export default Nav;