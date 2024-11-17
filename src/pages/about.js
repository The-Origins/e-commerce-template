import { ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "gatsby";
import React, { useEffect } from "react";
import TeamMemberCard from "../components/about/teamMemberCard";
import { Helmet } from "react-helmet";

const About = () => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Helmet>
        <title>About us</title>
        <meta name="description" content="About us page" />
      </Helmet>
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box
          width={isNotPhone ? "80%" : "90%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"60px"}
        >
          <Box
            width={"100%"}
            height={"20vh"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            borderBottom={`5px solid ${theme.palette.primary.main}`}
          >
            <Typography
              sx={{
                typography: "secondaryFont",
                fontWeight: "bold",
                fontSize: "clamp(1.2rem, 10vw, 3rem)",
              }}
            >
              About us
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Our slogan and vision
            </Typography>
          </Box>
          <Box
            minHeight={"70vh"}
            display={"flex"}
            flexDirection={"column"}
            gap={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              variant="h2"
              sx={{
                typography: "secondaryFont",
                fontWeight: "bold",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
              }}
            >
              Our History
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              width={"100%"}
              gap={"40px"}
              flexDirection={isNotPhone ? "row" : "column"}
            >
              <Box
                width={"100%"}
                height={isNotPhone ? "300px" : "200px"}
                sx={{
                  backgroundImage: `url(https://images.pexels.com/photos/3617559/pexels-photo-3617559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Box display={"flex"} width={"100%"} gap={"20px"}>
                {isNotPhone && <Box width={"5px"} bgcolor={"primary.main"} />}
                <Typography
                  width={"100%"}
                  lineHeight={"30px"}
                  textAlign={"center"}
                  sx={{
                    "& > span": { fontWeight: "bold", fontSize: "1.3rem" },
                  }}
                >
                  <span>L</span>orem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum vitae lectus at libero venenatis
                  commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel
                  bibendum vulputate. Nulla facilisi. In hac habitasse platea
                  dictumst. Integer sed lectus auctor, suscipit nisl in,
                  bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt.
                  Proin in sagittis arcu. Quisque ut purus nec tortor eleifend
                  rhoncus. Suspendisse potenti.In hac habitasse platea dictumst.
                  Integer sed lectus auctor, suscipit nisl in, bibendum dui.
                  Vivamus sit amet metus ut elit auctor tincidunt. Proin in
                  sagittis arcu. Quisque ut purus nec tortor eleifend rhoncus.
                  Suspendisse potenti.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            minHeight={"70vh"}
            display={"flex"}
            flexDirection={"column"}
            gap={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              variant="h2"
              sx={{
                typography: "secondaryFont",
                fontWeight: "bold",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
              }}
            >
              Our Approach
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              width={"100%"}
              gap={"30px"}
              flexDirection={isNotPhone ? "row" : "column-reverse"}
            >
              <Box display={"flex"} width={"100%"} gap={"20px"}>
                <Typography
                  width={"100%"}
                  lineHeight={"30px"}
                  textAlign={"center"}
                  sx={{
                    "& > span": { fontWeight: "bold", fontSize: "1.3rem" },
                  }}
                >
                  <span>L</span>orem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum vitae lectus at libero venenatis
                  commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel
                  bibendum vulputate. Nulla facilisi. In hac habitasse platea
                  dictumst. Integer sed lectus auctor, suscipit nisl in,
                  bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt.
                  Proin in sagittis arcu. Quisque ut purus nec tortor eleifend
                  rhoncus. Suspendisse potenti.In hac habitasse platea dictumst.
                  Integer sed lectus auctor, suscipit nisl in, bibendum dui.
                  Vivamus sit amet metus ut elit auctor tincidunt. Proin in
                  sagittis arcu. Quisque ut purus nec tortor eleifend rhoncus.
                  Suspendisse potenti.
                </Typography>
                {isNotPhone && <Box width={"5px"} bgcolor={"primary.main"} />}
              </Box>
              <Box
                width={"100%"}
                height={isNotPhone ? "300px" : "200px"}
                sx={{
                  backgroundImage: `url(https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Box>
          </Box>
          <Box
            minHeight={"70vh"}
            display={"flex"}
            flexDirection={"column"}
            gap={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              variant="h2"
              sx={{
                typography: "secondaryFont",
                fontWeight: "bold",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
              }}
            >
              Our Services
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              width={"100%"}
              gap={"40px"}
              flexDirection={isNotPhone ? "row" : "column"}
            >
              <Box
                width={"100%"}
                height={isNotPhone ? "300px" : "200px"}
                sx={{
                  backgroundImage: `url(https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Box display={"flex"} width={"100%"} gap={"20px"}>
                {isNotPhone && <Box width={"5px"} bgcolor={"primary.main"} />}
                <Typography
                  width={"100%"}
                  lineHeight={"30px"}
                  textAlign={"center"}
                  sx={{
                    "& > span": { fontWeight: "bold", fontSize: "1.3rem" },
                  }}
                >
                  <span>L</span>orem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum vitae lectus at libero venenatis
                  commodo. Fusce vel eleifend mauris. Sed efficitur lacus vel
                  bibendum vulputate. Nulla facilisi. In hac habitasse platea
                  dictumst. Integer sed lectus auctor, suscipit nisl in,
                  bibendum dui. Vivamus sit amet metus ut elit auctor tincidunt.
                  Proin in sagittis arcu. Quisque ut purus nec tortor eleifend
                  rhoncus. Suspendisse potenti.In hac habitasse platea dictumst.
                  Integer sed lectus auctor, suscipit nisl in, bibendum dui.
                  Vivamus sit amet metus ut elit auctor tincidunt. Proin in
                  sagittis arcu. Quisque ut purus nec tortor eleifend rhoncus.
                  Suspendisse potenti.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            width={"100%"}
            minHeight={"70vh"}
            display={"flex"}
            flexDirection={"column"}
            gap={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              variant="h2"
              sx={{
                typography: "secondaryFont",
                fontWeight: "bold",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
              }}
            >
              Our Team
            </Typography>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              padding={"20px"}
              sx={{
                overflowX: "scroll",
                "&::-webkit-scrollbar": {
                  bgcolor: "transparent",
                  height: "10px",
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
              <Box display={"flex"} gap={"10px"}>
                <TeamMemberCard
                  image={
                    "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  title={"Mark Jones"}
                  description="CEO, founder"
                />
                <TeamMemberCard
                  image={
                    "https://images.pexels.com/photos/17636941/pexels-photo-17636941/free-photo-of-smiling-woman-in-shirt-and-eyeglasses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                  title={"Jane Doe"}
                  description="Chief Designer"
                />
                <TeamMemberCard
                  image={
                    "https://images.pexels.com/photos/16458432/pexels-photo-16458432/free-photo-of-woman-posing-on-gray-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  }
                  title={"Jill Maxwell"}
                  description="Human Resourses"
                />
                <TeamMemberCard
                  image={
                    "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  title={"John Doe"}
                  description="CTO, co-founder"
                />
                <TeamMemberCard
                  image={
                    "https://images.pexels.com/photos/24589378/pexels-photo-24589378/free-photo-of-portrait-of-smiling-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  title={"Dave Smith"}
                  description="General Manager"
                />
              </Box>
            </Box>
          </Box>

          <Link to={`/`}>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCart />}
            >
              Get started shopping
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default About;
