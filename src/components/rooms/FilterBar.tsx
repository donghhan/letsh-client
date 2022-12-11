import {
  Box,
  Button,
  HStack,
  Divider,
  StackDivider,
  Flex,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCompass,
  faUser,
  faPlus,
  faMinus,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

export default function FilterBar() {
  return (
    <Flex as="div" width="100vw" p="1em" border="1px solid red">
      <HStack
        width="80%"
        divider={<StackDivider borderColor="gray.200" />}
        border="1px solid green"
      >
        <Flex align="center">
          <span className="fa-stack fa-1x">
            <FontAwesomeIcon
              icon={faCircle}
              className="fa-stack-2x"
              style={{ color: "black" }}
            />
            <FontAwesomeIcon
              icon={faCompass}
              className="fa-stack-1x"
              style={{ color: "white" }}
            />
          </span>
          <Flex display="column" ml="1em" lineHeight="1em">
            <Text fontSize=".8rem" color="gray.700" fontFamily="ibmSans">
              Location
            </Text>
            <Text fontFamily="prompt" fontWeight="bold">
              Bangkok - Thailand
            </Text>
          </Flex>
        </Flex>
        <Flex align="center">
          <span className="fa-stack fa-1x">
            <FontAwesomeIcon
              icon={faCircle}
              className="fa-stack-2x"
              style={{ color: "black" }}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="fa-stack-1x"
              style={{ color: "white" }}
            />
          </span>
          <Flex ml="1em" lineHeight="1em" align="center">
            <Text fontFamily="ibmSans">Guests</Text>
            <Flex align="center">
              <IconButton
                aria-label="plus"
                icon={<FontAwesomeIcon icon={faPlus} />}
              />
              <Text>1</Text>
              <IconButton
                aria-label="minus"
                icon={<FontAwesomeIcon icon={faMinus} />}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex align="center">
          <span className="fa-stack fa-1x">
            <FontAwesomeIcon
              icon={faCircle}
              className="fa-stack-2x"
              style={{ color: "black" }}
            />
            <FontAwesomeIcon
              icon={faCalendar}
              className="fa-stack-1x"
              style={{ color: "white" }}
            />
          </span>
          <Text>Move in</Text>
        </Flex>
      </HStack>
      <Button width="20%" height="100%">
        Search
      </Button>
    </Flex>
  );
}
