import { Flex, Text, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Title from "../ui/Title";
import StyledButton from "../../common/Button";
import * as rest from "../../../assets/rest.jpg";

export default function BecomeHostSection() {
  const { t } = useTranslation();

  return (
    <Flex
      as="section"
      width="100vw"
      height={{
        sm: "fit-content",
        lg: "100vh",
      }}
      direction={{
        base: "column",
        lg: "row",
      }}
      justify={{
        base: "center",
        lg: "space-between",
      }}
      align="center"
      p={{
        base: "0 1em",
        lg: "0 3em",
        xl: "0 4.5em",
        "2xl": "0 10em",
      }}
      m={{
        base: "5em 0",
        lg: "0",
      }}
    >
      <Flex
        as="div"
        direction="column"
        align={{ base: "center", lg: "flex-start" }}
      >
        <Title
          titlePrefix={t("home:become_host_titleprefix")}
          title={t("home:become_host_title")}
          primary
        />
        <Text
          mt="2.5em"
          maxWidth="300px"
          lineHeight="2em"
          fontSize={{
            base: ".9rem",
            md: "1rem",
            lg: "1.125rem",
          }}
          fontFamily="ibmSans"
          mb="2em"
          textAlign={{
            base: "center",
            lg: "left",
          }}
        >
          {t("home:become_host_text")}
        </Text>
        <StyledButton>{t("home:register_now")}</StyledButton>
      </Flex>
      <Flex justify="center">
        <Image
          src={rest.default}
          alt="resting woman"
          mt={{
            base: "3em",
            lg: "null",
          }}
          width={{
            base: "70vw",
          }}
          maxWidth={{
            md: "600px",
            xl: "800px",
            "2xl": "800px",
          }}
          borderTopLeftRadius={{
            base: "80px",
          }}
        />
      </Flex>
    </Flex>
  );
}
