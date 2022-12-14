import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Box as="main" position="relative">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
