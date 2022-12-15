import {
  Grid,
  GridItem,
  Text,
  Flex,
  Button,
  useColorMode,
  Stack,
  Checkbox,
  Switch,
  Box,
} from "@chakra-ui/react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faStar,
  fa3,
  fa4,
  fa5,
  faDumbbell,
  faPaw,
  faWaterLadder,
} from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

const OptionTitle = styled(Text)`
  font-weight: bold;
  font-family: "Prompt";
`;

const StarButton = styled(Button)`
  background-color: transparent;
  padding: 0.5em;
  &:hover {
    background-color: transparent;
  }
  &:focus {
    background-color: #cbd5e0;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  vertical-align: text-top;
  margin-right: 0.2em;
`;

interface IAmenityButton {
  buttonLabel: string;
  icon: FontAwesomeIconProps["icon"];
}

function AmenityButton({ buttonLabel, icon }: IAmenityButton) {
  return (
    <Button
      display="flex"
      flexDirection="column"
      minW="50px"
      minHeight="60px"
      _focus={{ bg: "orange.400" }}
    >
      <FontAwesomeIcon icon={icon} />
      {buttonLabel}
    </Button>
  );
}

export default function GuestInfoBar() {
  return (
    <Grid
      as="div"
      width="100%"
      height={{ lg: "fit-content" }}
      minH={{ lg: "100px" }}
      templateColumns={{ xl: "repeat(6, 1fr)" }}
      p={{ lg: "1em" }}
      borderRadius="6px"
    >
      <GridItem>
        <OptionTitle>Price:</OptionTitle>
        <Text>hi</Text>
      </GridItem>
      <GridItem>
        <OptionTitle as="span">Stars:</OptionTitle>
        <Flex>
          <StarButton>
            <span className="fa-stack fa-1x">
              <FontAwesomeIcon
                icon={faStar}
                className="fa-stack-2x"
                style={{ color: "#ED8936" }}
              />
              <FontAwesomeIcon
                icon={fa3}
                className="fa-stack-1x"
                style={{ color: "white" }}
              />
            </span>
          </StarButton>
          <StarButton bgColor="transparent">
            <span className="fa-stack fa-1x">
              <FontAwesomeIcon
                icon={faStar}
                className="fa-stack-2x"
                style={{ color: "#ED8936" }}
              />
              <FontAwesomeIcon
                icon={fa4}
                className="fa-stack-1x"
                style={{ color: "white" }}
              />
            </span>
          </StarButton>
          <StarButton bgColor="transparent">
            <span className="fa-stack fa-1x">
              <FontAwesomeIcon
                icon={faStar}
                className="fa-stack-2x"
                style={{ color: "#ED8936" }}
              />
              <FontAwesomeIcon
                icon={fa5}
                className="fa-stack-1x"
                style={{ color: "white" }}
              />
            </span>
          </StarButton>
        </Flex>
      </GridItem>
      <GridItem>
        <OptionTitle as="span">Freebies:</OptionTitle>
        <Stack direction={{ lg: "column" }}>
          <Text as="span">
            <StyledCheckbox colorScheme="orange" /> Free breakfast: (0)
          </Text>
          <Text as="span">
            <StyledCheckbox colorScheme="orange" /> Free parking: (0)
          </Text>
          <Text as="span">
            <StyledCheckbox colorScheme="orange" /> Free cancelation: (0)
          </Text>
        </Stack>
      </GridItem>
      <GridItem>
        <OptionTitle as="span">Room options:</OptionTitle>
        <Stack direction={{ lg: "column" }}>
          <Text as="span">
            <Switch colorScheme="orange" mr={{ lg: "1em" }} />1 bed
          </Text>
          <Text as="span">
            <Switch colorScheme="orange" mr={{ lg: "1em" }} />
            2+ beds
          </Text>
        </Stack>
      </GridItem>
      <GridItem>
        <OptionTitle as="span">Amenities:</OptionTitle>
        <Stack direction={{ lg: "row" }} marginTop=".5em">
          <AmenityButton icon={faDumbbell} buttonLabel="gym" />
          <AmenityButton icon={faPaw} buttonLabel="pets" />
          <AmenityButton icon={faWaterLadder} buttonLabel="pool" />
        </Stack>
      </GridItem>
      <GridItem alignSelf="center">
        <OptionTitle as="span" fontSize="1.125rem">
          Map View
        </OptionTitle>
        <Switch colorScheme="orange" ml={{ lg: "1.125em" }} size="md" />
      </GridItem>
    </Grid>
  );
}
