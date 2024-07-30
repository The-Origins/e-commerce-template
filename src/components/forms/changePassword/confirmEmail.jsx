import React, { useState } from "react";
import { Email } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import AuthWorker from "../../../utils/authWorker";

const ConfirmEmail = ({ setStage, email, setEmail, onCancel }) => {
  const authWorker = new AuthWorker();
  const [errors, setErrors] = useState({ email: "required" });
  const [touched, setTouched] = useState({});

  const handleChange = ({ target }) => {
    setErrors(authWorker.getErrors(errors, target));
    setEmail(target.value);
  };

  const handleBlur = ({ target }) => {
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStage(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
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
        <Button variant="outlined" disableElevation onClick={onCancel}>
          cancel
        </Button>
        <Button
          type="submit"
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
    </form>
  );
};

export default ConfirmEmail;
