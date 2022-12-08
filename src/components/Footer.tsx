import {
  Flex,
  Box,
  Text,
  Grid,
  GridItem,
  HStack,
  VStack,
  Button,
  Modal,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Path } from "../utils/path";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <Grid
      as="footer"
      width="100%"
      justifyContent="center"
      templateColumns={{ base: "1fr", md: "repeat(4, minmax(auto, 200px))" }}
      gap={{ md: "1em" }}
      p={{ base: "0 1.5em" }}
      mt={{ base: "1.5em" }}
    >
      <GridItem
        borderBottom={{
          base: "1px solid gray",
          md: "none",
        }}
        pb={{ base: "1em" }}
        lineHeight="2em"
      >
        <Text fontFamily="rubik" fontSize="2.5rem" color="orange.400">
          Let'sh
        </Text>
        <Text maxW={{ base: "300px" }} mt={{ base: "1em" }}>
          Find and Rent Out Room, Flat, Apartments, Parking Sapces &
          Transportations for Monthly Rent
        </Text>
      </GridItem>
      <GridItem
        borderBottom={{
          base: "1px solid gray",
          md: "none",
        }}
        p={{ base: "1em 0" }}
        lineHeight="2em"
      >
        <Text>
          <Link to="/">About Us</Link>
        </Text>
        <Text>
          <Link to="/">Reviews</Link>
        </Text>
        <Text>
          <Link to="/">Become a host</Link>
        </Text>
        <Text>
          <Link to="/">Find Roommate</Link>
        </Text>
      </GridItem>
      <GridItem
        borderBottom={{
          base: "1px solid gray",
          md: "none",
        }}
        p={{ base: "1em 0" }}
        lineHeight="2em"
      >
        <Text>
          <Link to="/">Rooms</Link>
        </Text>
        <Text>
          <Link to="/">Houses</Link>
        </Text>
        <Text>
          <Link to="/">Hotel</Link>
        </Text>
        <Text>
          <Link to="/">Parking</Link>
        </Text>
        <Text>
          <Link to="/">Transportation</Link>
        </Text>
      </GridItem>
      <GridItem p={{ base: "1em 0" }} lineHeight="2em">
        <Text>
          <Link to="/">info@letsh.com</Link>
        </Text>
        <Text>Privacy Policy</Text>
        <Text>Terms & Conditions</Text>
        <Flex
          fontSize={{ base: "2rem" }}
          mt={{ base: ".5em" }}
          gap={{ base: ".5em" }}
        >
          <Text>
            <Link to="/">
              <FaFacebookSquare />
            </Link>
          </Text>
          <Text>
            <Link to="/">
              <FaInstagramSquare />
            </Link>
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}
