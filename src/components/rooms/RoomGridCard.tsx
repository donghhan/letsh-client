import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBed,
  faDoorOpen,
  faBath,
  faMugHot,
  faWifi,
  faSquareParking,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import { AiOutlineWifi } from "react-icons/ai";
import { FaMugHot, FaParking } from "react-icons/fa";
import StyledButton from "../common/Button";
import { IRoom } from "../../utils/interface";
import * as freelancer from "../../assets/freelancer.svg";

const ColoredReviewStar = styled(FontAwesomeIcon)`
  color: #d69e2e;
`;

export default function RoomGridCard({
  name,
  pk,
  price_per_night,
  is_free_breakfast,
  is_free_internet,
  is_free_parking,
  is_free_booking_cancelation,
  number_of_beds,
  rating,
}: IRoom) {
  return (
    <Box position="relative">
      <Box marginBottom="1em">
        <Image src={freelancer.default} />
      </Box>
      <Text
        fontFamily="prompt"
        fontWeight="bold"
        fontSize="1.3rem"
        marginBottom=".5em"
      >
        {name}
      </Text>
      <Box fontFamily="ibmSans" fontSize=".9rem" marginBottom="2.5em">
        <Flex>
          <Box marginRight="1em">
            <ColoredReviewStar icon={faStar} />
            <ColoredReviewStar icon={faStar} />
            <ColoredReviewStar icon={faStar} />
            <ColoredReviewStar icon={faStar} />
            <ColoredReviewStar icon={faStar} />
          </Box>
          <Link to="/">
            <Text textDecoration="underline">All reviews</Text>
          </Link>
        </Flex>
        <Text>Al seba Street - Dubai Marina</Text>
        <Flex gap="1em">
          <Text>
            <FontAwesomeIcon icon={faUser} /> (1)
          </Text>
          <Text>
            <FontAwesomeIcon icon={faBed} /> (1)
          </Text>
          <Text>
            <FontAwesomeIcon icon={faDoorOpen} /> (1)
          </Text>
          <Text>
            <FontAwesomeIcon icon={faBath} /> (1)
          </Text>
        </Flex>
      </Box>
      <Box color="gray.600" marginTop="1.25em" fontSize=".9rem">
        {is_free_breakfast ? (
          <Text>
            <FaMugHot style={{ display: "inline", marginRight: ".5em" }} />
            Free Breakfast
          </Text>
        ) : null}
        {is_free_internet ? (
          <Text>
            <AiOutlineWifi style={{ display: "inline", marginRight: ".5em" }} />
            Free Wifi
          </Text>
        ) : null}
        {is_free_parking ? (
          <Text>
            <FaParking style={{ display: "inline", marginRight: ".5em" }} />{" "}
            Free Parking
          </Text>
        ) : null}
      </Box>
      <Box position="absolute" bottom="0" right="0" fontFamily="prompt">
        <Text
          textAlign="center"
          fontSize="1.5rem"
          fontWeight="bold"
          marginBottom=".5em"
        >
          1500 Baht
        </Text>
        <Link to={`room/${pk}`}>
          <StyledButton width="150px" height="45px">
            Book now
          </StyledButton>
        </Link>
      </Box>
    </Box>
  );
}
