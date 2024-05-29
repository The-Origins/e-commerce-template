import {
  ChevronLeft,
  Email,
  Facebook,
  Google,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VerificationComponent from "./verificationComponent";
import { setUser } from "../../../state/store";
import { useDispatch } from "react-redux";
import data from "../../../lib/data";

const Login = ({
  changeIsLoading,
  changeLoadingMessage,
  changeIsSuccess,
  changeSuccessDetails,
  successDetails,
  changeIsError,
  changeErrorDetails,
}) => {
  const dispatch = useDispatch();
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [stage, setStage] = useState(0);

  const handlePassChange = () => {
    changeIsLoading(true);
    changeLoadingMessage("Changing password");
    setTimeout(() => {
      changeIsLoading(false);
      changeIsSuccess(true);
      changeSuccessDetails({
        message: "password changed successfully",
        action: () => {
          changeIsSuccess(false);
          setStage(1)
        },
        actionTitle: "Back to login",
      });
    }, 5000);
  };

  const handleLogin = () => {
    changeIsLoading(true);
    changeLoadingMessage("Verifying");
    setTimeout(() => {
      dispatch(setUser(data.user));
      changeIsLoading(false);
      changeIsSuccess(true);
      changeSuccessDetails({
        ...successDetails,
        message: "Logged in",
      });
    }, 5000);
  };

  const stages = [
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
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
    </Box>,
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <TextField variant="outlined" type="email" label={"email"} />
        <TextField
          variant="outlined"
          type={isPassVisible ? "text" : "password"}
          label={"password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setIsPassVisible((prev) => !prev)}>
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={() => setStage(2)}>Forgot password?</Button>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setStage(0)}>Back</Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={handleLogin}
        >
          Login
        </Button>
      </Box>
    </Box>,
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      height={"100%"}
      justifyContent={"space-evenly"}
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
        <TextField fullWidth label="email" />
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
          onClick={() => {
            setStage(4);
          }}
        >
          confirm
        </Button>
      </Box>
    </Box>,
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
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
          Change your password
        </Typography>
        <TextField fullWidth label="new password" type="password" />
        <TextField fullWidth label="confirm password" type="password" />
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
          onClick={handlePassChange}
        >
          change
        </Button>
      </Box>
    </Box>,
    <VerificationComponent
      {...{
        changeIsLoading,
        changeLoadingMessage,
        changeIsSuccess,
        changeSuccessDetails,
        successDetails,
        changeIsError,
        changeErrorDetails,
      }}
      handleVerified={() => setStage(3)}
    />,
  ];
  return (
    <Box display={"inline-block"} width={"100%"} height={"100%"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        width={"100%"}
        height={"100%"}
        color={"black"}
      >
        <Typography
          mt={"10px"}
          fontFamily={"pacifico"}
          fontSize={"clamp(1rem, 5vw, 2rem)"}
        >
          Login
        </Typography>
        <Box
          display="flex"
          width={"100%"}
          height={"80%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {stages[stage]}
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
