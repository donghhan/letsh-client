import { Box, Text } from "@chakra-ui/react";

interface ITitle {
  titlePrefix?: string;
  title: string;
  primary?: boolean;
}

export default function Title({ titlePrefix, title, primary }: ITitle) {
  return (
    <Box as="div" width="fit-content">
      <Box as="div" position="relative">
        <Text
          fontFamily="prompt"
          fontSize={{
            base: "2rem",
            sm: "2.5rem",
            md: "3rem",
            lg: "2.5rem",
            xl: "3rem",
            "2xl": "3rem",
          }}
          lineHeight="1em"
          fontWeight="bold"
        >
          {titlePrefix ? titlePrefix : null}
        </Text>
        <Text
          fontFamily="prompt"
          fontSize={{
            base: "5rem",
            sm: "6rem",
            md: "7rem",
            lg: "6rem",
            xl: "7rem",
            "2xl": "7rem",
          }}
          lineHeight="1em"
          fontWeight="bold"
        >
          {title}
        </Text>
        {primary ? (
          <Text
            width="100%"
            minWidth="500px"
            position="absolute"
            bottom={{
              base: "0",
              sm: "0",
              md: "-.5em",
              lg: "-0.125rem",
              xl: "-.5em",
              "2xl": "-.5em",
            }}
            left=".5em"
            fontFamily="charmonman"
            fontSize={{
              base: "1.25rem",
              sm: "1.5rem",
              md: "2.125rem",
              lg: "1.8rem",
              xl: "2.125rem",
              "2xl": "2.125rem",
            }}
            color="orange.400"
            fontWeight="semibold"
          >
            Find your living space
          </Text>
        ) : null}
      </Box>
    </Box>
  );
}
