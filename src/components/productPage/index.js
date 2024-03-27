import React, { useEffect, useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Box,
  IconButton,
  MobileStepper,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import {
  AddShoppingCart,
  ChevronLeft,
  ChevronRight,
  PersonOff,
} from "@mui/icons-material";
import Layout from "../layout";
import data from "../../lib/data";
import RatingDistributionComponent from "./ratingDistribution";
import ReviewComponent from "./reviewComponent";
import CardContainer from "../product/productCardContainer";
import ProductCard from "../product/productCard";
import ProductOptions from "./productOptions";

const ProductPageComponent = (props) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const [imageIndex, setImageIndex] = useState(0);
  const [isProductOptions, setIsProductOptions] = useState(false);
  const [product, setProduct] = useState({
    images: [],
    unitPrice: {},
    rating: { score: 0, votes: [], reviews: [] },
    allergenAdvice: [],
  });
  const [ratingDistribution, setRatingDistribution] = useState({});
  const maxImageIndex = product.images.length;

  useEffect(() => {
    let params = new URLSearchParams(props.location.search);
    const productIndex = Number(params.get("p"));
    setProduct(data.products.find((element) => element.id === productIndex));
    return () => (params = undefined);
  }, []);

  useEffect(() => {
    if (product.name) {
      document.title = product.name + " | Wendo Cakes";
    }
  }, [product]);

  useEffect(() => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    product.rating.votes.forEach((vote) => {
      const currentVote = vote;
      if (distribution[currentVote] === 0) {
        product.rating.votes.forEach((vote) => {
          if (vote === currentVote) distribution[currentVote] += 1;
        });
      }
    });
    setRatingDistribution(distribution);
  }, [product.rating.votes]);

  const next = () => {
    setImageIndex((prev) => prev + 1);
  };
  const back = () => {
    setImageIndex((prev) => prev - 1);
  };

  const changeImageIndex = ({ target }) => {
    setImageIndex(Number(target.value));
  };

  const switchIsProductOptions = (state) => {
    setIsProductOptions(state);
  };

  const addToCart = () =>
  {
    props.changeProduct(product)
    props.changeIsProductDetails(true)
  }

  return (
    <Layout>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box width={isNotPhone ? "80%" : "90%"}>
          <Box
            mt={"50px"}
            height={isNotPhone ? "100vh" : "130vh"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              width={"100%"}
              height={"80%"}
              display={"flex"}
              flexDirection={isNotPhone ? "row" : "column"}
            >
              <Box
                width={isNotPhone ? "50%" : "100%"}
                height={isNotPhone ? "100%" : "70%"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box
                  overflow={"hidden"}
                  width={"100%"}
                  height={"80%"}
                  borderRadius={"20px"}
                  position={"relative"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Box
                    position={"absolute"}
                    width={"100%"}
                    height={"100%"}
                    whiteSpace={"nowrap"}
                    sx={{
                      transition: "0.5s ease-in-out",
                      transform: `translateX(-${
                        imageIndex !== 0 ? imageIndex + "00%" : "0%"
                      })`,
                    }}
                  >
                    {product.images.map((image, index) => (
                      <Box
                        width={"100%"}
                        height={"100%"}
                        display={"inline-block"}
                        key={index}
                        sx={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    ))}
                  </Box>
                  <Box
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <IconButton onClick={back} disabled={imageIndex < 1}>
                      <ChevronLeft />
                    </IconButton>
                    <IconButton
                      onClick={next}
                      disabled={imageIndex >= maxImageIndex - 1}
                    >
                      <ChevronRight />
                    </IconButton>
                  </Box>
                  <Box
                    position={"absolute"}
                    bottom={0}
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <MobileStepper
                      variant="dots"
                      steps={maxImageIndex}
                      activeStep={imageIndex}
                      position="static"
                      sx={{ background: "transparent" }}
                    />
                  </Box>
                </Box>
                <Box
                  height={"20%"}
                  width={"100%"}
                  display={"flex"}
                  justifyContent={isNotPhone ? "flex-start" : "space-evenly"}
                  alignItems={"center"}
                >
                  <Box height={"80%"} display={"flex"} gap={"5px"}>
                    {product.images.map((image, index) => (
                      <button
                        onClick={changeImageIndex}
                        value={index}
                        style={{
                          height: "100%",
                          width: "100px",
                          transition: "0.3s",
                          border:
                            imageIndex === index
                              ? `2px solid #FF2681`
                              : "2px solid transparent",
                          margin: 0,
                          padding: 0,
                          borderRadius: "10px",
                          overflow: "hidden",
                          cursor: "pointer",
                          backgroundImage: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          color: "transparent",
                        }}
                      >
                        .
                      </button>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box
                width={isNotPhone ? "50%" : "100%"}
                height={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                {!isNotPhone && (
                  <Box
                    position={"fixed"}
                    bottom={0}
                    width={"100%"}
                    height={"80px"}
                    display={"flex"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    bgcolor={"white"}
                    zIndex={1}
                    boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
                  >
                    <Button
                      disableElevation
                      fullWidth
                      sx={{ height: "50px", margin: "10px" }}
                      variant="contained"
                      startIcon={<AddShoppingCart />}
                      onClick={addToCart}
                    >
                      add to cart
                    </Button>
                  </Box>
                )}
                <Box
                  width={isNotPhone ? "80%" : "100%"}
                  height={"80%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={isNotPhone ? undefined : "10px"}
                >
                  <Box
                    display={"flex"}
                    width={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      fontWeight={"bold"}
                      fontSize={"clamp(1rem, 5vw, 2.4rem)"}
                    >
                      {product.name}
                    </Typography>
                    <ProductOptions
                      switchIsProductOptions={switchIsProductOptions}
                      isProductOptions={isProductOptions}
                    />
                  </Box>
                  <Typography>{product.description}</Typography>
                  {product.allergenAdvice && (
                    <Box
                      width={"100%"}
                      alignItems={"center"}
                      display={"flex"}
                      gap={"10px"}
                      height={"70px"}
                      borderRadius={"10px"}
                      bgcolor={theme.palette.grey[200]}
                    >
                      <Typography ml={"20px"} color={"text.secondary"}>
                        Allergen advice:
                      </Typography>
                      <Typography fontSize={"clamp(0.8rem, 3vw, 1rem)"}>
                        {product.allergenAdvice.join(", ")}
                      </Typography>
                    </Box>
                  )}
                  <Box
                    display={"flex"}
                    width={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography fontWeight={"bold"} fontSize={"1.3rem"}>
                      {product.unitPrice.currency} {product.unitPrice.amount} /
                      {product.unitPrice.unit}
                    </Typography>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                    ></Box>
                  </Box>
                  {isNotPhone && (
                    <Button
                      disableElevation
                      fullWidth
                      sx={{ height: "50px" }}
                      variant="contained"
                      startIcon={<AddShoppingCart />}
                      onClick={addToCart}
                    >
                      add to cart
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            height={"90vh"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Pacifico",
                fontSize: "clamp(1rem, 7vw, 3rem)",
                marginBottom: "50px",
              }}
            >
              Reviews
            </Typography>
            <Box
              height={isNotPhone ? "65%" : "80%"}
              width={"100%"}
              display={"flex"}
              borderRadius={"25px"}
              border={`1px solid ${theme.palette.grey[400]}`}
              flexDirection={isNotPhone ? "row" : "column"}
            >
              <Box
                height={isNotPhone ? "100%" : "30%"}
                width={isNotPhone ? "30%" : "100%"}
                borderRight={
                  isNotPhone
                    ? `1px solid ${theme.palette.grey[400]}`
                    : undefined
                }
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
              >
                <Box
                  width={"100%"}
                  height={"100px"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={isNotPhone ? "flex-start" : "center"}
                  borderBottom={`1px solid ${theme.palette.grey[400]}`}
                >
                  <Box display={"flex"} gap={"5px"}>
                    <Typography fontWeight={"bold"} fontSize={"1.4rem"}>
                      {product.rating.score}/5
                    </Typography>
                    <Typography alignSelf={"center"}>
                      ({product.rating.votes.length} votes)
                    </Typography>
                  </Box>
                  <Rating readOnly value={product.rating.score} />
                </Box>
                {isNotPhone && (
                  <Box display={"flex"} flexDirection={"column-reverse"}>
                    {Object.keys(ratingDistribution).map((rating, index) => (
                      <RatingDistributionComponent
                        id={index}
                        rating={rating}
                        occurences={ratingDistribution[rating]}
                        totalVotes={product.rating.votes.length}
                      />
                    ))}
                  </Box>
                )}
              </Box>
              <Box
                height={isNotPhone ? "100%" : "70%"}
                width={isNotPhone ? "70%" : "100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {product.rating.reviews ? (
                  <Box
                    width={"90%"}
                    height={"90%"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"20px"}
                    alignItems={"center"}
                    sx={{ overflowY: "scroll" }}
                  >
                    {product.rating.reviews.map((review, index) => (
                      <ReviewComponent id={index} {...review} />
                    ))}
                  </Box>
                ) : (
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Typography>This product has no reviews yet </Typography>{" "}
                    <PersonOff />
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            width={"100%"}
            height={"90vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CardContainer containerTitle="More in Category">
              {data.products.map((product, index) => {
                if (index < 4) {
                  return (
                    <ProductCard
                      id={index}
                      product={product}
                      changeProduct={props.changeProduct}
                      changeIsProductDetails={props.changeIsProductDetails}
                    />
                  );
                }
                return <></>;
              })}
            </CardContainer>
          </Box>
          <Box
            width={"100%"}
            height={"90vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CardContainer containerTitle="Recently viewed">
              {data.products.map((product, index) => {
                if (index < 4) {
                  return (
                    <ProductCard
                      id={index}
                      product={product}
                      changeProduct={props.changeProduct}
                      changeIsProductDetails={props.changeIsProductDetails}
                    />
                  );
                }
                return <></>;
              })}
            </CardContainer>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductPageComponent;
