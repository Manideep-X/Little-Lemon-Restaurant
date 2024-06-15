import MenuCard from "../components/MenuCard"
import { Button, HStack, VStack, Heading, Box } from "@chakra-ui/react";
import Bruchetta from '../icons_assets/bruchetta.svg'
import { Link } from "react-router-dom";
import '../stylesheets/Special.css'

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
        description: "Bruschetta is an Italian antipasto but our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
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
        <section style={{marginTop:"13vh"}}>
            <VStack spacing={8}>
                <HStack spacing="28vw">
                    <Heading fontSize="4xl" fontWeight="600" fontFamily={`"Markazi Text", serif;`}>Specials</Heading>
                    <Link to='/menu'>
                        <Button className="menu-box" style={{ backgroundColor: "#f4ce14", borderRadius:"20px" }} fontFamily={`"Karla", sans-serif;`}>Online Menu</Button>
                    </Link>
                </HStack>
                <Box style={{display:"flex", flexWrap:"wrap", gap:"4vw", padding:"6vh 0vw", justifyContent:"center", alignItems:"center"}}>
                    {menuData.map((data) => (
                        <MenuCard
                            key={data.title}
                            image={data.image()}
                            title={data.title}
                            price={data.price}
                            description={data.description}
                        />
                    ))}
                </Box>
            </VStack>
        </section>
    );
};

export default Specials;