import { Heading, Text, Box } from "@chakra-ui/react";
import '../stylesheets/Chicago.css'

const aboutData = {
    title: "Little Lemon",
    place: "Chicago",
    about: "Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials. ",
    about2: "It is also a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
    image1: () => require("../icons_assets/Mario and Adrian A.jpg"),
    image2: () => require("../icons_assets/Mario and Adrian b.jpg")
}

const Chicago = () => {
    return (
        <article className="about-article">
            <Box className="box-container" style={{display:"flex", flexWrap:"wrap"}}>
                <Box className="first-half">
                    <Heading as="h1" size="3xl" fontFamily={`"Markazi Text", serif;`}>{aboutData.title}</Heading>
                    <Heading as="h2" size="xl" fontWeight="600" fontFamily={`"Markazi Text", serif;`}>{aboutData.place}</Heading>
                    <Box>
                    <Text as="p" size="md" fontWeight="400" fontFamily={`"Karla", sans-serif;`}>{aboutData.about}</Text>
                    <Text as="p" size="md" fontWeight="400" fontFamily={`"Karla", sans-serif;`}>{aboutData.about2}</Text>
                    </Box>
                </Box>
                <Box className="overlap">
                    <img id="img1" src={aboutData.image1()} alt="Mario and Adrian" width="50%" />
                    <img id="img2" src={aboutData.image2()} alt="Mario and Adrian" width="50%" />
                </Box>
            </Box>
        </article>
    );
};

export default Chicago;