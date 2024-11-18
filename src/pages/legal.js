import {
  Box,
  ClickAwayListener,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import legalData from "../../lib/legal.json";
import SidebarLink from "../components/legal/sidebarLink";
import SectionComponent from "../components/legal/sectionComponent";
import { Menu } from "@mui/icons-material";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";

const LegalPage = ({ location }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const containerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [currentPath, setCurrentPath] = useState("");
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const [path, section] = location.pathname.replace(__PATH_PREFIX__, "").split("/").slice(2);
    if (
      !["terms-of-service", "privacy-policy", "return-policy"].includes(path)
    ) {
      navigate("/legal/terms-of-service");
    }
    setCurrentPath(path);
    setCurrentSection(section.split("+").join(" "));
  }, [location.pathname]);

  const handleClickAway = (event) => {
    if (menuButtonRef.current && menuButtonRef.current.contains(event.target)) {
      return;
    }
    setIsMobileMenu(false);
  };

  return (
    <>
      <Helmet>
        <title>
          {currentPath.charAt(0).toUpperCase() +
            currentPath.substring(1).split("-").join(" ") +
            ` | ${theme.title}`}
        </title>
        <meta name="description" content={`Legal | ${currentPath}`} />
      </Helmet>
      <Box minHeight={"100vh"} display={"flex"} justifyContent={"center"}>
        <Box
          width={isNotPhone ? "80%" : "100%"}
          display={"flex"}
          gap={"30px"}
          alignItems={"flex-start"}
          position={"relative"}
        >
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box
              top={74}
              left={20}
              position={isNotPhone ? "static" : "absolute"}
              display={"flex"}
              flexDirection={"column"}
              width={isNotPhone ? "300px" : isMobileMenu ? "300px" : "0px"}
              borderRadius={isNotPhone ? "20px" : "0px"}
              boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
              bgcolor={"white"}
              overflow={"hidden"}
              sx={{ transition: "0.3s ease-in-out" }}
            >
              <Box
                maxHeight={"65vh"}
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
                <Box
                  padding={
                    isNotPhone ? "20px" : isMobileMenu ? "0px 20px" : "0px"
                  }
                >
                  <SidebarLink
                    path={"terms-of-service"}
                    {...{ currentPath, currentSection, setIsMobileMenu }}
                  >
                    Terms of service
                  </SidebarLink>
                  <SidebarLink
                    path={"privacy-policy"}
                    {...{ currentPath, currentSection, setIsMobileMenu }}
                  >
                    Privacy policy
                  </SidebarLink>
                  <SidebarLink
                    path={"return-policy"}
                    {...{ currentPath, currentSection, setIsMobileMenu }}
                  >
                    Return policy
                  </SidebarLink>
                </Box>
              </Box>
            </Box>
          </ClickAwayListener>
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            padding={"20px"}
            gap={"20px"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
              width={"100%"}
            >
              <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                {!isNotPhone && (
                  <IconButton
                    ref={menuButtonRef}
                    onClick={() => setIsMobileMenu((prev) => !prev)}
                    sx={{ color: isMobileMenu ? "primary.main" : undefined }}
                  >
                    <Menu />
                  </IconButton>
                )}
                <Typography
                  sx={{
                    fontSize: "clamp(1rem, 5vw, 2rem)",
                    typography: "secondaryFont",
                    fontWeight: "bold",
                  }}
                >
                  {currentPath.charAt(0).toUpperCase() +
                    currentPath.substring(1).split("-").join(" ")}
                </Typography>
              </Box>
              <Box width={"100%"} height={"3px"} bgcolor={"primary.main"} />
            </Box>
            <Box
              ref={containerRef}
              width={"100%"}
              height={"72vh"}
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
              <Box
                display={"flex"}
                flexDirection={"column"}
                padding={"20px"}
                gap={"20px"}
              >
                {Object.keys(legalData[currentPath] || {}).map((section) => (
                  <SectionComponent
                    {...{ containerRef, section, currentSection }}
                  >
                    <Typography
                      fontSize={"1.2rem"}
                      fontWeight={"bold"}
                      sx={{
                        color:
                          currentSection === section ? "primary.main" : "black",
                      }}
                    >
                      {section.charAt(0).toUpperCase() + section.substring(1)}
                    </Typography>
                    <Typography>{legalData[currentPath][section]}</Typography>
                  </SectionComponent>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LegalPage;
