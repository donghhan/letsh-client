import { Flex, Box, Text, useColorMode, IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { GiTalk } from "react-icons/gi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";
import { MdPayments } from "react-icons/md";

const items = [
  {
    id: "review",
    icon: <FaHeadphonesAlt />,
    title: "Reviews",
    text: "Only guests who actually complete their stay with Let'sh are given the option to leave a review.",
  },
  {
    id: "support",
    icon: <GiTalk />,
    title: "24/7 Support",
    text: "Let'sh's call centers are covered around the clock, even on bank holidays.",
  },
  {
    id: "rooms",
    icon: <BsListCheck />,
    title: "Rooms",
    text: "Having a clean, comfortable and friendly place, we personally handpick every accomodation.",
  },
  {
    id: "payments",
    icon: <MdPayments />,
    title: "Payment",
    text: "Pay using a Credit Card (Visa, Master card, Visa electron, Union pay, American express, Mobile Money Transfers.",
  },
];

export default function WhyChooseUsFlexItems() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection="column"
      mt={{ base: "1em", sm: "1em", md: "3em", lg: "1em" }}
    >
      {items.map(({ id, icon, title, text }) => {
        return (
          <Flex
            key={id}
            marginBottom={{ base: "1em" }}
            width="100%"
            maxWidth={{ base: "350px" }}
          >
            <Flex
              bgColor="black"
              width={{ base: "40px", md: "100px" }}
              height={{ base: "40px" }}
              justify="center"
              align="center"
              borderRadius="50%"
            >
              {icon}
            </Flex>
            <Box ml={{ base: "1em", sm: "2em" }}>
              <Text
                marginBottom="10px"
                fontWeight="bold"
                fontSize={{ base: "1rem", md: "1.5rem" }}
              >
                {title}
              </Text>
              <Text
                fontSize={{ base: ".8rem", md: "1.125rem" }}
                maxW={{ base: "200px", md: "800px" }}
              >
                {text}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
}
