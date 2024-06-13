import { HStack, Heading, VStack } from "@chakra-ui/react"
import Testimonial from "./Testimonial";

const reviewData = [
    {
        photo: "https://i.pravatar.cc/150?img=8",
        name: "Harry Walton",
        review: "Little Lemon is a delightful find! This family-run restaurant offers a warm atmosphere perfect for a night out with the whole crew"
    },
    {
        photo: "https://i.pravatar.cc/150?img=5",
        name: "Glenda Bradley",
        review: "The family recipes, passed down through generations, shine through with every bite. The modern touch adds a surprising layer of interest"
    },
    {
        photo: "https://i.pravatar.cc/150?img=59",
        name: "Dean Coyle",
        review: "Craving fresh, flavorful food with a modern touch? Little Lemon is your answer! This family-owned gem focuses on classic Mediterranean recipes with creative twist"
    },
    {
        photo: "https://i.pravatar.cc/150?img=26",
        name: "Ramona Cary",
        review: "Little Lemon's charm lies in its combination of warm family hospitality and exquisite Mediterranean cuisine. The dishes are rooted in traditions"
    }
]

const CustomersSay = () => {
    return (
        <VStack spacing={12}>
            <Heading as="h1" size="xl" fontFamily={`"Karla", sans-serif;`}>Testimonials</Heading>
            <HStack spacing={8}>
                {reviewData.map((data) => (
                    <Testimonial
                        key={data.name}
                        photo={data.photo}
                        name={data.name}
                        review={data.review}
                    />
                ))}
            </HStack>
        </VStack>
    );
};

export default CustomersSay;