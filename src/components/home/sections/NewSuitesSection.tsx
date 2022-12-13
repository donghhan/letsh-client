import { Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Title from "../ui/Title";
import NewSuiteGrid from "../ui/NewSuiteGrid";

export default function NewSuitesForYouSection() {
  const { t } = useTranslation();

  return (
    <Flex
      as="section"
      width="100vw"
      direction="column"
      mb={{ base: "7em" }}
      align={{ base: "center", lg: "flex-start" }}
      p={{ base: "0 1.5em", lg: "0 4em", xl: "0 6em", "2xl": "0 10em" }}
    >
      <Title title={t("home:new_suites_for_you_title")} />
      <Text
        maxW={{ sm: "400px" }}
        fontFamily="ibmSans"
        mt={{ base: "1.5em" }}
        mb={{ base: "1em" }}
        textAlign={{ base: "center", lg: "left" }}
        fontSize={{ lg: "1.125rem", xl: "1.25rem" }}
      >
        {t("home:new_suites_for_you_text")}
      </Text>
      <NewSuiteGrid />
    </Flex>
  );
}
