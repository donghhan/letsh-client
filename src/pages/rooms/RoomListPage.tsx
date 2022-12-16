import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import GuestInfoBar from "../../components/rooms/GustInfoBar";
import FilterBar from "../../components/rooms/FilterBar";
import RoomGridCard from "../../components/rooms/RoomGridCard";
import { getRooms } from "../../api/rooms/roomsAPI";
import { IRoom } from "../../utils/interface";
import { rooms } from "../../locales/en/index.en";

export default function RoomListPage() {
  const { isLoading, data } = useQuery<IRoom[]>(["rooms"], getRooms);
  const { colorMode } = useColorMode();

  return (
    <>
      <Text fontSize="1.5rem" fontFamily="prompt" fontWeight="bold">
        All Results
      </Text>
      <Grid
        width="100vw"
        minH="100vh"
        p={{ lg: "100px 5em 0" }}
        templateColumns={{ lg: "repeat(2, 1fr)", "2xl": "repeat(3, 1fr)" }}
        gap={{ md: "3em", xl: "3.5em" }}
      >
        {data?.map((room) => (
          <GridItem
            height="fit-content"
            p="2.5em"
            borderRadius="25px"
            boxShadow={
              colorMode === "light"
                ? "0px 0px 18px 5px rgba(219,219,219,0.75)"
                : "0px 0px 18px 5px rgba(25,25,25,0.95)"
            }
            transition="all .2s ease"
            _hover={{
              boxShadow:
                colorMode === "light"
                  ? "0px 0px 18px 5px rgba(156,156,156,0.75)"
                  : "0px 0px 18px 5px rgba(15,15,15,0.75)",
              transform: "translateY(-5px)",
            }}
            position="relative"
          >
            <RoomGridCard
              pk={room.pk}
              name={room.name}
              maximum_guests={room.maximum_guests}
              price_per_night={room.price_per_night}
              is_free_booking_cancelation={room.is_free_booking_cancelation}
              is_free_breakfast={room.is_free_breakfast}
              is_free_internet={room.is_free_internet}
              is_free_parking={room.is_free_parking}
              number_of_beds={room.number_of_beds}
              number_of_bathrooms={room.number_of_bathrooms}
              number_of_bedrooms={room.number_of_bedrooms}
              rating={4}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
