import React from "react";
import { Alert, AlertTitle, Snackbar, useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSnackBar } from "../../state/snackBar";

const SnackBarComponent = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const snackBar = useSelector((state) => state.snackBar);
  const dispatch = useDispatch();

  const handleSnackBarClose = () => {
    dispatch(setSnackBar({ on: false }));
  };

  const snackBarTypes = {
    ERROR: (
      <Alert severity="error" color="error" variant="filled">
        <AlertTitle>{snackBar.title || "Error"}</AlertTitle>
        {snackBar.message}
      </Alert>
    ),
    INFO: (
      <Alert severity="info" color="info" variant="filled">
        <AlertTitle>{snackBar.title || "Info"}</AlertTitle>
        {snackBar.message}
      </Alert>
    ),
    SUCCESS: (
      <Alert severity="success" color="success" variant="filled">
        <AlertTitle>{snackBar.title || "Success"}</AlertTitle>
        {snackBar.message}
      </Alert>
    ),
    WARNING: (
      <Alert severity="warning" color="warning" variant="filled">
        <AlertTitle>{snackBar.title || "Warning"}</AlertTitle>
        {snackBar.message}
      </Alert>
    ),
  };

  return (
    <Snackbar
      open={snackBar.on}
      autoHideDuration={5000}
      onClose={handleSnackBarClose}
      anchorOrigin={
        isNotPhone
          ? { horizontal: "right", vertical: "top" }
          : { horizontal: "center", vertical: "bottom" }
      }
    >
      {snackBarTypes[snackBar.type]}
    </Snackbar>
  );
};

export default SnackBarComponent;
