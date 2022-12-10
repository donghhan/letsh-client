import { Flex, Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCommentDots,
  faHeadphonesAlt,
  faListCheck,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUsFlexItems() {
  const { t } = useTranslation();

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
          <FontAwesomeIcon
            icon={faCommentDots}
            className="fa-stack-1x"
            style={{ color: "white" }}
          />
        </span>
      ),
      title: t("home:reviews"),
      text: t("home:reviews_text"),
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
          <FontAwesomeIcon
            icon={faHeadphonesAlt}
            className="fa-stack-1x"
            style={{ color: "white" }}
          />
        </span>
      ),
      title: t("home:support"),
      text: t("home:support_text"),
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
          <FontAwesomeIcon
            icon={faListCheck}
            className="fa-stack-1x"
            style={{ color: "white" }}
          />
        </span>
      ),
      title: t("home:rooms"),
      text: t("home:rooms_text"),
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
          <FontAwesomeIcon
            icon={faCreditCard}
            className="fa-stack-1x"
            style={{ color: "white" }}
          />
        </span>
      ),
      title: t("home:payment"),
      text: t("home:payment_text"),
    },
  ];

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
                fontFamily="ibmSans"
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
