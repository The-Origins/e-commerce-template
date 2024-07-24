import React, { useState } from "react";
import { Box, Button, Link, ThemeProvider, Typography } from "@mui/material";
import { PhoneInTalk } from "@mui/icons-material";
import theme from "../../theme";
import ContactModal from "../layout/modals/contact";
import StatusComponent from "../layout/statusComponent";

const AuthLayout = ({ children }) => {
  const [isContact, setIsContact] = useState(false);
  const [status, setStatus] = useState({
    on: false,
    type: "LOADING",
  });

  const mappedChildren = React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // Clone the child element and add props and loading, success and error info
      return React.cloneElement(child, {
        setStatus,
      });
    }
    // Return the child if it's not a React element (e.g., text nodes)
    return child;
  });

  return (
    <ThemeProvider theme={theme}>
      <header
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          boxShadow: `0px 0px 10px 0px ${theme.palette.grey[300]}`,
        }}
      >
        <Link
          href="/"
          fontSize={"clamp(0.4rem, 5vw, 3rem)"}
          sx={{
            textDecoration: "none",
            color: "black",
            typography: "secondaryFont",
            fontWeight:"bold"
          }}
        >
          {theme.title}
        </Link>
      </header>
      <ContactModal {...{ isContact, setIsContact }} />
      <Box
        height={"80vh"}
        width={"100%"}
        padding={"20px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          height={"100%"}
          width={"min(550px, 100%)"}
          boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
          borderRadius={"25px"}
          position={"relative"}
          overflow={"hidden"}
        >
          {status.on && (
            <StatusComponent isAbsolute {...{ status, setStatus }} />
          )}
          {mappedChildren}
        </Box>
      </Box>
      <footer
        style={{
          width: "100%",
          padding: "10px",
          display: "flex",
          gap: "20px",
          border: `1px solid ${theme.palette.grey[300]}`,
          alignItems: "center",
        }}
      >
        <Typography>Need assistance ?</Typography>
        <Button
          endIcon={<PhoneInTalk />}
          onClick={() => setIsContact(true)}
          variant="contained"
          disableElevation
          color="primary"
        >
          Contact us
        </Button>
      </footer>
    </ThemeProvider>
  );
};

export default AuthLayout;
