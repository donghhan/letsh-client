import {
  Box,
  Image,
  Text,
  Flex,
  VisuallyHidden,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBed,
  faDoorOpen,
  faBath,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { AiOutlineWifi } from "react-icons/ai";
import { FaMugHot, FaParking } from "react-icons/fa";
import { MdFreeCancellation } from "react-icons/md";
import StyledButton from "../common/Button";
import { IRoom } from "../../utils/interface";
import * as freelancer from "../../assets/freelancer.svg";

const ColoredReviewStar = styled(FontAwesomeIcon)`
  color: #d69e2e;
`;

export default function RoomGridCard({
  name,
  id,
  price_per_night,
  is_free_breakfast,
  is_free_internet,
  is_free_parking,
  is_free_booking_cancelation,
  maximum_guests,
  number_of_beds,
  number_of_bathrooms,
  number_of_bedrooms,
  rating,
}: IRoom) {
  const { colorMode } = useColorMode();
  const { t, i18n } = useTranslation();

  return (
    <Box>
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
            <Text textDecoration="underline">{t("rooms:all_reviews")}</Text>
          </Link>
        </Flex>
        <Text>Al seba Street - Dubai Marina</Text>
        <Flex gap="1em">
          <Text>
            <FontAwesomeIcon icon={faUser} /> ({maximum_guests})
          </Text>
          <Text>
            <FontAwesomeIcon icon={faBed} /> ({number_of_beds})
          </Text>
          <Text>
            <FontAwesomeIcon icon={faDoorOpen} /> ({number_of_bedrooms})
          </Text>
          <Text>
            <FontAwesomeIcon icon={faBath} /> ({number_of_bathrooms})
          </Text>
        </Flex>
      </Box>
      <Flex
        color={colorMode === "light" ? "gray.600" : "gray.400"}
        marginTop="1.25em"
        fontSize=".9rem"
        position="relative"
      >
        <Flex direction="column" minH="90px">
          {is_free_breakfast ? (
            <Text>
              <FaMugHot style={{ display: "inline", marginRight: ".5em" }} />
              {t("rooms:free_breakfast")}
            </Text>
          ) : (
            <VisuallyHidden>{t("rooms:free_breakfast")}</VisuallyHidden>
          )}
          {is_free_internet ? (
            <Text>
              <AiOutlineWifi
                style={{ display: "inline", marginRight: ".5em" }}
              />
              {t("rooms:free_wifi")}
            </Text>
          ) : (
            <VisuallyHidden>{t("rooms:free_wifi")}</VisuallyHidden>
          )}
          {is_free_parking ? (
            <Text>
              <FaParking style={{ display: "inline", marginRight: ".5em" }} />{" "}
              {t("rooms:free_parking")}
            </Text>
          ) : (
            <VisuallyHidden>{t("rooms:free_parking")}</VisuallyHidden>
          )}
          {is_free_booking_cancelation ? (
            <Text>
              <MdFreeCancellation
                style={{ display: "inline", marginRight: ".5em" }}
              />{" "}
              {t("rooms:free_cancelation")}
            </Text>
          ) : (
            <VisuallyHidden>{t("rooms:free_cancelation")}</VisuallyHidden>
          )}
        </Flex>
        <Box position="absolute" bottom="0" right="0" fontFamily="prompt">
          <Text
            color={colorMode === "light" ? "black" : "white"}
            textAlign="center"
            fontSize="1.5rem"
            fontWeight="bold"
            marginBottom=".5em"
          >
            {i18n.language === "en"
              ? `${Math.round(price_per_night)} THB`
              : `฿ ${Math.round(price_per_night)}`}
          </Text>
          <Link to={`/rooms/${id}`}>
            <StyledButton width="150px" height="45px">
              {t("rooms:book_now")}
            </StyledButton>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
