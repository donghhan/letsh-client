import { useRef, useCallback } from "react";
import {
  Box,
  Flex,
  Button,
  IconButton,
  Text,
  Divider,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  useMediaQuery,
  useColorMode,
  useColorModeValue,
  DrawerContent,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { Path } from "../../utils/path";

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
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
    <>
      <IconButton aria-label="hamburger-menu" ref={btnRef} onClick={onOpen}>
        <FontAwesomeIcon icon={faBars} />
      </IconButton>
      <Drawer onClose={onClose} isOpen={isOpen} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Bookings</DrawerHeader>
          <DrawerBody>
            <Flex
              direction="column"
              gap="1.5em"
              mb="1em"
              fontFamily="prompt"
              fontWeight="bold"
            >
              <Link to={Path.rooms}>
                <Text>{t("ui:room")}</Text>
              </Link>
              <Link to={Path.rooms}>
                <Text>{t("ui:house")}</Text>
              </Link>
              <Link to={Path.rooms}>
                <Text>{t("ui:hotel")}</Text>
              </Link>
              <Link to={Path.rooms}>
                <Text>{t("ui:transportation")}</Text>
              </Link>
              <Link to={Path.rooms}>
                <Text>{t("ui:parking")}</Text>
              </Link>
            </Flex>
            <Divider borderColor="gray.400" />
            <Flex
              m="1em 0"
              direction="column"
              gap="1em"
              justify="space-between"
              fontFamily="ibmSans"
            >
              <Link to="/">
                <Text>Become a host</Text>
              </Link>
              <Link to="/">
                <Text>Find roomate</Text>
              </Link>
            </Flex>
            <Divider borderColor="gray.400" />

            <Flex direction="column" mt="1.5em">
              <Button
                mb="1.25em"
                bgColor={useColorModeValue("black", "white")}
                color={useColorModeValue("white", "black")}
                cursor="pointer"
                _hover={{ bgColor: "gray.500" }}
                _active={{ bgColor: "gray.600" }}
              >
                Sign in
              </Button>
              <Flex justify="space-around">
                <IconButton
                  aria-label="Language Toggle Button"
                  onClick={() =>
                    toggleLanguage(i18n.language === "en" ? "th" : "en")
                  }
                  icon={
                    i18n.language === "en" ? <Text>🇹🇭</Text> : <Text>🇺🇸</Text>
                  }
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
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan80em] = useMediaQuery("(min-width: 80em)");

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
      {isLargerThan80em ? (
        <Flex
          as="nav"
          width="100%"
          height={{
            lg: "80px",
          }}
          direction={{
            lg: "row",
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
              xl: "2em",
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
              xl: "1em",
            }}
          >
            <Text fontSize={{ lg: ".9rem" }} whiteSpace="nowrap">
              <Link to="/">{t("ui:become_a_host")}</Link>
            </Text>
            <Text fontSize={{ lg: ".9rem" }} whiteSpace="nowrap">
              <Link to="/">{t("ui:find_roommate")}</Link>
            </Text>
            <IconButton
              aria-label="English lang toggle button"
              onClick={() =>
                toggleLanguage(i18n.language === "en" ? "th" : "en")
              }
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
              ml={{ lg: "1em" }}
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
      ) : (
        <Flex
          as="nav"
          width="100%"
          height="60px"
          align="center"
          p={{ base: "0 3em" }}
          justify="space-between"
        >
          <Link to={Path.home}>
            <Text fontFamily="rubik" fontSize="2.5rem" color="orange.400">
              Let'sh
            </Text>
          </Link>
          <DrawerMenu />
        </Flex>
      )}
    </Box>
  );
}
