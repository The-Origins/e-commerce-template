import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateModal, switchIsContact } from "../state/store";
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { Build, PhoneInTalk } from "@mui/icons-material";
import SpotlightCarousel from "../components/homePage/spotlightCarousel";
import ProductCard from "../components/product/productCard";
import ProductCardContainer from "../components/product/productCardContainer";
import data from "../lib/data";
import CategoryCard from "../components/product/categoryCard";
import cupcakes from "../assets/images/cupcakes1.jpg"
import cupcakes2 from "../assets/images/cupcakes2.jpg";
import { navigate } from "gatsby";

const Home = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state => state.user))

  useEffect(() => {
    document.title = "Wendoh Cakes | Made with love";
  }, []);


  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box width={isNotPhone ? "80%" : "90%"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"80vh"}
        >
          <SpotlightCarousel user={user} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={isNotPhone ? "row" : "column-reverse"}
          justifyContent={"space-evenly"}
          borderRadius={"20px"}
          border={`1px solid ${theme.palette.grey[400]}`}
          alignItems={"center"}
          height={isNotPhone ? "20vh" : "30vh"}
          width={"100%"}
        >
          <Link
            href="/build-your-own-cake"
            sx={{
              textDecoration: "none",
              width: "300px",
              height: isNotPhone ? "80px" : "60px",
              bgcolor: "primary.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              color: "white",
              transition: "0.3s",
              ":hover": {
                transform: "scale(0.95)",
              },
            }}
          >
            <Build sx={{ mr: "10px" }} />
            Build your own cake
          </Link>
          or
          <Button
            onClick={() => dispatch(switchIsContact())}
            disableElevation
            variant="contained"
            startIcon={<PhoneInTalk />}
            sx={{
              width: "300px",
              height: isNotPhone ? "80px" : "60px",
              bgcolor: "primary.main",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              color: "white",
              transition: "0.3s",
              ":hover": {
                transform: "scale(0.95)",
                bgcolor: "primary.main",
              },
            }}
          >
            Give us your order
          </Button>
        </Box>
        <Box
          width={"100%"}
          height={"25vh"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Pacifico",
              fontSize: "clamp(1rem, 7vw, 3rem)",
            }}
          >
            Explore our cake catalogue
          </Typography>
          <Typography color={"text.secondary"}>
            Satisfy your cravings
          </Typography>
        </Box>
        <Box
          width={"100%"}
          height={"90vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ProductCardContainer containerTitle="Trending">
            {data.products.map((product, index) => {
              if (index < 4) {
                return (
                  <ProductCard
                    id={index}
                    product={product}
                    user={user}
                  />
                );
              }
              return <></>;
            })}
          </ProductCardContainer>
        </Box>
        <Box
          width={"100%"}
          height={"90vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ProductCardContainer containerTitle="Vegan">
            {data.products.map((product, index) => {
              if (index < 4) {
                return (
                  <ProductCard
                    product={product}
                    user={user}
                  />
                );
              }
              return <></>;
            })}
          </ProductCardContainer>
        </Box>
        <Box
          width={"100%"}
          height={"90vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ProductCardContainer containerTitle="This category">
            {data.products.map((product, index) => {
              if (index < 4) {
                return (
                  <ProductCard
                    id={index}
                    product={product}
                    user={user}
                  />
                );
              }
              return <></>;
            })}
          </ProductCardContainer>
        </Box>
        <Box
          minHeight={"80vh"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"50px"}
          mb={"40px"}
        >
          <Box
            width={"100%"}
            gap={"20px"}
            height={"90%"}
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <CategoryCard
              incentive="Up to 25% off"
              title="Chocolate cakes"
              description="indulge in rich chocolate flavours"
              image={cupcakes}
            />
            <CategoryCard
              incentive="Up to 25% off"
              title="Chocolate cakes"
              description="indulge in rich chocolate flavours"
              image={cupcakes}
            />
            <CategoryCard
              incentive="Up to 25% off"
              title="Chocolate cakes"
              description="indulge in rich chocolate flavours"
              image={cupcakes}
            />
          </Box>
        </Box>
        <Box
          height={"80vh"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            width={"100%"}
            height={"90%"}
            borderRadius={"25px"}
            border={`1px solid ${theme.palette.grey[400]}`}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Typography
              fontWeight={"bold"}
              fontFamily={"pacifico"}
              fontSize={"38px"}
            >
              About Us
            </Typography>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
            >
              {isNotPhone && (
                <Box
                  width={"40%"}
                  height={"300px"}
                  sx={{
                    backgroundImage: `url(${cupcakes2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}
              <Typography
                width={isNotPhone ? "40%" : "90%"}
                lineHeight={"30px"}
                textAlign={"center"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vitae lectus at libero venenatis commodo. Fusce vel
                eleifend mauris. Sed efficitur lacus vel bibendum vulputate.
                Nulla facilisi. In hac habitasse platea dictumst. Integer sed
                lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit amet
                metus ut elit auctor tincidunt. Proin in sagittis arcu. Quisque
                ut purus nec tortor eleifend rhoncus. Suspendisse potenti.
              </Typography>
            </Box>
            <Link
              href="/build-your-own-cake"
              sx={{
                textDecoration: "none",
                width: "200px",
                height: "50px",
                bgcolor: "primary.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                color: "white",
                transition: "0.3s",
                ":hover": {
                  transform: "scale(0.95)",
                  letterSpacing: "1px",
                },
              }}
            >
              More details
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
