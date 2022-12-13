import { Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Path } from "../../utils/path";
import Title from "../../components/home/Title";
import StyledButton from "../../components/ui/Button";
import HeroImageGrid from "../../components/home/HeroImageGrid";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <Flex
      as="section"
      width="100vw"
      minHeight="100vh"
      direction={{ base: "column", lg: "row" }}
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
        <Title
          titlePrefix={t("home:hero_title_prefix")}
          title={t("home:hero_title")}
          primary
        />
        <Text
          maxW={{ sm: "300px", md: "380px", xl: "400px", "2xl": "400px" }}
          mt={{ base: "2.5em" }}
          textAlign={{ lg: "left" }}
          fontSize={{ md: "1.125rem", xl: "1.25rem", "2xl": "1.25rem" }}
          fontFamily="ibmSans"
        >
          {t("home:hero_text")}
        </Text>
        <StyledButton marginTop="2.5em">
          <Link to={Path.rooms}>{t("home:book_now")}</Link>
        </StyledButton>
      </Flex>
      <HeroImageGrid />
    </Flex>
  );
}
