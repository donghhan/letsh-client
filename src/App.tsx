import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { MyGlobalStyle } from "./styles/globalStyle";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <Box position="relative">
      <MyGlobalStyle />
      <Header />
      <Box as="main" position="relative">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
