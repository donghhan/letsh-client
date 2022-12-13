import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Title from "../ui/Title";
import * as freelancer from "../../../assets/freelancer.svg";

export default function HowDoesItWorkSection() {
  const { t } = useTranslation();

  return (
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
        <Title title={t("home:how_does_it_work_title")} />
        <Text
          mt={{ base: "1.5em" }}
          lineHeight="1.5em"
          maxWidth={{ md: "400px" }}
          fontSize={{ lg: "1.125rem" }}
          textAlign={{ base: "center", lg: "left" }}
          fontFamily="ibmSans"
        >
          {t("home:how_does_it_work_text")}
        </Text>
      </Flex>
    </Flex>
  );
}
