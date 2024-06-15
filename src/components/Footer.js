import { Box, Heading } from '@chakra-ui/react';
import logo2 from '../icons_assets/Logo2.svg'
import { Link } from 'react-router-dom';
import '../stylesheets/footer.css'

const navbarLinks = [
    {
        text: "Home",
        path: "/",
    },
    {
        text: "About",
        path: "/about",
    },
    {
        text: "Menu",
        path: "/menu",
    },
    {
        text: "Reservations",
        path: "/reservations",
    },
    {
        text: "Order Online",
        path: "/order-online",
    },
    {
        text: "Login",
        path: "/login",
    },
]

const contacts = [
    {
        text: "Address",
        path: "https://www.google.co.in/maps/preview"
    },
    {
        text: "Phone Number",
        path: "tel:+1234567890"
    },
    {
        text: "Email",
        path: "mailto: hello@example.com"
    }
]

const social = [
    {
        text: "Facebook",
        path: "https://www.facebook.com/"
    },
    {
        text: "Twitter",
        path: "https://x.com/"
    },
    {
        text: "Instagram",
        path: "https://www.instagram.com/"
    },
    {
        text: "Reddit",
        path: "https://www.reddit.com/"
    },
    {
        text: "Medium",
        path: "https://medium.com/"
    }
]

const Footer = () => {
    return (
        <footer className='footer'>
            <Box className='footImg'>
                <img src={logo2} alt='Little Lemon' width="150vw" />
            </Box>
            <section className='navList listing'>
                <label htmlFor='foot-nav' >
                    <Heading size="lg" fontFamily={`"Markazi Text", serif;`}>Navigation</Heading>
                </label>
                <ul id='foot-nav' name='foot-nav'>
                    {navbarLinks.map((navList) => (
                        <li><Link key={navList.text} to={navList.path}>{navList.text}</Link></li>
                    ))}
                </ul>
            </section>
            <section className='contactList listing'>
                <label htmlFor='foot-contact' >
                    <Heading size="lg" fontFamily={`"Markazi Text", serif;`}>Contacts</Heading>
                </label>
                <ul id='foot-contact' name='foot-contact'>
                    {contacts.map((navList) => (
                        <li><a key={navList.text} href={navList.path} target='_blank' rel='noreferrer'>{navList.text}</a></li>
                    ))}
                </ul>
            </section>
            <section className='socialList listing'>
                <label htmlFor='foot-social'>
                    <Heading size="lg" fontFamily={`"Markazi Text", serif;`} target='_blank' rel='noreferrer'>Social Media</Heading>
                </label>
                <ul id='foot-social' name='foot-social'>
                    {social.map((navList) => (
                        <li><a key={navList.text} href={navList.path}>{navList.text}</a></li>
                    ))}
                </ul>
            </section>
        </footer>
    );
};

export default Footer;