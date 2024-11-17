import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "gatsby";
import { PhoneInTalk } from "@mui/icons-material";
import ProductCardContainer from "../components/product/productCardContainer";
import CategoryCard from "../components/home/categoryCard";
import Spotlights from "../components/home/spotlights";
import { Helmet } from "react-helmet";

const Home = ({ location, setIsContact, setConfirmationModal }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.user);
  const currency = useSelector((state) => state.currency);

  return (
    <>
      <Helmet>
        <title>Home | {theme.title}</title>
        <meta name="description" content={`Home page for ${theme.title}`} />
      </Helmet>
      <Box display={"flex"} justifyContent={"center"}>
        <Box width={isNotPhone ? "80%" : "90%"}>
          <Box display={"flex"} flexDirection={"column"} gap={"30px"}>
            <Spotlights />
            <Box
              width={"100%"}
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"space-evenly"}
              borderRadius={"20px"}
              border={`1px solid ${theme.palette.grey[400]}`}
              alignItems={"center"}
              padding={"20px"}
              gap={"20px"}
            >
              <Typography
                fontSize={"clamp(1rem, 3vw, 1.5rem)"}
                fontWeight={"bold"}
                ml={"10px"}
              >
                Need to talk to a specialist?
              </Typography>
              <Button
                size="big"
                onClick={() => setIsContact(true)}
                disableElevation
                variant="contained"
                startIcon={<PhoneInTalk />}
                sx={{ width: "300px", height: "50px" }}
              >
                Contact Us Directly
              </Button>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Box
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"10px"}
                padding={"30px"}
              >
                <Typography
                  variant="h2"
                  sx={{
                    typography: "secondaryFont",
                    fontWeight: "bold",
                    fontSize: "clamp(1.2rem, 4vw, 2rem)",
                  }}
                >
                  Explore our catalogue
                </Typography>
                <Typography color={"text.secondary"}>
                  Satisfy your cravings
                </Typography>
              </Box>
              <ProductCardContainer
                {...{ location, user, currency, setConfirmationModal }}
                title="Clothing"
                category={"clothing"}
              />
              <ProductCardContainer
                {...{ location, user, currency, setConfirmationModal }}
                title="Electronics"
                category={"electronics"}
              />
              <ProductCardContainer
                {...{ location, user, currency, setConfirmationModal }}
                title="Food"
                category="food"
              />
            </Box>
            <Box
              width={"100%"}
              gap={"20px"}
              height={"90%"}
              display={"flex"}
              flexWrap={"wrap"}
            >
              <CategoryCard
                subTitle="Up to 25% off"
                title="Electronics"
                description="Save on your favourite items"
                image={
                  "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
              <CategoryCard
                subTitle="Up to 25% off"
                title="Beverages"
                description="Save on your favourite items"
                image={
                  "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
              <CategoryCard
                subTitle="Up to 25% off"
                title="Clothing"
                description="Save on your favourite items"
                image={
                  "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
              />
            </Box>
            <Box
              minHeight={"80vh"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              margin={"50px 0px"}
            >
              <Box
                width={"100%"}
                borderRadius={"25px"}
                border={`1px solid ${theme.palette.grey[400]}`}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
                gap={"30px"}
                alignItems={"center"}
                padding={"20px 30px"}
              >
                <Typography
                  fontWeight={"bold"}
                  fontSize={"2rem"}
                  sx={{ typography: "secondaryFont", fontWeight: "bold" }}
                >
                  About Us
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
                    height={"300px"}
                    sx={{
                      backgroundImage: `url(https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <Typography
                    width={"100%"}
                    lineHeight={"30px"}
                    textAlign={"center"}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum vitae lectus at libero venenatis commodo. Fusce
                    vel eleifend mauris. Sed efficitur lacus vel bibendum
                    vulputate. Nulla facilisi. In hac habitasse platea dictumst.
                    Integer sed lectus auctor, suscipit nisl in, bibendum dui.
                    Vivamus sit amet metus ut elit auctor tincidunt. Proin in
                    sagittis arcu. Quisque ut purus nec tortor eleifend rhoncus.
                    Suspendisse potenti.
                  </Typography>
                </Box>
                <Link to={`/about`}>
                  <Button variant="contained" disableElevation>
                    More details
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
