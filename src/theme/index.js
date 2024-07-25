import { createTheme } from "@mui/material";

const theme = createTheme({
  title: "E-commerce",
  typography: {
    fontFamily: "Quicksand, sans-serif",
    fontWeightLight: 200, // Corresponds to <weight> 200
    fontWeightRegular: 500, // Corresponds to <weight> 400
    fontWeightBold: 700, // Corresponds to <weight> 700
    secondaryFont: {
      fontFamily: "Libre Baskerville, sans-serif",
      fontWeightLight: 200,
      fontWeightRegular: 400,
      fontWeightBold: 700,
    },
  },
  palette: {
    primary: { main: "#FF2681" },
    secondary: { main: "#26FFFF" },
    text: { primary: "#000000", secondary: "#707070" },
    status: {
      product: {
        "In stock": "#707070",
        "Few left": "#FF9000",
        "Out of stock": "#FF0000",
        other: "#FF0000",
      },
      order: {
        processing: "#0382FF",
        fulfilling: "#FF9000",
        fulfilled: "#15FF02",
      },
      payment: {
        paid: "#15FF02",
        failed: "#FF0000",
        pending: "#FF9000",
      },
      delivery: {
        pending: "#FF9000",
        delivered: "#15FF02",
        failed: "#FF0000",
      },
    },
  },
});

export const convertHex = (hex) => {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse the r, g, b values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return [r, g, b];
};

export default theme;
