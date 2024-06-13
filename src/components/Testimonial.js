import { VStack, Box, Avatar, HStack, Heading, Text } from "@chakra-ui/react";
import star from '../icons_assets/star.svg'


const Testimonial = ({ photo, name, review }) => {
    return (
        <Box>
            <VStack spacing={4}>
                <HStack spacing={1}>
                    {[...Array(5)].map((_, index) => (
                        <img key={index} src={star} alt="star" width={25} style={{ filter: "invert(90%) sepia() saturate(10000%) hue-rotate(0deg)" }} />
                    ))}
                </HStack>
                <HStack>
                    <Avatar size="xl" name={name} src={photo} />
                    <Heading size="md" fontFamily={`"Karla", sans-serif;`}>{name}</Heading>
                </HStack>
                <Text fontSize="sm" color="rgba(0,0,0,0.6)" fontFamily={`"Karla", sans-serif;`}>"{review}..."</Text>
            </VStack>
        </Box>
    );
}

export default Testimonial;