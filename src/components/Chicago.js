import { Heading, VStack, Text, HStack, Box } from "@chakra-ui/react";


const aboutData = {
    title: "Little Lemon",
    place: "Chicago",
    about: "Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials. It is also a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    image1: () => require("../icons_assets/Mario and Adrian A.jpg"),
    image2: () => require("../icons_assets/Mario and Adrian b.jpg")
}

const Chicago = () => {
    return (
        <article>
            <HStack>
                <VStack>
                    <Heading size="2xl" fontFamily={`"Karla", sans-serif;`}>{aboutData.title}</Heading>
                    <Heading size="xl" fontWeight="600" fontFamily={`"Karla", sans-serif;`}>{aboutData.place}</Heading>
                    <Text size="md" fontWeight="400" fontFamily={`"Karla", sans-serif;`}>{aboutData.about}</Text>
                </VStack>
                <Box className="Overlap">
                    <img id="img1" src={aboutData.image1()} alt="Mario and Adrian" width="50%" />
                    <img id="img2" src={aboutData.image2()} alt="Mario and Adrian" width="50%" />
                </Box>
            </HStack>
        </article>
    );
};

export default Chicago;