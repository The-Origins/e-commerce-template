import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useTheme,
  useMediaQuery,
  Box,
  IconButton,
  MobileStepper,
  Typography,
  Button,
  Rating,
  Tooltip,
} from "@mui/material";
import {
  AddShoppingCart,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Favorite,
  PersonOff,
  Share,
} from "@mui/icons-material";
import data from "../lib/data";
import ProductWorker from "../scripts/productWorker";
import RatingDistributionComponent from "../components/productPage/ratingDistribution";
import ReviewComponent from "../components/productPage/reviewComponent";
import ProductCardContainer from "../components/product/productCardContainer";
import ProductCard from "../components/product/productCard";
import ProductDetails from "../components/product/productDetails";

const ProductPage = () => {
  let params = new URLSearchParams(window.location.search);
  const id = Number(params.get("p"));
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const user = useSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [product, setProduct] = useState({
    images: [],
    unitPrice: {},
    rating: { score: 0, votes: [], reviews: [] },
    allergenAdvice: [],
  });
  const [productDetails, setProductDetails] = useState({});
  const [isProductDetails, setIsProductDetails] = useState(false);
  const [ratingDistribution, setRatingDistribution] = useState({});
  const maxImageIndex = product.images.length;

  useEffect(() => {
    setProduct(data.products.find((element) => element.id === id));
  }, []);

  useEffect(() => {
    if (product.name) {
      document.title = product.name + " | Wendo Cakes";
    }
  }, [product]);

  useEffect(() => {
    setIsLiked(Boolean(user.favourites[id]));
    setIsInCart(Boolean(user.cart.items[id]));
  }, [user]);

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

  useEffect(() => {
    const productWorker = new ProductWorker(product);
    setProductDetails(
      productWorker.getProductDetails(user.cart.items, user.favourites)
    );
  }, [product, user]);

  const next = () => {
    setImageIndex((prev) => prev + 1);
  };
  const back = () => {
    setImageIndex((prev) => prev - 1);
  };

  const changeImageIndex = ({ target }) => {
    setImageIndex(Number(target.value));
  };

  const switchIsProductDetails = () => {
    setIsProductDetails((prev) => !prev);
  };

  const addToCart = () => {
    switchIsProductDetails();
  };

  const like = () => {};

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <ProductDetails
        title={isInCart && "Change your prefrences"}
        product={product}
        productDetails={productDetails}
        setProductDetails={setProductDetails}
        switchIsProductDetails={switchIsProductDetails}
        isProductDetails={isProductDetails}
      />
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
                  <Tooltip
                    title={
                      isLiked ? "added to favourites" : "add to favourites"
                    }
                  >
                    <IconButton sx={{ color: isLiked && "primary.main" }}>
                      <Favorite />
                    </IconButton>
                  </Tooltip>
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
                  <Box
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={"20px"}
                  >
                    <Tooltip title="share">
                      <IconButton onClick={like}>
                        <Share />
                      </IconButton>
                    </Tooltip>
                    <Button
                      disableElevation
                      color={isInCart ? "success" : "primary"}
                      sx={{ height: "50px", width: "100%" }}
                      variant="contained"
                      startIcon={
                        isInCart ? <CheckCircle /> : <AddShoppingCart />
                      }
                      onClick={addToCart}
                    >
                      {isInCart ? "added to cart" : "add to cart"}
                    </Button>
                  </Box>
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
                isNotPhone ? `1px solid ${theme.palette.grey[400]}` : undefined
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
          height={"70vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ProductCardContainer containerTitle="More in Category">
            {data.products.map((product, index) => {
              if (index < 4) {
                return <ProductCard id={index} product={product} user={user} />;
              }
              return <></>;
            })}
          </ProductCardContainer>
        </Box>
        <Box
          width={"100%"}
          height={"70vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={"80px"}
        >
          <ProductCardContainer
            containerTitle="Recently viewed"
            isRecent={true}
          >
            {data.products.map((product, index) => {
              if (index < 4) {
                return <ProductCard id={index} product={product} user={user} />;
              }
              return <></>;
            })}
          </ProductCardContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
