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
import { getRooms } from "../../api/roomsAPI";
import { IRoom } from "../../utils/interface";

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
        height="fit-content"
        minH="100vh"
        p={{ lg: "100px 5em 0" }}
        templateColumns={{ md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
        gap={{ md: "3em", xl: "3.5em" }}
      >
        <GridItem
          p="2.5em"
          borderRadius="25px"
          boxShadow={
            colorMode === "light"
              ? "1px -1px 18px 0px rgb(219,219,219)"
              : "0px 0px 28px 0px rgba(25,25,25,0.95)"
          }
          transition="transform .2s ease"
          _hover={{
            boxShadow:
              colorMode === "light"
                ? "0px 0px 28px 0px rgba(156,156,156,0.75)"
                : "0px 0px 28px 0px rgba(15,15,15,0.75)",
            transform: "translateY(-5px)",
          }}
        >
          <RoomGridCard name="The Redbury Hotel" />
        </GridItem>
        <GridItem border="1px solid green" p="1em">
          <RoomGridCard name="The Redbury Hotel" />
        </GridItem>
        <GridItem border="1px solid green" p="1em">
          <RoomGridCard name="The Redbury Hotel" />
        </GridItem>
        <GridItem border="1px solid green" p="1em">
          <RoomGridCard name="The Redbury Hotel" />
        </GridItem>
      </Grid>
    </>
  );
}
