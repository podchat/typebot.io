import { extendTheme } from "@chakra-ui/react";

const config = { initialColorMode: "dark", useSystemColorMode: false };

const fonts = {
  heading: "Outfit",
  body: "Open Sans",
};

const colors = {
  blue: {
    50: "#e0f7e0",
    100: "#b0eab0",
    200: "#7edd7e",
    300: "#4bd04b",
    400: "#1ac31a",
    500: "#00b96b", // Main green color
    600: "#009e5a",
    700: "#007b47",
    800: "#005834",
    900: "#003521",
  },
  orange: {
    50: "#fff1da",
    100: "#ffd7ae",
    200: "#ffbf7d",
    300: "#ffa54c",
    400: "#ff8b1a",
    500: "#e67200",
    600: "#b45800",
    700: "#813e00",
    800: "#4f2500",
    900: "#200b00",
  },
  yellow: {
    50: "#fff9da",
    100: "#ffedad",
    200: "#ffe17d",
    300: "#ffd54b",
    400: "#ffc91a",
    500: "#e6b000",
    600: "#b38800",
    700: "#806200",
    800: "#4e3a00",
    900: "#1d1400",
  },
};

const components = {
  Button: {
    defaultProps: {
      colorScheme: "blue",
    },
    variants: {
      solid: () => ({
        bg: "blue.400",
        color: "white",
        shadow: "inset 0 1px 0 0 rgb(255 255 255/.2)",
        _hover: {
          bg: "blue.300",
        },
      }),
    },
  },
  NumberInput: {
    defaultProps: {
      focusBorderColor: "blue.200",
    },
  },
  Input: {
    defaultProps: {
      focusBorderColor: "blue.200",
    },
  },
  Popover: {
    baseStyle: {
      popper: {
        width: "fit-content",
        maxWidth: "fit-content",
      },
    },
  },
  Tooltip: {
    baseStyle: {
      borderRadius: "md",
    },
  },
  Link: {
    baseStyle: {
      _hover: { textDecoration: "none" },
    },
  },
};

export const theme = extendTheme({
  fonts,
  components,
  colors,
  config,
});
