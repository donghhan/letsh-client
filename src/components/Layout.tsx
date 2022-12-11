import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Box mt={{ lg: "80px" }}>
      <Outlet />
    </Box>
  );
}
