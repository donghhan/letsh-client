import { Flex, Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Path } from "../../utils/path";
import { useTranslation } from "react-i18next";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import styled from "styled-components";

const FooterSection = styled.footer`
  width: 100%;
  display: grid;
  justify-content: center;
  margin-top: 2em;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(auto, 200px));
    gap: 1em;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const FooterGridItem = styled.ul`
  border-bottom: none;

  @media screen and (max-width: 768px) {
    border-bottom: 1px solid gray;
  }
`;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <FooterSection>
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
        <Text
          maxW={{ base: "300px" }}
          mt={{ base: "1em" }}
          fontFamily="ibmSans"
        >
          {t("ui:footer_text")}
        </Text>
      </GridItem>
      <GridItem
        borderBottom={{
          base: "1px solid gray",
          md: "none",
        }}
        p={{ base: "1em 0" }}
        lineHeight="2em"
        fontFamily="ibmSans"
      >
        <Text>
          <Link to="/">{t("ui:about_us")}</Link>
        </Text>
        <Text>
          <Link to="/">{t("ui:reviews")}</Link>
        </Text>
        <Text>
          <Link to="/">{t("ui:become_a_host")}</Link>
        </Text>
        <Text>
          <Link to="/">{t("ui:find_roommate")}</Link>
        </Text>
      </GridItem>
      <GridItem
        borderBottom={{
          base: "1px solid gray",
          md: "none",
        }}
        p={{ base: "1em 0" }}
        lineHeight="2em"
        fontFamily="ibmSans"
      >
        <Text>
          <Link to="/">{t("ui:room")}</Link>
        </Text>
        <Text>
          <Link to="/">{t("ui:house")}</Link>
        </Text>
        <Text>
          <Link to="/">{t("ui:hotel")}</Link>
        </Text>
        <Text>
          <Link to="/">{t("ui:parking")}</Link>
        </Text>
        <Text>
          <Link to="/">{t("ui:transportation")}</Link>
        </Text>
      </GridItem>
      <GridItem p={{ base: "1em 0" }} lineHeight="2em" fontFamily="ibmSans">
        <Text>
          <Link to="/">info@letsh.com</Link>
        </Text>
        <Text>{t("ui:privacy_policy")}</Text>
        <Text>{t("ui:terms_and_conditions")}</Text>
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
    </FooterSection>
  );
}
