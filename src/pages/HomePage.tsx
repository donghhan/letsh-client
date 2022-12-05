import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import Title from "../components/home/Title";
import * as rest from "../assets/rest.jpg";

export default function HomePage() {
  return (
    // Become Host Section
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
        lg: "0 3em",
        xl: "0 4.5em",
        "2xl": "0 10em",
      }}
    >
      <Flex as="div" direction="column">
        <Title titlePrefix="Become" title="Host" primary />
        <Text
          mt="2.5em"
          maxWidth="300px"
          lineHeight="2em"
          fontSize={{
            lg: "1rem",
            xl: "1.125rem",
            "2xl": "1.125rem",
          }}
          fontFamily="prompt"
          mb="2em"
        >
          Meet people from all over the world, explore more of your own city and
          get paid for it
        </Text>
        <Button
          as="a"
          bgColor="orange.400"
          width="60%"
          height="3.5rem"
          fontWeight="bold"
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
          maxWidth={{
            base: "400px",
            sm: "80%",
            md: "600px",
            lg: "600px",
            xl: "800px",
            "2xl": "800px",
          }}
          borderTopLeftRadius="200px"
        />
      </Flex>
    </Flex>
  );
}
