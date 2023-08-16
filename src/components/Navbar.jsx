import { CloseIcon, HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import {
  HStack,
  Box,
  Image,
  FormControl,
  Input,
  Button,
  IconButton,
  useDisclosure,
  VStack,
  Collapse,
  Flex,
  Text,
  Spacer,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Box
          p={{ base: "12px", sm: "24px" }}
          width={{ base: "100%", md: "90%", xl: "100%" }}
          m="auto"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", md: "90%", xl: "0%", "2xl": "0%" }}
            display={{
              base: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              "2xl": "none",
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* <Flex alignItems="center"> */}
            <Box>
              <IconButton
                icon={
                  isOpen ? (
                    <CloseIcon color="black" w={4} h={4} />
                  ) : (
                    <>
                      <HamburgerIcon
                        onClick={onOpen}
                        color="black"
                        w={5}
                        h={5}
                      />
                    </>
                  )
                }
                variant="ghost"
              />
            </Box>
            {/* <Spacer /> */}

            <Image
              boxSize={{
                base: "20%",
                sm: "20%",
                md: "100%",
                xl: "50%",
                "2xl": "50%",
              }}
              src={
                "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              }
            />

            {/* </Flex> */}
          </Box>
          <Box display={{ base: "none", sm: "none", md: "inherit" }} w={"100%"}>
            <DesktopNavbarLinks />
          </Box>
        </Box>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px" color={"purple"}>Login</DrawerHeader>
            <DrawerHeader borderBottomWidth="1px" color={"purple"}>Sign Up</DrawerHeader>
            <DrawerBody fontSize={"16px"}>
              <Text>Categories</Text>
              <Text>Udemy Buisness</Text>
              <Text>Tech on Udemy</Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

const DesktopNavbarLinks = () => {
  return (
    <>
      <HStack
        spacing="30px"
        padding={"10px"}
        boxShadow="xs"
        height={"90px"}
        w={"100%"}
      >
        <Box>
          <Image
            boxSize={{
              base: "100%",
              sm: "70%",
              md: "100%",
              xl: "50%",
              "2xl": "50%",
            }}
            src={"https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"}
          />
        </Box>
        <Box>
          <label>Categories</label>
        </Box>
        <Box w={"50%"}>
          <HStack>
            <Input
              type="text"
              placeholder="search..."
              w={"100%"}
              border={"1px solid"}
            />
            <Search2Icon />
          </HStack>
        </Box>
        <Box>
          <label>Udemy Buisness</label>
        </Box>
        <Box>
          <label>Tech on Udemy</label>
        </Box>
        <Box>
          <Button colorScheme="black" variant="outline">
            Log In
          </Button>
        </Box>
        <Box>
          <Button colorScheme="teal" variant="solid">
            Sign Up
          </Button>
        </Box>
      </HStack>
    </>
  );
};

const MobileNavbar = () => {
  return (
    <>
      <Box
        color="white"
        fontSize={{ base: "14px", sm: "16px" }}
        w="100%"
        bg={"grey"}
        p={"10px"}
      ></Box>
    </>
  );
};

export default Navbar;
