import React, { useState } from "react";
import {
  Box,
  Button,
  HStack,
  StackDivider,
  Flex,
  Text,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverContent,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCompass,
  faUser,
  faPlus,
  faMinus,
  faCalendar,
  faXmark,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import Calendar from "react-calendar";
import { roomLocationSearchState } from "../../atoms/RoomSearchAtom";

export default function FilterBar() {
  const [location, setLocation] = useState<string>("");
  const [guest, setGuest] = useState<number>(1);
  const [calendarToggle, setCalendarToggle] = useState<boolean>(false);
  const [movein, setMovein] = useState<string>("");

  const roomSearch = useRecoilValue(roomLocationSearchState);

  const { t } = useTranslation();

  return (
    <Flex
      as="div"
      width="100vw"
      mt={{ lg: "1em" }}
      p=".5em"
      border="1px solid red"
    >
      <HStack
        width="calc(100% - 150px)"
        divider={<StackDivider borderColor="gray.600" />}
      >
        <Flex minW={{ lg: "400px" }}>
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
          <Flex
            display="column"
            ml="1em"
            lineHeight="1em"
            align="center"
            width="100%"
          >
            <Text fontSize=".8rem" color="gray.500" fontFamily="ibmSans">
              Location
            </Text>
            <InputGroup size="sm">
              <Input
                variant="unstyled"
                value={location}
                placeholder={t("rooms:location_placeholder")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLocation(e.target.value)
                }
                _placeholder={{ fontFamily: "prompt" }}
              />
              {location !== "" ? (
                <InputRightElement
                  cursor="pointer"
                  children={<FontAwesomeIcon icon={faXmark} />}
                  height="1em"
                  onClick={() => setLocation("")}
                />
              ) : null}
            </InputGroup>
          </Flex>
        </Flex>
        <Flex align="center" minW={{ lg: "300px" }}>
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
            <Flex align="center" gap=".8em" ml="2.5em">
              <IconButton
                aria-label="plus"
                fontSize=".8rem"
                size="xs"
                icon={<FontAwesomeIcon icon={faPlus} />}
                onClick={() => setGuest(guest + 1)}
              />
              <Text minW={{ lg: "1.5em" }} textAlign="center">
                {guest}
              </Text>
              <IconButton
                aria-label="minus"
                fontSize=".8rem"
                size="xs"
                icon={<FontAwesomeIcon icon={faMinus} />}
                onClick={() => (guest < 2 ? 1 : setGuest(guest - 1))}
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
          <Popover>
            <PopoverTrigger>
              <Flex
                as="div"
                cursor="pointer"
                onClick={() =>
                  calendarToggle === true
                    ? setCalendarToggle(false)
                    : setCalendarToggle(true)
                }
              >
                <Text ml={{ lg: "1em" }} mr={{ lg: "3em" }}>
                  Move in
                </Text>
                {calendarToggle ? (
                  <Text>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </Text>
                ) : (
                  <Text>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </Text>
                )}
              </Flex>
            </PopoverTrigger>
          </Popover>
        </Flex>
      </HStack>
      <Button width="150px" bgColor="orange.400">
        Search
      </Button>
    </Flex>
  );
}
