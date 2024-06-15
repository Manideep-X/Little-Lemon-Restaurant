import { HStack, Heading, Text, Button, VStack, Box } from "@chakra-ui/react";
import bruchetta from '../icons_assets/bruchetta.svg'
import { Link } from "react-router-dom";
import '../stylesheets/CallToAction.css'

const CTAData = {
    title: "Little Lemon",
    place: "Chicago",
    description: "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    image: bruchetta
}

const CallToAction = () => {
    return (
        <section className="callToAction" style={{marginTop:"6.5rem"}}>
            <HStack className="call-HStack" spacing={8}>
                <VStack spacing={0} style={{ alignItems: "normal" }}>
                    <Heading as="h1" size="4xl" fontFamily={`font-family: "Markazi Text", serif;`}>{CTAData.title}</Heading>
                    <Heading as="h3" size="xl" fontFamily={`font-family: "Markazi Text", serif;`}>{CTAData.place}</Heading>
                    <Text as="p" fontSize="lg" fontFamily={`"Karla", sans-serif;`}>{CTAData.description}</Text>
                    <Box>
                        <Link to='/reservations'>
                            <Button className="call-box" style={{ backgroundColor: "#f4ce14", fontSize:"1.3vw",borderRadius: "20px",padding:"20px" }} fontFamily={`"Karla", sans-serif;`}>Reserve a Table</Button>
                        </Link>
                    </Box>
                </VStack>
                <img src={CTAData.image} alt="Dish" />
            </HStack>
        </section>
    );
};

export default CallToAction;