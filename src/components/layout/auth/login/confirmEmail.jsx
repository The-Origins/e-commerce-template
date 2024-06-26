import React, { useState } from "react";
import { Email } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import AuthWorker from "../../../../scripts/authWorker";

const ConfirmEmail = ({ setStage }) => {
  const authWorker = new AuthWorker();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "required" });
  const [touched, setTouched] = useState({});
  const validator = {
    email: [
      { key: (value) => value.length, message: "required" },
      {
        key: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Email must be valid",
      },
    ],
  };

  const handleChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, validator, target));
    setEmail(target.value);
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleConfirm = () => {
    setStage(4);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.3rem"}
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <Email />
          Confirm your email
        </Typography>
        <TextField
          fullWidth
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(touched.email) && Boolean(errors.email)}
          helperText={(touched.email && errors.email) || " "}
        />
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={() => setStage(1)}>
          Back
        </Button>
        <Button
          onClick={handleConfirm}
          variant="contained"
          disableElevation
          disabled={
            (!Boolean(Object.keys(touched).length) &&
              Boolean(Object.keys(errors).length)) ||
            Boolean(Object.keys(errors).length)
          }
        >
          confirm
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmEmail;
