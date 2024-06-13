import { HStack, Heading, Text, Button, VStack, Box } from "@chakra-ui/react";
import bruchetta from '../icons_assets/bruchetta.svg'

const CTAData = {
    title: "Little Lemon",
    place: "Chicago",
    description: "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    image: bruchetta
}

const CallToAction = () => {
    console.log('Rendering CallToAction');
    return (
        <section>
            <HStack spacing={8}>
                <VStack spacing={4} style={{ alignItems: "normal" }}>
                    <Heading as="h1" size="3xl" fontFamily={`"Karla", sans-serif;`} >{CTAData.title}</Heading>
                    <Heading as="h3" size="lg" fontFamily={`"Karla", sans-serif;`}>{CTAData.place}</Heading>
                    <Text as="p" fontSize="lg" fontFamily={`"Karla", sans-serif;`}>{CTAData.description}</Text>
                    <Box>
                        <Button style={{ backgroundColor: "#f4ce14" }} fontFamily={`"Karla", sans-serif;`}>Reserve a Table</Button>
                    </Box>
                </VStack>
                <img src={CTAData.image} alt="Dish" />
            </HStack>
        </section>
    );
};

export default CallToAction;