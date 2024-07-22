import React, { useState } from "react";
import {
  useMediaQuery,
  IconButton,
  Box,
  Typography,
  Backdrop,
  useTheme,
} from "@mui/material";
import { PhoneInTalk, Mail, Close } from "@mui/icons-material";

const ContactModal = ({ isContact, setIsContact }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  return (
    <Backdrop sx={{ color: "#fff", zIndex: 2 }} open={isContact}>
      <Box
        width={isNotPhone ? "50%" : "80%"}
        height={"400px"}
        borderRadius={"25px"}
        boxShadow={`0px 0px 1px 10px ${theme.palette.grey}`}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        position={"relative"}
        sx={{
          transitionDelay: "0.1s",
          transition: `0.3s ease-in-out`,
          transform: `scale(${isContact ? 1 : 0})`,
        }}
      >
        <Box
          position={"absolute"}
          top={0}
          width={"100%"}
          display={"flex"}
          justifyContent={"flex-end"}
        >
          <IconButton
            onClick={() => setIsContact(false)}
            sx={{ m: "15px", color: "black" }}
          >
            <Close />
          </IconButton>
        </Box>
        <Typography
          textAlign={"center"}
          fontSize={"1.5rem"}
          fontWeight={"bold"}
          color={"black"}
        >
          Contact us
        </Typography>
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexDirection={isNotPhone ? "row" : "column"}
          gap={"20px"}
        >
          {isNotPhone ? (
            <button
              onClick={() => {
                setShowPhone((prev) => !prev);
              }}
              style={{
                backgroundColor: "white",
                width: "200px",
                padding: 0,
                height: "200px",
                border: `1px solid ${theme.palette.primary.main}`,
                position: "relative",
                overflow: "hidden",
                borderRadius: "50%",
                color: "black",
                transition: "0.3s",
              }}
            >
              <Box
                height="100%"
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
                overflow={"hidden"}
                color={"primary.main"}
                sx={{
                  transition: "0.3s",
                  ":hover": {
                    bgcolor: "primary.main",
                    color: "white",
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  width={"80%"}
                  gap={"15px"}
                >
                  <PhoneInTalk />
                  <Typography fontSize={"15px"}>BY PHONE</Typography>
                </Box>
                <Box
                  className={"contact-info"}
                  position={"absolute"}
                  width={"100%"}
                  height={"100%"}
                  top={showPhone ? 0 : "100%"}
                  bgcolor={"primary.main"}
                  color={"white"}
                  sx={{ transition: "0.3s" }}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography>+254000000000</Typography>
                </Box>
              </Box>
            </button>
          ) : (
            <a
              href="tel:+254000000000"
              style={{
                width: "80%",
                textDecoration: "none",
              }}
            >
              <button
                onClick={() => {
                  setShowPhone(true);
                }}
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  padding: 0,
                  height: isNotPhone ? "200px" : "70px",
                  border: `1px solid ${theme.palette.primary.main}`,
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: isNotPhone ? "50%" : "15px",
                  transition: "0.3s",
                }}
              >
                <Box
                  height="100%"
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  position={"relative"}
                  overflow={"hidden"}
                  color={"primary.main"}
                  sx={{
                    transition: "0.3s",
                    ":hover": {
                      bgcolor: "primary.main",
                      color: "white",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    display={"flex"}
                    flexDirection={isNotPhone ? "column" : "row"}
                    alignItems={"center"}
                    width={"80%"}
                    gap={"15px"}
                  >
                    <PhoneInTalk />
                    <Typography fontSize={"15px"}>BY PHONE</Typography>
                  </Box>
                  <Box
                    className={"contact-info"}
                    position={"absolute"}
                    width={"100%"}
                    height={"100%"}
                    top={showPhone ? 0 : "100%"}
                    bgcolor={"primary.main"}
                    color={"white"}
                    sx={{ transition: "0.3s" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography>+254000000000</Typography>
                  </Box>
                </Box>
              </button>
            </a>
          )}
          <p style={{ color: "black" }}>or</p>
          <a
            href="mailto:me@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: isNotPhone ? "200px" : "80%",
              textDecoration: "none",
            }}
          >
            <button
              onClick={() => {
                setShowEmail(true);
              }}
              style={{
                width: "100%",
                backgroundColor: "white",
                padding: 0,
                height: isNotPhone ? "200px" : "70px",
                border: `1px solid ${theme.palette.primary.main}`,
                position: "relative",
                overflow: "hidden",
                borderRadius: isNotPhone ? "50%" : "15px",
                transition: "0.3s",
              }}
            >
              <Box
                height="100%"
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"relative"}
                overflow={"hidden"}
                color={"primary.main"}
                sx={{
                  transition: "0.3s",
                  ":hover": {
                    bgcolor: "primary.main",
                    color: "white",
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={isNotPhone ? "column" : "row"}
                  alignItems={"center"}
                  width={"80%"}
                  gap={"15px"}
                >
                  <Mail />
                  <Typography fontSize={"15px"}>BY EMAIL</Typography>
                </Box>
                <Box
                  className={"contact-info"}
                  position={"absolute"}
                  width={"100%"}
                  height={"100%"}
                  top={showEmail ? 0 : "100%"}
                  bgcolor={"primary.main"}
                  color={"white"}
                  sx={{ transition: "0.3s" }}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography>me@gmail.com</Typography>
                </Box>
              </Box>
            </button>
          </a>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default ContactModal;
