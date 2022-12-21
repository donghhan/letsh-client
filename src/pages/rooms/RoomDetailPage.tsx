import { useState } from "react";
import {
  Flex,
  Text,
  Skeleton,
  Grid,
  GridItem,
  Box,
  Image,
  Divider,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Heading,
  IconButton,
  StackDivider,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import StackedIcon from "../../components/common/StackedIcon";
import { IRoomDetail } from "../../utils/interface";
import { getRoomDetail } from "../../api/rooms/roomsAPI";
import StyledButton from "../../components/common/Button";

export default function RoomDetailPage() {
  const { id } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(
    [`accomodations`, id],
    getRoomDetail
  );

  const [guest, setGuest] = useState<number>(1);

  const { t } = useTranslation();

  return (
    <Flex
      width="100vw"
      height="fit-content"
      minH="100vh"
      p={{ lg: "120px 7em 0" }}
      direction="column"
    >
      <Box p={{ lg: "0 5em" }}>
        <Text fontFamily="prompt" fontWeight="bold" fontSize={{ lg: "3rem" }}>
          {data?.name}
        </Text>
        <Flex width="100%" color="gray.600" fontSize={{ lg: "1.25rem" }}>
          <Text>Al Seba Street - Dubai Marina</Text>
        </Flex>
      </Box>
      <Grid
        height={{ lg: "60vh" }}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={{ lg: "1.1em" }}
        mt={{ lg: "1.5em" }}
      >
        {[0, 1, 2, 3, 4].map((idx) => (
          <GridItem
            key={idx}
            overflow="hidden"
            colSpan={idx === 0 ? 2 : 1}
            rowSpan={idx === 0 ? 2 : 1}
            borderTopLeftRadius={idx === 0 ? "150px" : 0}
            borderBottomRightRadius={idx === 4 ? "150px" : 0}
          >
            <Skeleton isLoaded={!isLoading} width="100%" height="100%">
              <Image
                objectFit="cover"
                width="100%"
                height="100%"
                src={data?.photos[idx].file}
                alt="hotel photos"
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <Flex mt={{ lg: "2.5em" }} p={{ lg: "0 7em" }}>
        <Box>
          <Card variant="filled" width="40%">
            <CardHeader>
              <Heading fontSize="1.75rem" fontFamily="prompt">
                Details
              </Heading>
            </CardHeader>
            <CardBody lineHeight="2em">
              {data?.description ? (
                <Text>{data?.description}</Text>
              ) : (
                <Text>No other details available</Text>
              )}
            </CardBody>
          </Card>
          <Card variant="filled" width="40%" mt={{ lg: "3em" }}>
            <CardHeader>
              <Heading fontSize="1.75rem" fontFamily="prompt">
                Apartment features
              </Heading>
            </CardHeader>
            <CardBody
              lineHeight="2em"
              display="grid"
              gridTemplateColumns={{ lg: "repeat(4, 1fr)" }}
            >
              <Text>{data?.description}</Text>
            </CardBody>
          </Card>
        </Box>
        <Box minW={{ lg: "400px" }}>
          <Card textAlign="center" p={{ lg: ".5em 1.5em" }}>
            <CardHeader>
              <Heading>
                ฿{data?.price_per_night}
                <Text
                  display="inline-block"
                  fontSize="1.5rem"
                  fontWeight="normal"
                  ml=".5em"
                >
                  {t("rooms:per_night")}
                </Text>
              </Heading>
            </CardHeader>
            <Divider />
            <CardBody>
              <Flex
                alignItems="center"
                justify={"space-between"}
                mb={{ lg: "1em" }}
              >
                <StackedIcon iconType="user" style={{ fontSize: "1.25rem" }} />
                <Text
                  ml={{ lg: "1.25em" }}
                  fontFamily="prompt"
                  fontSize="1.25rem"
                >
                  {t("rooms:guests")}
                </Text>
                <Flex
                  as="div"
                  alignItems={"center"}
                  gap={{ lg: "1em" }}
                  ml={{ lg: "1em" }}
                >
                  <IconButton
                    aria-label="plus"
                    size={"sm"}
                    icon={<AiOutlinePlus />}
                    onClick={() => setGuest(guest + 1)}
                  />
                  <Text>{guest}</Text>
                  <IconButton
                    aria-label="minus"
                    size={"sm"}
                    icon={<AiOutlineMinus />}
                    onClick={() => (guest < 2 ? 1 : setGuest(guest - 1))}
                  />
                </Flex>
              </Flex>
              <Flex
                alignItems={"center"}
                justify={"flex-start"}
                mb={{ lg: "2.5em" }}
              >
                <StackedIcon
                  iconType="calendar"
                  style={{ fontSize: "1.25rem" }}
                />
                <Text
                  ml={{ lg: "1.25em" }}
                  fontFamily="prompt"
                  fontSize="1.25rem"
                >
                  {t("rooms:move_in")}
                </Text>
                <IconButton
                  aria-label="dropdown menu button"
                  size={"sm"}
                  icon={<BiChevronDown />}
                />
              </Flex>
              <StyledButton width="100%">Check availability</StyledButton>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </Flex>
  );
}
