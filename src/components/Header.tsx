import { useRef } from "react";
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
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
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
        justify={{
          lg: "space-between",
          xl: "space-between",
          "2xl": "space-between",
        }}
      >
        <Text fontFamily="rubik" fontSize="2.5rem" color="orange.400">
          <Link to={Path.home}>Let'sh</Link>
        </Text>
        <Flex
          as="ul"
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "inherit",
            xl: "inherit",
            "2xl": "inherit",
          }}
          width="100%"
          maxW={{
            lg: "600px",
            xl: "700px",
            "2xl": "800px",
          }}
          ml={{ lg: "1.5em" }}
          fontFamily="prompt"
          fontWeight="700"
          align="center"
          gap={{
            lg: "1em",
            xl: "3em",
            "2xl": "5em",
          }}
        >
          <Box>
            <Link to="/">Room</Link>
          </Box>
          <Box>
            <Link to="/">House</Link>
          </Box>
          <Box>
            <Link to="/">Hotel Apartments</Link>
          </Box>
          <Box>
            <Link to="/">Transportation</Link>
          </Box>
          <Box>
            <Link to="/">Parking</Link>
          </Box>
        </Flex>
        <Flex
          fontFamily="ibmSans"
          fontSize="1.5rem"
          align="center"
          gap={{
            lg: ".5em",
            xl: "1em",
            "2xl": "1em",
          }}
        >
          <Tooltip label="Become a host" hasArrow arrowSize={10}>
            <Text marginBlockStart="0" marginBlockEnd="0">
              <Link to={Path.becomeHost}>
                <FaUserTie />
              </Link>
            </Text>
          </Tooltip>
          <Tooltip label="Find a roommate" hasArrow arrowSize={10}>
            <Text marginBlockStart="0" marginBlockEnd="0">
              <Link to="/">
                <IoIosPeople />
              </Link>
            </Text>
          </Tooltip>
          <IconButton
            onClick={toggleColorMode}
            aria-label="Color Mode Toggle Button"
            icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
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
