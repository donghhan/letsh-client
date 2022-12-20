import {
  Flex,
  Text,
  Skeleton,
  Grid,
  GridItem,
  Box,
  Image,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IRoomDetail } from "../../utils/interface";
import { getRoomDetail } from "../../api/rooms/roomsAPI";

export default function RoomDetailPage() {
  const { id } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(
    [`accomodations`, id],
    getRoomDetail
  );
  console.log(data);

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
      <Flex direction={{ lg: "column" }} mt={{ lg: "1em" }} p={{ lg: "0 7em" }}>
        <Card variant="filled" width="40%">
          <CardHeader>
            <Heading fontSize="1.75rem" fontFamily="prompt">
              Details
            </Heading>
          </CardHeader>
          <CardBody lineHeight="2em">
            <Text>{data?.description}</Text>
          </CardBody>
        </Card>
        <Card variant="filled" width="40%" mt={{ lg: "3em" }}>
          <CardHeader>
            <Heading fontSize="1.75rem" fontFamily="prompt">
              Apartment features
            </Heading>
          </CardHeader>
          <CardBody lineHeight="2em">
            <Text>{data?.description}</Text>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
}
