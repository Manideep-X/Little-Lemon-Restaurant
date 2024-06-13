import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import delivery from '../icons_assets/delivery.svg'


const MenuCard = ({ image, title, price, description }) => {
    return (
        <VStack spacing={0}>
            <img src={image} alt={title} width="280rem" style={{height:"auto"}} />
            <VStack spacing={8}>
                <HStack spacing={12}>
                    <Heading size="lg" fontWeight="600" fontFamily={`"Karla", sans-serif;`}>{title}</Heading>
                    <Heading size="md" fontWeight="400" style={{ color: "#f4ce14" }} fontFamily={`"Karla", sans-serif;`}>{price}</Heading>
                </HStack>
                <Text fontSize="md" fontFamily={`"Karla", sans-serif;`}>{description}</Text>
                <HStack spacing={3}>
                    <Text fontWeight="600" fontFamily={`"Karla", sans-serif;`}>Order a delivery</Text>
                    <img src={delivery} alt="delivery" style={{margin:"0 auto"}}/>
                </HStack>
            </VStack>
        </VStack>
    );
};

export default MenuCard;