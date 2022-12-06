import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import Title from "../components/home/Title";
import * as rest from "../assets/rest.jpg";
import * as woman from "../assets/woman.svg";
import WhyChooseUsFlexItems from "../components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
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
        }}
      >
        <Flex as="div" direction="column" align={{ base: "center" }}>
          <Title
            titlePrefix="Become"
            title="Host"
            primary
            titleSection="hero"
          />
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
            fontFamily="prompt"
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
              base: ".8rem",
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
        mt={{
          xl: "3em",
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
          <Title
            titlePrefix="Why people"
            title="Choose us"
            primary
            titleSection="why"
          />
          <WhyChooseUsFlexItems />
        </Box>
      </Flex>
    </>
  );
}
