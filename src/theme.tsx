import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "@fontsource/rubik";
import "@fontsource/play";

const breakpoints = createBreakpoints({
  uxs: "300px",
  xs: "420px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});

export const fonts = {
  body: "Rubik, sans-serif",
  nav: "Calibri, sans-serif",
  play: "Play, sans-serif",
};

const theme = extendTheme({
  colors: {
    black: "#16161D",
    primary: {
      100: "#82b3f4",
      300: "#5999f1",
      500: "#2F80ED",
      700: "#2a73d5",
      900: "#1c4d8e",
    },
    light: "#F0F0F0",
  },
  fonts,
  breakpoints,
});

export default theme;
