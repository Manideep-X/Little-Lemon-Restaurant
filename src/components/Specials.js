import MenuCard from "../components/MenuCard"
import { Button, Text, HStack, VStack } from "@chakra-ui/react";
import Bruchetta from '../icons_assets/bruchetta.svg'
import { Link } from "react-router-dom";

const menuData = [
    {
        image: () => require("../icons_assets/greek salad.jpg"),
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        price: "$ 12.99"
    },
    {
        image: () => { return Bruchetta; },
        title: "Bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        price: "$ 5.99"
    },
    {
        image: () => require("../icons_assets/lemon dessert.jpg"),
        title: "Lemon Desert",
        description: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. `,
        price: "$ 5.00"
    },
]

const Specials = () => {
    return (
        <section>
            <VStack spacing={8}>
                <HStack spacing="30vw">
                    <Text fontSize="2xl" fontWeight="600">Specials</Text>
                    <Link to='/menu'>
                        <Button style={{ backgroundColor: "#f4ce14" }} fontFamily={`"Karla", sans-serif;`}>Online Menu</Button>
                    </Link>
                </HStack>
                <HStack spacing={8}>
                    {menuData.map((data) => (
                        <MenuCard
                            key={data.title}
                            image={data.image()}
                            title={data.title}
                            price={data.price}
                            description={data.description}
                        />
                    ))}
                </HStack>
            </VStack>
        </section>
    );
};

export default Specials;