import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { Path } from "../utils/path";

export default function Header() {
  return (
    <Box
      as="header"
      zIndex="1000"
      p={{
        xl: "0 2em",
        "2xl": "0 2em",
      }}
    >
      <Flex
        as="nav"
        width="100%"
        maxW={{
          "2xl": "100%",
        }}
        height={{
          xl: "80px",
          "2xl": "80px",
        }}
        direction={{
          xl: "row",
          "2xl": "row",
        }}
        align="center"
        justify={{
          xl: "space-between",
          "2xl": "space-between",
        }}
      >
        <Text fontFamily="rubik" fontSize="2.5rem" color="orange.400">
          <Link to={Path.home}>Let'sh</Link>
        </Text>
        <Flex
          as="ul"
          width={{
            xl: "100%",
          }}
          maxW={{
            xl: "700px",
            "2xl": "100%",
          }}
          fontFamily="prompt"
          fontWeight="700"
          align="center"
          gap={{
            xl: "3em",
            "2xl": "5em",
          }}
        >
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              bg="none"
              p="0"
              _hover={{
                bg: "none",
              }}
              _active={{
                bg: "none",
              }}
            >
              Room
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              bg="none"
              p="0"
              _hover={{
                bg: "none",
              }}
              _active={{
                bg: "none",
              }}
            >
              House
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
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
          align="center"
          gap={{
            "2xl": "2em",
          }}
        >
          <Box>
            <Link to="/">Become a Host</Link>
          </Box>
          <Box>
            <Link to="/">Find Roommate</Link>
          </Box>
          <Box>
            <Button
              as="a"
              p="0 2em"
              bgColor="black"
              color="#fff"
              cursor="pointer"
              _hover={{ bgColor: "gray.500" }}
              _active={{ bgColor: "gray.600" }}
            >
              Sign in
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
