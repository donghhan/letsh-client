import {
  extendTheme,
  type ThemeConfig,
  defineStyleConfig,
} from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";

const components: Record<string, StyleConfig> = {
  StyledButton: {
    baseStyle: ({ colorMode }) => ({
      bg: "orange.500",
      fontWeight: "bold",
      fontFamily: "prompt",
      width: "180px",
      height: "50px",
      color: "white",
      borderRadius: "6px",
      boxShadow:
        colorMode === "light" ? "0px 8px 15px rgba(0, 0, 0, .3)" : "none",
      _hover: {
        bg: "orange.400",
      },
      _active: {
        bg: "orange.600",
      },
    }),
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components,
  fonts: {
    prompt: "Prompt",
    ibmSans: "'IBM Plex Sans Thai Looped', sans-serif",
    charmonman: "'Charmonman', cursive",
    rubik: "'Rubik Distressed', cursive",
  },
  style: {
    global: {
      html: {
        padding: "0",
        margin: "0",
        boxSizing: "border-box",
        overflow: "hidden",
      },
      a: {
        textDecoration: "none",
      },
      "ul, li": {
        listStyle: "none",
      },
    },
  },
});

export default theme;
