import React from "react";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <Flex as="section" width="100vw" minHeight="100vh">
      <Outlet />
    </Flex>
  );
}
