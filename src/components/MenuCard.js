import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import delivery from '../icons_assets/delivery.svg'
import '../stylesheets/MenuCard.css'


const MenuCard = ({ image, title, price, description }) => {
    return (
        <VStack className="menu-VStack" spacing={3}>
            <img src={image} alt={title}/>
            <VStack spacing={8}>
                <HStack spacing={12}>
                    <Heading size="lg" fontWeight="600" fontFamily={`"Markazi Text", serif;`}>{title}</Heading>
                    <Heading size="md" fontWeight="600" style={{ color: "#f4ce14" }} fontFamily={`"Karla", sans-serif;`}>{price}</Heading>
                </HStack>
                <Text as="span" fontSize="md" fontFamily={`"Karla", sans-serif;`}>{description}</Text>
                <Box style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                    <Text as="p" fontSize="sm" fontWeight="600" fontFamily={`"Karla", sans-serif;`} style={{width:"250px", textAlign:"right"}}>Order a delivery</Text>
                    <img src={delivery} alt="delivery" style={{height:"20px"}}  />
                </Box>
            </VStack>
        </VStack>
    );
};

export default MenuCard;