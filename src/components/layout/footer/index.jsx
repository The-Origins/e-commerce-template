import React from "react";
import {
  Copyright,
  Facebook,
  Instagram,
  Language,
  LinkedIn,
  PhoneInTalk,
  Policy,
  Send,
  Twitter,
  InsertLink,
} from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "gatsby";
import FooterIconLink from "./iconLink";
import FooterLink from "./footerLink";

const Footer = ({ setIsContact }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  return (
    <footer style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        borderTop={`1px solid ${theme.palette.grey[400]}`}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={"30px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={isNotPhone ? "80%" : "90%"}
          padding={"20px 0px"}
        >
          <Box
            display={"flex"}
            flexWrap={"wrap"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Typography>Need any assistance?</Typography>
            <Button
              endIcon={<PhoneInTalk />}
              onClick={() => setIsContact(true)}
              variant="contained"
              disableElevation
              color="primary"
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
        minHeight={"40vh"}
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
          <Box
            width={"100%"}
            display={"flex"}
            flexWrap={"wrap"}
            padding={"20px"}
            justifyContent={"space-between"}
            gap={"50px"}
          >
            <Box
              height={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"flex-start"}
            >
              <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
                <Typography
                  fontSize={"2rem"}
                  sx={{
                    typography: "secondaryFont",
                    fontWeight: "bold",
                  }}
                >
                  {theme.title}
                </Typography>
              </Link>
              <Typography color={"text.secondary"}>Our slogan</Typography>
            </Box>
            <Box
              flexBasis={"143px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Typography
                fontWeight={"bold"}
                display={"flex"}
                gap={"5px"}
                alignItems={"center"}
              >
                <Language sx={{ fontSize: "1rem" }} />
                Website
              </Typography>
              <FooterLink path={"/"}>Home</FooterLink>
              <FooterLink path={"/about"}>About</FooterLink>
              <button
                onClick={() => setIsContact(true)}
                style={{
                  border: "none",
                  padding: "0px",
                  textTransform: "none",
                  display: "flex",
                  backgroundColor: "transparent",
                  fontSize: "initial",
                  marginTop: "2px",
                }}
              >
                <FooterLink>Contact us</FooterLink>
              </button>
            </Box>
            <Box
              flexBasis={"143px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Typography
                fontWeight={"bold"}
                display={"flex"}
                gap={"5px"}
                alignItems={"center"}
              >
                <InsertLink />
                Quick links
              </Typography>
              <FooterLink path={"/category?search=electronics"}>
                Electronics
              </FooterLink>
              <FooterLink path={"/category?search=clothing"}>
                Clothing
              </FooterLink>
              <FooterLink path={"/category?search=food"}>Food</FooterLink>
            </Box>
            <Box
              flexBasis={"143px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Typography
                fontWeight={"bold"}
                display={"flex"}
                gap={"5px"}
                alignItems={"center"}
              >
                <Policy sx={{ fontSize: "1rem" }} />
                Legal links
              </Typography>
              <FooterLink path={"/legal/terms-of-service"}>
                Terms of service
              </FooterLink>
              <FooterLink path={"/legal/privacy-policy"}>
                Privacy policy
              </FooterLink>
              <FooterLink path={"/legal/return-policy"}>
                Return policy
              </FooterLink>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
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
              </Box>
            </Box>
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
          <Link
            to={"https://www.linkedin.com/in/joshua-kanyori-67b83428b/"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              fontSize={"0.8rem"}
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                transition: "0.3s",
                ":hover": { color: "primary.main" },
              }}
            >
              <Copyright color={"text.secondary"} fontSize={"12px"} />
              Copyright 2024 | Wegastudios
            </Typography>
          </Link>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
