import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchIsContact } from "../state/store";
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
  Link,
  Skeleton,
} from "@mui/material";
import { Build, PhoneInTalk } from "@mui/icons-material";
import SpotlightCarousel from "../components/homePage/spotlightCarousel";
import ProductCard from "../components/product/productCard";
import ProductCardContainer from "../components/product/productCardContainer";
import data from "../lib/data";
import CategoryCard from "../components/product/categoryCard";
import cupcakes from "../assets/images/cupcakes1.jpg";
import cupcakes2 from "../assets/images/cupcakes2.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "E-commerce | my moto";
    setProducts(data.products.slice(0, 4));
  }, []);

  useEffect(() => {
    if (Object.keys(user.payment)) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <Box
      mt={"50px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={isNotPhone ? "80%" : "90%"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={"80vh"}
        >
          <SpotlightCarousel isLoading={isLoading} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={isNotPhone ? "row" : "column-reverse"}
          justifyContent={"space-evenly"}
          borderRadius={"20px"}
          border={`1px solid ${theme.palette.grey[400]}`}
          alignItems={"center"}
          padding={"20px"}
          width={"100%"}
        >
          <Typography fontSize={"1.5rem"} fontWeight={"bold"}>Need to talk to a specialist?</Typography>
          {isLoading ? (
            <Skeleton
              width={"300px"}
              height={isNotPhone ? "80px" : "60px"}
              variant="rounded"
            />
          ) : (
            <Button
              size="big"
              onClick={() => dispatch(switchIsContact())}
              disableElevation
              variant="contained"
              startIcon={<PhoneInTalk />}
              sx={{width:"300px", height:"50px"}}
            >
              Contact Us Directly
            </Button>
          )}
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
        <ProductCardContainer containerTitle="Trending" isLoading={isLoading}>
          {products.map((product) => (
            <ProductCard product={product} user={user} />
          ))}
        </ProductCardContainer>
        <ProductCardContainer containerTitle="Vegan" isLoading={isLoading}>
          {products.map((product) => (
            <ProductCard product={product} user={user} />
          ))}
        </ProductCardContainer>
        <ProductCardContainer
          containerTitle="This category"
          isLoading={isLoading}
        >
          {products.map((product) => (
            <ProductCard product={product} user={user} />
          ))}
        </ProductCardContainer>
        <Box
          minHeight={"50vh"}
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
            flexWrap={"wrap"}
          >
            <CategoryCard
              subTitle="Up to 25% off"
              title="Chocolate cakes"
              description="indulge in rich chocolate flavours"
              image={cupcakes}
              isLoading={isLoading}
            />
            <CategoryCard
              subTitle="Up to 25% off"
              title="Chocolate cakes"
              description="indulge in rich chocolate flavours"
              image={cupcakes}
              isLoading={isLoading}
            />
            <CategoryCard
              subTitle="Up to 25% off"
              title="Chocolate cakes"
              description="indulge in rich chocolate flavours"
              image={cupcakes}
              isLoading={isLoading}
            />
          </Box>
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
              fontFamily={"pacifico"}
              fontSize={"2rem"}
            >
              About Us
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              width={"100%"}
              gap={"40px"}
            >
              {isNotPhone &&
                (isLoading ? (
                  <Skeleton
                    width={"500px"}
                    height={"300px"}
                    variant="rounded"
                  />
                ) : (
                  <Box
                    width={"90%"}
                    height={"300px"}
                    sx={{
                      backgroundImage: `url(${cupcakes2})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
              {isLoading ? (
                <Box
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"20px"}
                >
                  <Skeleton width={"100%"} height={"20px"} variant="rounded" />
                  <Skeleton width={"100%"} height={"20px"} variant="rounded" />
                  <Skeleton width={"100%"} height={"20px"} variant="rounded" />
                  <Skeleton width={"100%"} height={"20px"} variant="rounded" />
                </Box>
              ) : (
                <Typography
                  width={"90%"}
                  lineHeight={"30px"}
                  textAlign={"center"}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum vitae lectus at libero venenatis commodo. Fusce vel
                  eleifend mauris. Sed efficitur lacus vel bibendum vulputate.
                  Nulla facilisi. In hac habitasse platea dictumst. Integer sed
                  lectus auctor, suscipit nisl in, bibendum dui. Vivamus sit
                  amet metus ut elit auctor tincidunt. Proin in sagittis arcu.
                  Quisque ut purus nec tortor eleifend rhoncus. Suspendisse
                  potenti.
                </Typography>
              )}
            </Box>
            <Link href="/about">
              <Button variant="contained" disableElevation>
                More details
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
