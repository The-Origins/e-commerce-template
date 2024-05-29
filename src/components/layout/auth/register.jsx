import {
  AddLocation,
  East,
  Lock,
  Payment,
  Payments,
  Person,
  PhoneAndroid,
  PhoneInTalk,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import VerificationComponent from "./verificationComponent";

const Register = ({
  changeIsLoading,
  changeLoadingMessage,
  changeIsSuccess,
  changeSuccessDetails,
  successDetails,
  changeIsError,
  changeErrorDetails,
  setAuth
}) => {
  const theme = useTheme();
  const [stage, setStage] = useState(0);
  const [search, setSearch] = useState("");
  const [verificationType, setVerificationType] = useState("email");

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleVerified = () => {
    changeIsSuccess(true);
    setAuth("login");
    changeSuccessDetails({
      action: () => {
        changeIsSuccess(false);
      },
      actionTitle: "back to login",
      message: "Account created successfully",
    });
  };

  const handleCardVerification = () => {
    changeIsLoading(true);
    changeLoadingMessage("Verifying");
    setTimeout(() => {
      changeIsLoading(false);
      changeIsSuccess("true");
      changeSuccessDetails({
        action: () => {
          changeIsSuccess(false);
        },
        actionTitle: "back to login",
        message: "Account created successfully",
      });
      setAuth("login");
    }, 5000);
  };

  const stages = [
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={"30px"}
      mb={"50px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Typography
          mt={"10px"}
          fontFamily={"pacifico"}
          fontSize={"clamp(1rem, 5vw, 2rem)"}
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
    </Box>,
    <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
      <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
            color={"text.secondary"}
            padding={"5px"}
          >
            <Person fontSize={" 0.7rem"} />
            <Typography
              fontSize={" 0.7rem"}
              sx={{ "& > span": { color: "primary.main" } }}
            >
              name<span>*</span>
            </Typography>
          </Box>
          <Box
            border={`1px solid ${theme.palette.grey[300]}`}
            padding={"10px"}
            borderRadius={"10px"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={"20px"}
          >
            <TextField variant="outlined" type="name" label={"First name"} />
            <TextField variant="outlined" type="name" label={"Last name"} />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
            color={"text.secondary"}
            padding={"5px"}
          >
            <PhoneInTalk fontSize={" 0.7rem"} />
            <Typography
              fontSize={" 0.7rem"}
              sx={{ "& > span": { color: "primary.main" } }}
            >
              contact<span>*</span>
            </Typography>
          </Box>
          <Box
            border={`1px solid ${theme.palette.grey[300]}`}
            padding={"10px"}
            borderRadius={"10px"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={"20px"}
          >
            <TextField variant="outlined" type="email" label={"Email"} />
            <TextField variant="outlined" type="tel" label={"Phone number"} />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
            color={"text.secondary"}
            padding={"5px"}
          >
            <Lock fontSize={" 0.7rem"} />
            <Typography
              fontSize={" 0.7rem"}
              sx={{ "& > span": { color: "primary.main" } }}
            >
              password<span>*</span>
            </Typography>
          </Box>
          <Box
            border={`1px solid ${theme.palette.grey[300]}`}
            padding={"10px"}
            borderRadius={"10px"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={"20px"}
          >
            <TextField
              variant="outlined"
              type={"password"}
              label={"Password"}
            />
            <TextField
              variant="outlined"
              type={"password"}
              label={"Confirm password"}
            />
          </Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={() => setStage(2)}
        >
          next
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
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"1.3rem"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <AddLocation />
          Add your adress
        </Typography>
        <Box display={"flex"} flexDirection={"column"}>
          <TextField
            type="search"
            label="search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton disabled={!search.length} onClick={handleSearch}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box></Box>
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
          onClick={() => setStage(3)}
        >
          next
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
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Payments />
          Add a payment method
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Typography color={"text.secondary"}>select payment type</Typography>
          <Button
            sx={{ width: "300px", height: "50px" }}
            variant="outlined"
            startIcon={<Payment />}
            onClick={() => setStage(4)}
          >
            card
          </Button>
          <Button
            sx={{ width: "300px", height: "50px" }}
            variant="outlined"
            startIcon={<PhoneAndroid />}
            onClick={() => setStage(5)}
          >
            mobile
          </Button>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={() => setStage(2)}>
          Back
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
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Payment />
          Add Card details
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <TextField type="text" label="Full name" fullWidth />
          <TextField type="number" label="Card number" fullWidth />
          <Box display={"flex"} gap={"20px"} flexWrap={"wrap"}>
            <TextField label={"Expiry"} />
            <TextField label={"CVV"} />
          </Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={() => setStage(3)}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={handleCardVerification}
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
          <PhoneAndroid />
          Add your mobile number
        </Typography>
        <TextField label="phone number" />
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button variant="outlined" disableElevation onClick={() => setStage(3)}>
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation
          onClick={() => {
            setStage(6);
            setVerificationType("phone");
          }}
        >
          confirm
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
      type={verificationType}
      handleVerified={handleVerified}
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
          {stage === 0 ? " " : "Register"}
        </Typography>
        <Box
          display="flex"
          width={"100%"}
          height={"80%"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"20px"}
        >
          {stages[stage]}
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
