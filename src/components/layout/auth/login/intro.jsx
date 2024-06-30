import React from "react";
import { Email, Facebook, Google } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const LoginIntro = ({ setStage, setAuth }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"10px"}
    >
      <Button
        variant="outlined"
        startIcon={<Google />}
        sx={{ width: "300px", height: "50px" }}
      >
        Google
      </Button>
      <Button
        variant="outlined"
        startIcon={<Facebook />}
        sx={{ width: "300px", height: "50px" }}
      >
        Facebook
      </Button>
      <Button
        variant="outlined"
        startIcon={<Email />}
        onClick={() => setStage(1)}
        sx={{ width: "300px", height: "50px" }}
      >
        Email
      </Button>
      <Button
        sx={{
          mt: "50px",
          textTransform: "none",
          ":hover": { textDecoration: "underline" },
        }}
        onClick={() => setAuth("register")}
      >
        Don't have an account?
      </Button>
    </Box>
  );
};

export default LoginIntro;
