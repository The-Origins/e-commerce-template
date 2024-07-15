import { createTheme } from "@mui/material";

const theme = createTheme({
  documentTitle: "E-commerce",
  fonts: { primary: "roboto mono", secondary: "pacifico" },
  palette: {
    primary: { main: "#FF2681" },
    secondary: { main: "#26FFFF" },
    text: { primary: "#000000", secondary: "#898989" },
    productStateColors: {
      "In stock": "#898989",
      "Few left": "#FF9000",
      "Out of stock": "#FF0000",
      other: "#FF0000",
    },
    orderStatusColors: {
      processing: "#0382FF",
      fulfilling: "#FF9000",
      fulfilled: "#15FF02",
    },
    paymentStatusColors: {
      paid: "#15FF02",
      failed: "#FF0000",
      pending: "#FF9000",
    },
    deliveryStatusColors: {
      pending: "#FF9000",
      delivered: "#15FF02",
      failed: "#FF0000",
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
