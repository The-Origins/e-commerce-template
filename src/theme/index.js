import { createTheme } from "@mui/material";

const theme = createTheme({
  fonts: { primary: "roboto mono", secondary: "pacifico" },
  palette: {
    primary: { main: "#FF2681" },
    secondary: { main: "#26FFFF" },
    text: { primary: "#000000", secondary: "#898989" },
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

export default theme;
