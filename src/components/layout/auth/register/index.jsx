import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import RegisterStages from "./stages";
import { useSelector } from "react-redux";

const Register = ({
  changeIsLoading,
  changeLoadingMessage,
  changeIsSuccess,
  changeSuccessDetails,
  successDetails,
  changeIsError,
  changeErrorDetails,
  changeAuth,
}) => {
  const theme = useTheme();
  const region = useSelector((state) => state.region);
  const [stage, setStage] = useState(0);
  const [address, setAddress] = useState({ type: "other" });
  const [payment, setPayment] = useState({});

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    phoneCode: region.country_calling_code || "+1",
    password: "",
    confirmPassword: "",
  };

  const validator = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    phoneNumber: yup
      .number()
      .typeError("Invalid phone number")
      .required("required"),
    password: yup
      .string()
      .min(8, "minimum of 8 characters")
      .required("required"),
    confirmPassword: yup
      .string()
      .min(8, "minimum of 8 characters")
      .oneOf([yup.ref("password"), null], "passwords don't match")
      .required("required"),
  });

  const handleFormSubmit = (values, submitProps) => {
    console.log({
      name: { first: values.firstName, last: values.lastName },
      phone: { number: values.phoneNumber, code: values.phoneCode },
      email: values.email,
      password: values.password,
      address,
      payment,
    });
    submitProps.resetForm();
  };

  return (
    <Box
      display={"inline-block"}
      position={"relative"}
      width={"100%"}
      height={"100%"}
    >
      <Box
        position={"absolute"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
        color={"black"}
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            bgcolor: "transparent",
            width: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "25px",
            bgcolor: theme.palette.grey[300],
          },
          "&::-webkit-scrollbar-thumb:hover": {
            cursor: "pointer",
            bgcolor: theme.palette.grey[400],
          },
        }}
      >
        <Typography
          mt={"10px"}
          fontFamily={"pacifico"}
          fontSize={"clamp(1rem, 5vw, 2rem)"}
        >
          {stage === 0 ? " " : "Register"}
        </Typography>
        <Box width={"100%"} height={"100%"}>
          <Formik
            initialValues={initialValues}
            validationSchema={validator}
            onSubmit={handleFormSubmit}
          >
            {(form) => (
              <form
                onSubmit={form.handleSubmit}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                  padding: "20px",
                }}
              >
                <RegisterStages
                  form={form}
                  {...{
                    form,
                    stage,
                    setStage,
                    setPayment,
                    address,
                    setAddress,
                    changeIsLoading,
                    changeLoadingMessage,
                    changeIsSuccess,
                    changeSuccessDetails,
                    successDetails,
                    changeIsError,
                    changeErrorDetails,
                    changeAuth,
                    handleRegister,
                  }}
                />
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
