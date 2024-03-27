import { useTheme } from "@emotion/react";
import { Build, Cake, Copyright, EmailOutlined, Facebook, Info, Instagram, LinkedIn, PhoneInTalk, PlaceOutlined, PublicOutlined, Send, Twitter, WhatsApp } from "@mui/icons-material";
import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import FooterIconLink from "./footerIconLink";
import { Link } from "gatsby";
import FooterLegalLink from "./footerLegalLink";
import FooterLink from "./footerLink";

const Footer = (props) => {
    const theme = useTheme()
    const isNotPhone = useMediaQuery("(min-width:1000px)")
  return (
    <footer style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        borderTop={`1px solid ${theme.palette.grey[400]}`}
        width={"100%"}
        minHeight={"80px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          margin={isNotPhone ? undefined : "30px 0px 30px 0px"}
          display={"flex"}
          flexDirection={isNotPhone ? "row" : "column"}
          gap={isNotPhone ? undefined : "50px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={isNotPhone ? "80%" : "90%"}
        >
          <Box
            display={"flex"}
            flexDirection={isNotPhone ? "row" : "column"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Typography>Need any assistance?</Typography>
            <Button
              endIcon={<PhoneInTalk />}
              onClick={() => props.changeIsContact(true)}
              variant="contained"
              disableElevation
              color="primary"
              sx={{ height: "40px", width: "300px", borderRadius: "25px" }}
            >
              Contact us
            </Button>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} gap={"20px"}>
            <FooterIconLink
              path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/"
              icon={<Instagram />}
            />
            <FooterIconLink
              path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/"
              icon={<Twitter />}
            />
            <FooterIconLink
              path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/"
              icon={<Facebook />}
            />
            <FooterIconLink
              path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/"
              icon={<LinkedIn />}
            />
          </Box>
        </Box>
      </Box>
      <Box
        minHeight={"50vh"}
        width={"100%"}
        borderBottom={`1px solid ${theme.palette.grey[400]}`}
        borderTop={`1px solid ${theme.palette.grey[400]}`}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        pb={isNotPhone ? undefined : "50px"}
      >
        <Box
          width={isNotPhone ? "80%" : "90%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link
            href="/"
            fontSize={"2rem"}
            sx={{
              mt: isNotPhone ? undefined : "50px",
              textDecoration: "none",
              color: "black",
              fontFamily: "Pacifico",
            }}
          >
            Wendoh Cakes
          </Link>
          <Typography color={"text.secondary"} mb={"50px"}>
            Made with love
          </Typography>
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={isNotPhone ? "row" : "column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"50px"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              {isNotPhone && (
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography fontWeight={"bold"}>
                    Sign up for our newsletter
                  </Typography>
                  <Typography fontSize={"13px"} mb={"10px"}>
                    Sign up to receive news and updates on our products
                  </Typography>
                  <TextField
                    type="email"
                    label="Your email"
                    variant="outlined"
                    sx={{
                      width: "100%",
                      height: "30px",
                      textAlign: "center",
                      "& > div > input": { color: "black" },
                      mb: "30px",
                    }}
                  ></TextField>
                  <Button
                    endIcon={<Send />}
                    disableElevation
                    variant="contained"
                    sx={{
                      mt: "10px",
                      alignSelf: isNotPhone ? "flex-end" : "flex-start",
                    }}
                  >
                    Send
                  </Button>
                  <Box
                    mt={"20px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"2px"}
                  >
                    <FooterLegalLink>Terms of service</FooterLegalLink>
                    <Typography color={"text.secondary"} fontSize={"12px"}>
                      {" "}
                      |{" "}
                    </Typography>
                    <FooterLegalLink>Privacy policy</FooterLegalLink>
                    <Typography color={"text.secondary"} fontSize={"12px"}>
                      {" "}
                      |{" "}
                    </Typography>
                    <FooterLegalLink>Refund policy</FooterLegalLink>
                  </Box>
                </Box>
              )}
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
              <FooterLink>
                <Build /> Build your own cake
              </FooterLink>
              <FooterLink>
                <Cake /> Our cake catalogue
              </FooterLink>
              <FooterLink>
                <Info />
                About us
              </FooterLink>
              <Button
                onClick={() => props.changeIsContact(true)}
                fontSize={"1rem"}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  padding: 0,
                  textDecoration: "none",
                  color: "black",
                  gap: "10px",
                  transition: "0.3s",
                  ":hover": {
                    color: "primary.main",
                    bgcolor: "transparent",
                  },
                }}
              >
                <PhoneInTalk />
                Contact us
              </Button>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
              <FooterLink path="tel:(+254)700000000">
                <WhatsApp />
                (+254)700000000
              </FooterLink>
              <FooterLink path="mailto:myemail@gmail.com">
                <EmailOutlined />
                myemail@gmail.com
              </FooterLink>
              <FooterLink path="https://www.website.com">
                <PublicOutlined />
                www.wendohcakes.com
              </FooterLink>
              <Box display={"flex"}>
                <PlaceOutlined />
                <Typography marginLeft={"10px"} sx={{ fontWeight: "light" }}>
                  Nairobi, Kenya
                </Typography>
              </Box>
            </Box>
            {!isNotPhone && (
              <Box display={"flex"} flexDirection={"column"}>
                <Typography fontWeight={"bold"}>
                  Sign up for our newsletter
                </Typography>
                <Typography fontSize={"13px"} mb={"10px"}>
                  Sign up to receive news and updates on our products
                </Typography>
                <TextField
                  type="email"
                  label="Your email"
                  variant="outlined"
                  sx={{
                    width: "100%",
                    height: "30px",
                    textAlign: "center",
                    "& > div > input": { color: "black" },
                    mb: "30px",
                  }}
                ></TextField>
                <Button
                  endIcon={<Send />}
                  disableElevation
                  variant="contained"
                  sx={{
                    mt: "10px",
                    alignSelf: isNotPhone ? "flex-end" : "flex-start",
                  }}
                >
                  Send
                </Button>
                <Box
                  mt={"20px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"2px"}
                >
                  <FooterLegalLink>Terms of service</FooterLegalLink>
                  <Typography color={"text.secondary"} fontSize={"12px"}>
                    {" "}
                    |{" "}
                  </Typography>
                  <FooterLegalLink>Privacy policy</FooterLegalLink>
                  <Typography color={"text.secondary"} fontSize={"12px"}>
                    {" "}
                    |{" "}
                  </Typography>
                  <FooterLegalLink>Refund policy</FooterLegalLink>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"50px"}
      >
        <Box
          display={"flex"}
          width={isNotPhone ? "80%" : "90%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={"2px"}>
            <Copyright color={"text.secondary"} fontSize={"12px"} />
            <FooterLegalLink>Copyright 2023 | Wegastudios</FooterLegalLink>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
