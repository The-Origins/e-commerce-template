import React from "react";
import { Lock } from "@mui/icons-material";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";

const Password = ({ form, setStage }) => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      width={"min(400px, 90%)"}
      height={"100%"}
      justifyContent={"space-evenly"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.3rem"}
          sx={{ display: "flex" }}
        >
          <Lock />
          Create a strong password
        </Typography>
        <Box
          border={`1px solid ${theme.palette.grey[300]}`}
          padding={"15px 15px 0px 15px"}
          borderRadius={"10px"}
          display={"flex"}
          flexDirection={"column"}
        >
          <TextField
            variant="outlined"
            type={"password"}
            label={"Password"}
            name="password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={
              Boolean(form.touched.password) && Boolean(form.errors.password)
            }
            helperText={(form.touched.password && form.errors.password) || " "}
          />
          <TextField
            variant="outlined"
            type={"password"}
            label={"Confirm password"}
            name="confirmPassword"
            value={form.values.confirmPassword}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            error={
              Boolean(form.touched.confirmPassword) &&
              Boolean(form.errors.confirmPassword)
            }
            helperText={
              (form.touched.confirmPassword && form.errors.confirmPassword) ||
              " "
            }
          />
        </Box>
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
          type="submit"
          variant="contained"
          disableElevation
          disabled={
            !Boolean(Object.keys(form.touched).length) ||
            Boolean(Object.keys(form.errors).length)
          }
          onClick={() => {
            setStage(3);
          }}
        >
          next
        </Button>
      </Box>
    </Box>
  );
};

export default Password;
