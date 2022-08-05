import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#00002e",
        color: "white",
        fontFamily: "body",
        fontSize: "20px",
      },
    },
  },

  colors: {
    brand: {
      darkPurple: "#00002e",
      lightBlue: "#0087d4",
      prettiPurple: "#380054",
      darkBlue: "#00356d",
      normalYellow: "#f8c60d",
    },
  },
  fonts: {
    body: "Roboto, system-ui, sans-serif",
  },
});

export default customTheme;
