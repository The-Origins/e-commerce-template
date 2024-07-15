import React from "react";
import { Email, Facebook, Google } from "@mui/icons-material";
import { Box, Button, Link } from "@mui/material";

const LoginIntro = ({ setStage, }) => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
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
      <Link href="/auth/register">
        <Button
          sx={{
            mt: "50px",
            textTransform: "none",
            ":hover": { textDecoration: "underline" },
          }}
        >
          Don't have an account?
        </Button>
      </Link>
    </Box>
  );
};

export default LoginIntro;
