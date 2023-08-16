import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";

const HomePage = () => {
  const products = [
    {
      id : 1,
      heading: "The Complete Python Bootcamp From Zero to Hero...",
      auth: "Jose Portilla",
      image: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg",
      price: "$449",
    },
    {
      id : 2,
      heading: "Automate the Boring Stuff with Python Programming",
      auth: "Al Sweigart",
      image: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg",
      price: "$449",
    },
    {
      id : 3,
      heading: "Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",
      auth: "Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency Team",
      image: "	https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
      price: "$449",
    },
    {
      id : 4,
      heading: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      auth: "Dr. Angela Yu",
      image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
      price: "$449",
    },
    {
      id : 5,
      heading: "Python : Master Programming and Development with 15 Projects",
      auth: "Dev Nirwal",
      image: "https://img-c.udemycdn.com/course/240x135/2485240_d405_7.jpg",
      price: "$449",
    },
  ];

  return (
    <>
      <Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            height={"350px"}
            width={"1200px"}
            src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/71d4a892-4d0d-4467-8008-d96c0f0fe222.png"
          />
        </Box>

        <Box  m="auto" mt={7}>
        <SimpleGrid
              spacing={4}
              columns={{ sm: 2, md: 2, lg: 2, xl: 3, "2xl": 5 }}
              textAlign={"justify"}
            >
         
            {products.map((product, index) => (
              <Link key={index} to={`/product/${product?.id}`}>
                <Card >
                  <CardBody boxSize={"fit-content"}>
                    <Image
                      src={product.image}
                      alt={product.heading}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{product.heading}</Heading>
                      <Text>{product.auth}</Text>
                      <Text color="blue.600" fontSize={"16px"}>
                        4.0 <StarIcon fontSize={"14px"} color={"tomato"} />
                        <StarIcon fontSize={"13px"} color={"tomato"} />
                        <StarIcon fontSize={"13px"} color={"tomato"} />
                        <StarIcon fontSize={"13px"} color={"tomato"} />
                      </Text>
                      <Text>{product.price}</Text>
                    </Stack>
                  </CardBody>
                </Card>
              </Link>
              

            ))}
          
          <Routes>
        <Route path="/product/:productId" element={<ProductDetailPage products={products} />} />
      </Routes>
      </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
