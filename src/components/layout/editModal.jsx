import { Close } from "@mui/icons-material";
import { Backdrop, Box, Button, IconButton, useTheme } from "@mui/material";
import React, { useState } from "react";
import LoadingComponent from "./loadingComponent";
import ErrorComponent from "./errorComponent";
import SuccessComponent from "./successComponent";

const EditModal = ({ isEdit, width, height, handleClose, children }) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorDetails, setErrorDetails] = useState({
    message: "",
    action: () => {},
    actionTitle: "ok",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [successDetails, setSuccessDetails] = useState({
    message: "",
    action: () => {},
    actionTitle: "ok",
  });

  const resetDetails = () => {
    setIsSuccess(false);
    setSuccessDetails({
      message: "",
      action: () => {},
      actionTitle: "ok",
    });
    setIsError(false);
    setErrorDetails({
      message: "",
      action: () => {},
      actionTitle: "ok",
    });
  };

  const mappedChildren = React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // Clone the child element and add props and loading, success and error info
      return React.cloneElement(child, {
        setIsLoading,
        setLoadingMessage,
        setIsError,
        setErrorDetails,
        setIsSuccess,
        setSuccessDetails,
      });
    }
    // Return the child if it's not a React element (e.g., text nodes)
    return child;
  });

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 2 }} open={isEdit}>
      <Box
        position={"relative"}
        width={width || "min(300px, 90%)"}
        height={
          height
            ? height
            : isLoading || isError || isSuccess
            ? "500px"
            : undefined
        }
        borderRadius={"25px"}
        boxShadow={`0px 0px 1px 10px ${theme.palette.grey}`}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color="black"
        sx={{
          transitionDelay: "0.1s",
          transition: `0.3s ease-out`,
          transform: `scale(${isEdit ? 1 : 0})`,
        }}
        overflow={"hidden"}
      >
        {isLoading ? (
          <LoadingComponent message={loadingMessage} />
        ) : isError ? (
          <ErrorComponent details={errorDetails} resetDetails={resetDetails} />
        ) : isSuccess ? (
          <SuccessComponent
            details={successDetails}
            resetDetails={resetDetails}
          />
        ) : (
          <>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"flex-end"}
              padding={"20px"}
            >
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
            <Box height={"100%"} width={"100%"} padding={"0px 20px 20px 20px"}>
              {mappedChildren}
            </Box>
          </>
        )}
      </Box>
    </Backdrop>
  );
};

export default EditModal;
