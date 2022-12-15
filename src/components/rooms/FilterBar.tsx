import React, { useState } from "react";
import {
  Box,
  Button,
  SimpleGrid,
  Container,
  Flex,
  Text,
  IconButton,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverContent,
  useColorMode,
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
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import StyledButton from "../common/Button";
import Calendar from "react-calendar";
import { roomLocationSearchState } from "../../atoms/RoomSearchAtom";

export default function FilterBar() {
  const [location, setLocation] = useState<string>("");
  const [guest, setGuest] = useState<number>(1);
  const [calendarToggle, setCalendarToggle] = useState<boolean>(false);

  const roomSearch = useRecoilValue(roomLocationSearchState);

  const { colorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <Flex
      width="100%"
      height="80px"
      align="center"
      justify="space-between"
      border="1px solid red"
    >
      <SimpleGrid columns={{ lg: 4 }} gap={{ lg: "1em" }}>
        <Flex maxWidth={{ lg: "400px" }}>
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
          <Divider
            orientation="vertical"
            borderColor="gray.700"
            height="100%"
          />
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
          <Divider orientation="vertical" borderColor="gray.700" />
        </Flex>
        <Flex align="center">
          <span className="fa-stack fa-1x">
            <FontAwesomeIcon
              icon={faCircle}
              className="fa-stack-2x"
              style={{ color: "black" }}
            />
            <FontAwesomeIcon
              icon={faRightToBracket}
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
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <Calendar />
            </PopoverContent>
          </Popover>
          <Divider orientation="vertical" borderColor="gray.700" />
        </Flex>
        <Flex align="center">
          <span className="fa-stack fa-1x">
            <FontAwesomeIcon
              icon={faCircle}
              className="fa-stack-2x"
              style={{ color: "black" }}
            />
            <FontAwesomeIcon
              icon={faRightFromBracket}
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
                  Move out
                </Text>
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <Calendar />
            </PopoverContent>
          </Popover>
        </Flex>
      </SimpleGrid>
      <StyledButton>Search</StyledButton>
    </Flex>
  );
}
