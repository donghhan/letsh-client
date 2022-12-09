import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../api/roomsAPI";
import { IRoom } from "../../utils/interface";

export default function RoomListPage() {
  const { isLoading, data } = useQuery<IRoom[]>(["rooms"], getRooms);

  return (
    <Box>
      {data?.map((room) => (
        <span>{room.name}</span>
      ))}
    </Box>
  );
}
