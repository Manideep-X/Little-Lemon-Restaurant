import Chicago from "./Chicago";
import CustomersSay from './CustomersSay';
import Specials from './Specials';
import CallToAction from "./CallToAction";
import { VStack } from "@chakra-ui/react";

const Homepage = () => {
    return (
        <VStack spacing={8}>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </VStack>
    );
};

export default Homepage;