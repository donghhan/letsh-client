import { Box, Flex } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Layout from "../../components/Layout";
import GuestInfoBar from "../../components/rooms/GustInfoBar";
import FilterBar from "../../components/rooms/FilterBar";
import RoomGridCard from "../../components/rooms/RoomGridCard";
import { getRooms } from "../../api/roomsAPI";
import { IRoom } from "../../utils/interface";

export default function RoomListPage() {
  const { isLoading, data } = useQuery<IRoom[]>(["rooms"], getRooms);

  return (
    <Flex
      pt={{ lg: "80px" }}
      width="100vw"
      height={{ lg: "100vh" }}
      minH={{ lg: "100vh" }}
    >
      <Box>
        <GuestInfoBar />
        <FilterBar />
      </Box>
    </Flex>
  );
}
