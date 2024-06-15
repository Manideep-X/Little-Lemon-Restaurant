import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import check_circle from '../icons_assets/check_circle.svg'
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
    return (
        <Box style={{ margin: "3vh 0vw" }}>
            <VStack spacing={8} style={{ width: "70vw", margin: "5vh auto" }}>
                <Heading size="xl">We will be waiting !</Heading>
                <img src={check_circle} alt="Completed" width="200vw" />
                <Heading size="2xl" color="#495e57">Booking Confirmed</Heading>
                <Text fontSize="lg" style={{ textAlign: "center" }}>We look forward to welcoming you and ensuring a delightful dining experience. If you have any special requests or need to make changes to your reservation, please do not hesitate to contact us at  <a href="mailto: littlelemon@restaurant.com" style={{ fontWeight: "600" }}>littlelemon@restaurant.com</a>.</Text>
                <Text fontSize="xl">Thank you for choosing Little Lemon. We can't wait to serve you! Best regards, Chief</Text>
            </VStack>
            <Link to='/'>
                <Button style={{ backgroundColor: "#f4ce14", display: "block", margin: "0 auto" }} >Head Back To Home</Button>
            </Link>
        </Box>
    );
};

export default ConfirmedBooking;