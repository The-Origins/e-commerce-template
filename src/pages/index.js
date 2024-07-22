import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
  Link,
  Skeleton,
} from "@mui/material";
import { PhoneInTalk } from "@mui/icons-material";
import ProductCardContainer from "../components/product/productCardContainer";
import products from "../../lib/data/products.json";
import CategoryCard from "../components/home/categoryCard";
import SkeletonGroup from "../components/layout/skeletonGroup";
import Spotlights from "../components/home/spotlights";

const Home = ({ setIsContact, setConfirmationModal }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.user);
  const currency = useSelector((state) => state.currency);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "E-commerce | slogan";
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box width={isNotPhone ? "80%" : "90%"}>
        <Box display={"flex"} flexDirection={"column"} gap={"50px"}>
          <Spotlights isLoading={isLoading} />
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
            {isLoading ? (
              <Skeleton
                width={"300px"}
                height={isNotPhone ? "80px" : "60px"}
                variant="rounded"
              />
            ) : (
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
            )}
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
                  fontFamily: theme.fonts.secondary,
                  fontSize: "clamp(1rem, 7vw, 3rem)",
                }}
              >
                Explore our catalogue
              </Typography>
              <Typography color={"text.secondary"}>
                Satisfy your cravings
              </Typography>
            </Box>
            <ProductCardContainer
              {...{ user, isLoading, currency, setConfirmationModal }}
              title="Clothing"
              category={"clothing"}
              products={products.slice(0, 4)}
            />
            <ProductCardContainer
              {...{ user, isLoading, currency, setConfirmationModal }}
              title="Electronics"
              category={"electronics"}
              products={products.slice(14, 18)}
            />
            <ProductCardContainer
              {...{ user, isLoading, currency, setConfirmationModal }}
              title="Food"
              category="food"
              products={products.slice(21, 25)}
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
              isLoading={isLoading}
            />
            <CategoryCard
              subTitle="Up to 25% off"
              title="Beverages"
              description="Save on your favourite items"
              image={
                "https://images.pexels.com/photos/1194030/pexels-photo-1194030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              isLoading={isLoading}
            />
            <CategoryCard
              subTitle="Up to 25% off"
              title="Clothing"
              description="Save on your favourite items"
              image={
                "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              isLoading={isLoading}
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
                fontFamily={theme.fonts.secondary}
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
                        backgroundImage: `url(https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  ))}
                {isLoading ? (
                  <SkeletonGroup count={4} width="100%" height="20px" />
                ) : (
                  <Typography
                    width={"90%"}
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
    </Box>
  );
};

export default Home;
