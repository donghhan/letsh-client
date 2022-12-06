import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";

const components: Record<string, StyleConfig> = {
  customButton: {
    baseStyle: () => ({
      bg: "orange.400",
      _hover: {
        bg: "orange.300",
      },
      _acitve: {
        bg: "orange.500",
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
