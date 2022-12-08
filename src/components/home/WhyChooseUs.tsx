import { Flex, Box, Text, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCommentDots,
  faHeadphonesAlt,
  faListCheck,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    id: "review",
    icon: (
      <span className="fa-stack fa-1x">
        <FontAwesomeIcon
          icon={faCircle}
          className="fa-stack-2x"
          style={{ color: "black" }}
        />
        <FontAwesomeIcon icon={faCommentDots} className="fa-stack-1x" />
      </span>
    ),
    title: "Reviews",
    text: "Only guests who actually complete their stay with Let'sh are given the option to leave a review.",
  },
  {
    id: "support",
    icon: (
      <span className="fa-stack fa-1x">
        <FontAwesomeIcon
          icon={faCircle}
          className="fa-stack-2x"
          style={{ color: "black" }}
        />
        <FontAwesomeIcon icon={faHeadphonesAlt} className="fa-stack-1x" />
      </span>
    ),
    title: "24/7 Support",
    text: "Let'sh's call centers are covered around the clock, even on bank holidays.",
  },
  {
    id: "rooms",
    icon: (
      <span className="fa-stack fa-1x">
        <FontAwesomeIcon
          icon={faCircle}
          className="fa-stack-2x"
          style={{ color: "black" }}
        />
        <FontAwesomeIcon icon={faListCheck} className="fa-stack-1x" />
      </span>
    ),
    title: "Rooms",
    text: "Having a clean, comfortable and friendly place, we personally handpick every accomodation.",
  },
  {
    id: "payments",
    icon: (
      <span className="fa-stack fa-1x">
        <FontAwesomeIcon
          icon={faCircle}
          className="fa-stack-2x"
          style={{ color: "black" }}
        />
        <FontAwesomeIcon icon={faCreditCard} className="fa-stack-1x" />
      </span>
    ),
    title: "Payment",
    text: "Pay using a Credit Card (Visa, Master card, Visa electron, Union pay, American express, Mobile Money Transfers.",
  },
];

export default function WhyChooseUsFlexItems() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection="column"
      mt={{ base: "2.5em", sm: "3em", md: "3em", lg: "3em" }}
    >
      {items.map(({ id, icon, title, text }) => {
        return (
          <Flex
            key={id}
            marginBottom={{ base: "1em" }}
            width="100%"
            maxWidth={{ base: "350px" }}
          >
            <Text
              borderRadius="60px"
              fontSize={{
                lg: "1.125rem",
              }}
            >
              {icon}
            </Text>
            <Box ml={{ base: "2em", sm: "2em" }}>
              <Text
                marginBottom="10px"
                fontWeight="bold"
                fontFamily="prompt"
                fontSize={{ base: "1rem", md: "1.3rem" }}
              >
                {title}
              </Text>
              <Text
                fontSize={{ base: ".8rem", md: "1rem" }}
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
