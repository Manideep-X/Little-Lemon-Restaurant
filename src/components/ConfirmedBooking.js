import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import check_circle from '../icons_assets/check_circle.svg'

const ConfirmedBooking = () => {
    return (
        <VStack spacing={8}>
            <Heading size="xl">We will be waiting !</Heading>
            <img src={check_circle} alt="Completed" width="40vw" />
            <Heading size="2xl">Booking Confirmed</Heading>
            <Text>We look forward to welcoming you and ensuring a delightful dining experience. If you have any special requests or need to make changes to your reservation, please do not hesitate to contact us at  <a href="mailto: littlelemon@restaurant.com">littlelemon@restaurant.com</a>.</Text>
            <Text>Thank you for choosing Little Lemon. We can't wait to serve you!</Text>
            <Text> Best regards, Chief </Text>
            <Button style={{ backgroundColor: "#f4ce14" }} >Head Back To Home</Button>
        </VStack>
    );
};

export default ConfirmedBooking;