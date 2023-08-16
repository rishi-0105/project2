// ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
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
} from "@chakra-ui/react";

const ProductDetailPage = ({ products }) => {
  const { productId } = useParams();
  const parsedProductId = parseInt(productId);

  console.log("products", products);
  console.log("productId", productId);

  const product = products.find((p) => p.id === parsedProductId);

  console.log("product", product);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <Box >
      <HStack>
        <Card width={"100%"} bg={"#2d2f31"} color={"white"}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image            
             w={{ '2xl': "27%", sm: "200px" }}
            src={product.image}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="lg">{product.heading}</Heading>

              <Text size={"md"} py="2">{product.descn}</Text>

              <Stack mt="6" spacing="3">
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

            <CardFooter>
              <Button variant="solid" color={"white"} bg="#a435f0">
                Buy This Course
              </Button>
            </CardFooter>
          </Stack>
        </Card>

        {/* <Card maxW="lg">
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
            </Card> */}
      </HStack>
    </Box>
  );
};

export default ProductDetailPage;
