import React from "react";
import { Box, Button, Typography,} from "@mui/material";
import { East } from "@mui/icons-material";
import { Link } from "gatsby";

const RegisterIntro = ({ setStage, tab }) => {
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
          fontSize={"clamp(1rem, 5vw, 2rem)"}
          sx={{typography: "secondaryFont", fontWeight:"bold"}}
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
      <Link to={`/auth/login${tab ? "?tab=" + tab : ""}`}>
        <Button
          sx={{
            mt: "50px",
            textTransform: "none",
            ":hover": { textDecoration: "underline" },
          }}
        >
          Already have an account?
        </Button>
      </Link>
    </Box>
  );
};

export default RegisterIntro;
