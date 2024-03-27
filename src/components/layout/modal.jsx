import React from "react";
import { Alert, AlertTitle, Button, Snackbar, useMediaQuery } from "@mui/material";
import { deactivateModal,} from "../../state/store";
import { useSelector, useDispatch } from "react-redux";

const Modal = () => {
    const isNotPhone = useMediaQuery("(min-width:1000px)")
  const modal = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(deactivateModal());
  };

  const modalTypes = {
    error: (
      <Alert severity="error">
        <AlertTitle>{modal.message.title || "Error"}</AlertTitle>
        {modal.message.description}
      </Alert>
    ),
    info: (
      <Alert severity="info">
        <AlertTitle>{modal.message.title || "Info"}</AlertTitle>
        {modal.message.description}
      </Alert>
    ),
    success: (
      <Alert severity="success">
        <AlertTitle>{modal.message.title || "Success"}</AlertTitle>
        {modal.message.description}
      </Alert>
    ),
    warning: (
      <Alert severity="warning">
        <AlertTitle>{modal.message.title || "Warning"}</AlertTitle>
        {modal.message.description}
      </Alert>
    ),
  };

  return (
    <Snackbar
      open={modal.on}
      autoHideDuration={5000}
      action={<Button size="small" onClick={handleModalClose}>ok</Button>}
      onClose={handleModalClose}
      anchorOrigin={isNotPhone ? {horizontal:"right", vertical:"top"} : {horizontal:"center", vertical:"bottom"}}
    >
      {modalTypes[modal.modalType]}
    </Snackbar>
  );
};

export default Modal;
