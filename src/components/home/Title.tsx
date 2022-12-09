import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
interface ITitle {
  titlePrefix?: string | null;
  title: string;
  primary?: boolean;
}

export default function Title({ titlePrefix, title, primary }: ITitle) {
  const { t, i18n } = useTranslation();

  return (
    <Box as="div" width="100%">
      <Box
        as="div"
        position="relative"
        textAlign={{
          base: "center",
          lg: "left",
        }}
      >
        {primary ? (
          <>
            <Text
              as="span"
              fontFamily="prompt"
              lineHeight="1em"
              fontWeight="bold"
              fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
            >
              {titlePrefix ? titlePrefix : null}
            </Text>
            <Text
              as="h1"
              fontFamily="prompt"
              fontSize={{
                base: "4rem",
                sm: "4rem",
                md: "5rem",
                lg: "5.5rem",
                xl: "7rem",
                "2xl": "7rem",
              }}
              lineHeight="1em"
              fontWeight="bold"
            >
              {title}
            </Text>
            <Text
              as="span"
              whiteSpace="nowrap"
              position="absolute"
              bottom="-20px"
              left={{
                base: "50%",
                lg: "20%",
              }}
              transform={{
                base: "translateX(-50%)",
                sm: "translateX(-50%)",
                md: "translateX(-50%)",
                lg: "translateX(-30%)",
              }}
              fontFamily="charmonman"
              fontSize={{
                base: "1.2rem",
                sm: "1.2rem",
                md: "1.5rem",
                lg: "1.8rem",
                xl: "2.125rem",
                "2xl": "2.125rem",
              }}
              textAlign={{
                base: "initial",
              }}
              color="orange.400"
              fontWeight="semibold"
            >
              {t("home:title_decoration")}
            </Text>
          </>
        ) : (
          <Text
            as="h1"
            fontFamily="prompt"
            fontWeight="bold"
            lineHeight="1em"
            fontSize={{ base: "2rem", md: "3rem", lg: "3rem" }}
            textAlign={{ base: "center", lg: "left" }}
            maxW={{ lg: "300px" }}
            whiteSpace={{ base: "normal", lg: "nowrap" }}
          >
            {title}
          </Text>
        )}
      </Box>
    </Box>
  );
}
