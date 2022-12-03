import { extendTheme, theme as baseTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    prompt: "Prompt",
    ibmSans: "'IBM Plex Sans Thai Looped', sans-serif",
    charmonman: "'Charmonman', cursive",
    rubik: "'Rubik Distressed', cursive",
  },
});

export default theme;
