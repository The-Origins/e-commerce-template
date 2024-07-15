import React, { useState } from "react";
import {
  Alert,
  AlertTitle,
  Button,
  Snackbar,
  useMediaQuery,
} from "@mui/material";
import { deactivateSnackBar } from "../../state/store";
import { useSelector, useDispatch } from "react-redux";

const SnackBarComponent = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const snackBar = useSelector((state) => state.snackBar);
  const dispatch = useDispatch();

  const handleSnackBarClose = () => {
    dispatch(deactivateSnackBar());
  };

  const snackBarTypes = {
    error: (
      <Alert severity="error">
        <AlertTitle>{snackBar.title || "Error"}</AlertTitle>
        {snackBar.message}
      </Alert>
    ),
    info: (
      <Alert severity="info">
        <AlertTitle>{snackBar.title || "Info"}</AlertTitle>
        {snackBar.message}
      </Alert>
    ),
    success: (
      <Alert severity="success">
        <AlertTitle>{snackBar.title || "Success"}</AlertTitle>
        {snackBar.message}
      </Alert>
    ),
    warning: (
      <Alert severity="warning">
        <AlertTitle>{snackBar.title || "Warning"}</AlertTitle>
        {snackBar.message}
      </Alert>
    ),
  };

  return (
    <Snackbar
      open={snackBar.on}
      autoHideDuration={5000}
      action={
        <Button size="small" onClick={handleSnackBarClose}>
          ok
        </Button>
      }
      onClose={handleSnackBarClose}
      anchorOrigin={
        isNotPhone
          ? { horizontal: "right", vertical: "top" }
          : { horizontal: "center", vertical: "bottom" }
      }
    >
      {snackBarTypes[snackBar.snackBarType]}
    </Snackbar>
  );
};

export default SnackBarComponent;
