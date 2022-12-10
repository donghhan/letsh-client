import { useRef, useCallback } from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Text,
  Tooltip,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  useMediaQuery,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { Path } from "../utils/path";

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Button>
        <GiHamburgerMenu />
      </Button>
    </>
  );
}

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  // i18n
  const { t, i18n } = useTranslation();
  const toggleLanguage = useCallback(
    (locale: string) => {
      i18n.changeLanguage(locale);
    },
    [i18n]
  );

  return (
    <Box
      as="header"
      overflowX="hidden"
      zIndex="1000"
      p={{
        lg: "0 1em",
        xl: "0 1.5em",
        "2xl": "0 2em",
      }}
      width="100%"
      position="fixed"
      bgColor={colorMode === "light" ? "white" : "gray.800"}
      borderBottom={
        colorMode === "light" ? "1px solid lightgray" : "1px solid #505050"
      }
    >
      <Flex
        as="nav"
        width="100%"
        maxW={{
          "2xl": "100%",
        }}
        height={{
          lg: "80px",
          xl: "80px",
          "2xl": "80px",
        }}
        direction={{
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
        align="center"
      >
        <Text fontFamily="rubik" fontSize="2.5rem" color="orange.400">
          <Link to={Path.home}>Let'sh</Link>
        </Text>
        <Flex
          as="ul"
          width="100%"
          display={{
            base: "none",
            lg: "inherit",
          }}
          maxW={{
            lg: "600px",
            xl: "700px",
            "2xl": "800px",
          }}
          ml={{ lg: "1.5em" }}
          fontFamily="prompt"
          fontWeight="700"
          gap={{
            lg: "1em",
            xl: "3em",
            "2xl": "5em",
          }}
        >
          <Box>
            <Link to={Path.rooms}>{t("ui:room")}</Link>
          </Box>
          <Box>
            <Link to="/">{t("ui:house")}</Link>
          </Box>
          <Box>
            <Link to="/">{t("ui:hotel")}</Link>
          </Box>
          <Box>
            <Link to="/">{t("ui:transportation")}</Link>
          </Box>
          <Box>
            <Link to="/">{t("ui:parking")}</Link>
          </Box>
        </Flex>
        <Flex
          fontFamily="ibmSans"
          fontSize={{
            lg: ".9rem",
          }}
          align="center"
          ml="auto"
          gap={{
            lg: ".5em",
            xl: "1em",
            "2xl": "1em",
          }}
        >
          <Text>
            <Link to="/">{t("ui:become_a_host")}</Link>
          </Text>
          <Text>
            <Link to="/">{t("ui:find_roommate")}</Link>
          </Text>
          <IconButton
            aria-label="English lang toggle button"
            onClick={() => toggleLanguage(i18n.language === "en" ? "th" : "en")}
            icon={i18n.language === "en" ? <Text>🇹🇭</Text> : <Text>🇺🇸</Text>}
            bgColor="transparent"
          />
          <IconButton
            onClick={toggleColorMode}
            aria-label="Color Mode Toggle Button"
            icon={
              colorMode === "light" ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )
            }
            bgColor="transparent"
          />
          <Button
            p="0 2em"
            bgColor={useColorModeValue("black", "white")}
            color={useColorModeValue("white", "black")}
            cursor="pointer"
            _hover={{ bgColor: "gray.500" }}
            _active={{ bgColor: "gray.600" }}
          >
            Sign in
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
