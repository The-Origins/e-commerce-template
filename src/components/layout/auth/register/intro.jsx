import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { East } from "@mui/icons-material";

const RegisterIntro = ({ setStage, setAuth }) => {
  const theme = useTheme();
  return (
    <Box
      height={"100%"}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"30px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Typography
          mt={"10px"}
          fontFamily={theme.fonts.secondary}
          fontSize={"clamp(1rem, 5vw, 2rem)"}
        >
          Register
        </Typography>
        <Typography fontSize={"1.1rem"}>
          And get access to all of our services
        </Typography>
      </Box>
      <Button
        size="large"
        variant="contained"
        endIcon={<East />}
        onClick={() => setStage(1)}
      >
        Start
      </Button>
      <Button
        onClick={() => setAuth("login")}
        sx={{
          mt: "50px",
          textTransform: "none",
          ":hover": { textDecoration: "underline" },
        }}
      >
        Already have an account?
      </Button>
    </Box>
  );
};

export default RegisterIntro;
