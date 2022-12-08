import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import Title from "../components/home/Title";
import * as rest from "../assets/rest.jpg";
import * as woman from "../assets/woman.svg";
import * as freelancer from "../assets/freelancer.svg";
import WhyChooseUsFlexItems from "../components/home/WhyChooseUs";
import NewSuiteGrid from "../components/home/NewSuiteGrid";
import HeroImageGrid from "../components/home/HeroImageGrid";

export default function HomePage() {
  return (
    <Box as="main">
      {/* Hero Section */}
      <Flex
        as="section"
        width="100%"
        minH="100vh"
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justify="space-between"
        align="center"
        px={{
          base: "2em",
          lg: "4em",
          xl: "6em",
          "2xl": "10em",
        }}
        m={{
          base: "5em 0",
          md: "9em 0",
          lg: "0",
        }}
        position="relative"
      >
        <Flex
          direction="column"
          textAlign={{ base: "center" }}
          align={{ base: "center", lg: "flex-start" }}
        >
          <Title titlePrefix="Start Living" title="Move On" primary />
          <Text
            maxW={{ sm: "300px", md: "380px", xl: "400px", "2xl": "400px" }}
            mt={{ base: "2.5em" }}
            textAlign={{ lg: "left" }}
            fontSize={{ md: "1.125rem", xl: "1.25rem", "2xl": "1.25rem" }}
          >
            Find and Rent Out Room, Flat, Aprtments, Transportations & Parking
            Spaces
          </Text>
          <Button
            width="180px"
            height="50px"
            marginTop="8"
            color="white"
            bgColor="orange.500"
            _hover={{ bg: "orange.400" }}
            _active={{ bg: "orange.700" }}
            boxShadow="0px 8px 15px rgba(0, 0, 0, .3)"
          >
            Book now
          </Button>
        </Flex>
        <HeroImageGrid />
      </Flex>
      {/* New Suites For You Section */}
      <Flex
        as="section"
        width="100vw"
        direction="column"
        mb={{ base: "7em" }}
        align={{ base: "center", lg: "flex-start" }}
        p={{ base: "0 1.5em", lg: "0 4em", xl: "0 6em", "2xl": "0 10em" }}
      >
        <Title title="New suites for you" />
        <Text
          maxW={{ sm: "400px" }}
          fontFamily="ibmSans"
          mt={{ base: "1.5em" }}
          mb={{ base: "1em" }}
          textAlign={{ base: "center", lg: "left" }}
          fontSize={{ lg: "1.125rem", xl: "1.25rem" }}
        >
          Introducting an entirely new way to stay in your favourite
          neighborhoods in Thailand
        </Text>
        <NewSuiteGrid />
      </Flex>
      {/* How Does It Work Section */}
      <Flex
        as="section"
        width="100vw"
        bgColor="orange.400"
        borderBottomLeftRadius="50px"
        borderTopRightRadius="50px"
        p={{
          base: "2em",
          lg: "5em",
        }}
        height={{ base: "fit-content" }}
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          base: "center",
        }}
        justify={{
          lg: "space-around",
        }}
        gap={{
          md: "30px",
        }}
      >
        <Box>
          <Image
            src={freelancer.default}
            alt="freelancer"
            width={{
              base: "100%",
              md: "500px",
            }}
          />
        </Box>
        <Flex display="column" align="center" mt={{ base: "1.5em" }}>
          <Title title="How does it works" />
          <Text
            mt={{ base: "1.5em" }}
            lineHeight="1.5em"
            maxWidth={{ md: "400px" }}
            fontSize={{ lg: "1.125rem" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            Rent is a fee you pay in exchange for the use of someone's property.
            Apartment rent gives you the right to occupy a residential apartment
            and the terms of your occupancy are described in the lease. Someof
            the things lease covers are the amount of rent, when it's due and
            fees or penalties for late payment as well as tenant restrictions.
          </Text>
        </Flex>
      </Flex>
      {/* Become Host Section */}
      <Flex
        as="section"
        width="100vw"
        height={{
          sm: "fit-content",
          md: "fit-content",
          lg: "100vh",
          xl: "100vh",
          "2xl": "100vh",
        }}
        direction={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        justify={{
          sm: "center",
          md: "center",
          lg: "space-between",
          xl: "space-between",
          "2xl": "space-between",
        }}
        align={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
          xl: "center",
          "2xl": "center",
        }}
        p={{
          base: "0 1em",
          sm: "0 1em",
          lg: "0 3em",
          xl: "0 4.5em",
          "2xl": "0 10em",
        }}
        m={{
          base: "5em 0",
          lg: "0",
        }}
      >
        <Flex as="div" direction="column" align={{ base: "center" }}>
          <Title titlePrefix="Become" title="Host" primary />
          <Text
            mt="2.5em"
            maxWidth="300px"
            lineHeight="2em"
            fontSize={{
              base: ".9rem",
              md: "1rem",
              lg: "1.125rem",
              xl: "1.125rem",
              "2xl": "1.125rem",
            }}
            fontFamily="ibmSans"
            mb="2em"
            textAlign={{
              base: "center",
              lg: "left",
              xl: "left",
            }}
          >
            Meet people from all over the world, explore more of your own city
            and get paid for it
          </Text>
          <Button
            as="a"
            bgColor="orange.400"
            width={{
              base: "50%",
            }}
            height={{
              base: "2.5rem",
            }}
            fontWeight="bold"
            fontSize={{
              base: "1rem",
            }}
            _hover={{
              bgColor: "orange.300",
            }}
            _active={{
              bgColor: "orange.500",
            }}
          >
            Register now
          </Button>
        </Flex>
        <Flex justify="center">
          <Image
            src={rest.default}
            alt="resting woman"
            mt={{
              base: "3em",
              sm: "3em",
              md: "3em",
              lg: "null",
              xl: "null",
              "2xl": "null",
            }}
            width={{
              base: "70vw",
            }}
            maxWidth={{
              md: "600px",
              lg: "600px",
              xl: "800px",
              "2xl": "800px",
            }}
            borderTopLeftRadius={{
              base: "80px",
            }}
          />
        </Flex>
      </Flex>
      {/* Why people choose us Section */}
      <Flex
        as="section"
        width="100%"
        align="center"
        justify={{
          base: "center",
          lg: "space-between",
          xl: "space-around",
        }}
        p={{
          lg: "0 3em",
        }}
      >
        <Box
          width={{
            lg: "350px",
            xl: "400px",
          }}
          height={{
            lg: "550px",
            xl: "600px",
          }}
          bgColor="orange.400"
          borderTopLeftRadius="70px"
          borderBottomRightRadius="70px"
          position="relative"
        >
          <Image
            src={woman.default}
            alt="woman"
            position="absolute"
            right={{
              lg: "-20%",
            }}
            top={{
              lg: "10%",
              xl: "20%",
            }}
            transform={{
              lg: "scale(1.5)",
              xl: "scale(1.5)",
            }}
          />
        </Box>
        <Box>
          <Title titlePrefix="Why people" title="Choose us" primary />
          <WhyChooseUsFlexItems />
        </Box>
      </Flex>
    </Box>
  );
}
