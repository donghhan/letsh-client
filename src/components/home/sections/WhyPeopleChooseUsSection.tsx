import { Flex, Image, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Title from "../ui/Title";
import WhyChooseUsFlexItems from "../ui/WhyChooseUs";
import * as woman from "../../../assets/woman.svg";

export default function WhyPeopleChooseUsSection() {
  const { t } = useTranslation();

  return (
    <Flex
      as="section"
      width="100%"
      align="center"
      justify={{
        base: "center",
        lg: "space-between",
        xl: "space-around",
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
          }}
        />
      </Box>
      <Box>
        <Title
          titlePrefix={t("home:why_people_choose_us_titleprefix")}
          title={t("home:why_people_choose_us_title")}
          primary
        />
        <WhyChooseUsFlexItems />
      </Box>
    </Flex>
  );
}
