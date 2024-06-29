import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Skeleton,
  Link,
} from "@mui/material";
import {
  AddShoppingCart,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ExpandLess,
  ExpandMore,
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
import SkeletonGroup from "../components/product/skeletonGroup";
import { setIsAuth } from "../state/store";

const ProductPage = () => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const productWorker = new ProductWorker();
  let params = new URLSearchParams(window.location.search);
  const id = Number(params.get("p"));
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [product, setProduct] = useState({});
  const [offers, setOffers] = useState({});
  const [products, setProducts] = useState([]);
  const [isProductDetails, setIsProductDetails] = useState(false);
  const [ratingDistribution, setRatingDistribution] = useState({});
  const [maxImageIndex, setMaxImageIndex] = useState(0);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    setOffers(data.offers);

    const productWorker = new ProductWorker();
    setProduct(productWorker.findProduct(id));
    setProducts(data.products.slice(0, 4));

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const productWorker = new ProductWorker();
    document.title = (product.name || "product page") + " | E-commerce";

    if (Object.keys(product).length) {
      setRatingDistribution(productWorker.getRatingDistribution(product));
      setMaxImageIndex(product.images.length);
    }
  }, [product]);

  useEffect(() => {
    if (Object.keys(user).length) {
      setIsLiked(Boolean(user.favourites[product.id]));
      setIsInCart(Boolean(user.cart.items[product.id]));
    } else {
      setIsLiked(false);
      setIsInCart(false);
    }
  }, [user, product]);

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

  const handleFavourite = () => {
    if (!Object.keys(user).length) {
      return dispatch(setIsAuth(true));
    }
  };

  const handleShare = () => {};

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      {!isLoading && (
        <ProductDetails
          title={isInCart && "Change your prefrences"}
          product={product}
          user={user}
          switchIsProductDetails={switchIsProductDetails}
          isProductDetails={isProductDetails}
        />
      )}
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
                height={"100%"}
                borderRadius={"20px"}
                position={"relative"}
                display={"flex"}
                alignItems={"center"}
              >
                {isLoading ? (
                  <Skeleton
                    sx={{ position: "absolute" }}
                    width={"100%"}
                    height={"100%"}
                    variant="rounded"
                  />
                ) : (
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
                    {product.images.map((image) => (
                      <Box
                        width={"100%"}
                        height={"100%"}
                        display={"inline-block"}
                        sx={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    ))}
                  </Box>
                )}
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
                padding={"10px"}
                width={"100%"}
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
              >
                {isLoading ? (
                  <SkeletonGroup
                    width="100px"
                    height="100px"
                    count={4}
                    flexDirection={"row"}
                  />
                ) : (
                  <Box display={"flex"} gap={"10px"}>
                    {product.images.map((image, index) => (
                      <button
                        onClick={changeImageIndex}
                        value={index}
                        style={{
                          height: "clamp(50px, 5vw, 100px)",
                          width: "clamp(50px, 5vw, 100px)",
                          transition: "0.3s",
                          border:
                            imageIndex === index
                              ? `2px solid #FF2681`
                              : `2px solid ${theme.palette.grey[400]}`,
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
                )}
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
                  padding={"20px"}
                  gap={"20px"}
                  alignItems={"center"}
                  bgcolor={"white"}
                  zIndex={1}
                  boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
                >
                  <IconButton onClick={handleShare} disabled={isLoading}>
                    <Share />
                  </IconButton>
                  <Button
                    disableElevation
                    fullWidth
                    color={isInCart ? "success" : "primary"}
                    sx={{ height: "50px", width: "100%" }}
                    variant="contained"
                    startIcon={isInCart ? <CheckCircle /> : <AddShoppingCart />}
                    onClick={addToCart}
                    disabled={isLoading}
                  >
                    {isInCart ? "added to cart" : "add to cart"}
                  </Button>
                </Box>
              )}
              <Box
                width={isNotPhone ? "80%" : "100%"}
                minHeight={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
                gap={"20px"}
                sx={{ transition: "0.3s" }}
              >
                <Box
                  display={"flex"}
                  width={"100%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  {isLoading ? (
                    <Skeleton width={"100%"} variant="rounded" />
                  ) : (
                    <Typography
                      fontWeight={"bold"}
                      fontSize={"clamp(1rem, 5vw, 2.4rem)"}
                    >
                      {product.name}
                    </Typography>
                  )}
                  <Tooltip
                    title={
                      isLiked ? "added to favourites" : "add to favourites"
                    }
                  >
                    <IconButton
                      sx={{ color: isLiked && "primary.main" }}
                      disabled={isLoading}
                      onClick={handleFavourite}
                    >
                      <Favorite />
                    </IconButton>
                  </Tooltip>
                </Box>
                {isLoading ? (
                  <SkeletonGroup count={6} width="100%" />
                ) : (
                  <>
                    <Typography>{product.description}</Typography>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                      <Typography fontWeight={"bold"} fontSize={"1.3rem"}>
                        {productWorker.getCurrencySymbol(
                          product.unitPrice.currency
                        )}{" "}
                        {offers[product.id]
                          ? productWorker.getDiscount(
                              offers[product.id],
                              product.unitPrice.amount
                            )
                          : product.unitPrice.amount}
                      </Typography>
                      {offers[product.id] && (
                        <Typography
                          sx={{
                            color: "text.secondary",
                            textDecoration: "line-through",
                          }}
                        >
                          {productWorker.getCurrencySymbol(
                            product.unitPrice.currency
                          )}{" "}
                          {product.unitPrice.amount}
                        </Typography>
                      )}
                    </Box>
                  </>
                )}
                {isNotPhone && (
                  <Box
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={"20px"}
                  >
                    <Tooltip title="share">
                      <IconButton onClick={handleShare} disabled={isLoading}>
                        <Share />
                      </IconButton>
                    </Tooltip>
                    <Button
                      disableElevation
                      disabled={isLoading}
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
        {!isLoading && Object.keys(product.features).length && (
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            padding={"50px 0px"}
            alignItems={"center"}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: theme.fonts.secondary,
                fontSize: "clamp(1rem, 7vw, 3rem)",
                marginBottom: "50px",
              }}
            >
              Features
            </Typography>
            <Box
              minHeight={"40vh"}
              width={"100%"}
              display={"flex"}
              border={`1px solid ${theme.palette.grey[400]}`}
              borderRadius={"25px"}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
                padding={"20px 50px"}
                borderRight={`1px solid ${theme.palette.grey[400]}`}
              >
                <Box
                  width={"300px"}
                  height={"300px"}
                  borderRadius={"20px"}
                  sx={{
                    backgroundImage: `url(${product.images[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Box display={"flex"} gap={"10px"}>
                  <Typography fontWeight={"bold"}>{product.name}</Typography>
                  <Typography>
                    {productWorker.getCurrencySymbol(
                      product.unitPrice.currency
                    )}{" "}
                    {offers[product.id]
                      ? productWorker.getDiscount(
                          offers[product.id],
                          product.unitPrice.amount
                        )
                      : product.unitPrice.amount}
                  </Typography>
                </Box>
              </Box>
              <Box
                width={"100%"}
                padding={"20px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
              >
                {Object.keys(product.features).map((feature) => (
                  <Tooltip
                    title={`search: ${product.type}, ${feature}:${product.features[feature]}`}
                  >
                    <Link
                      href={`/results?search=${product.type}+${feature}:${product.features[feature]}`}
                      sx={{
                        textDecoration: "none",
                        color: theme.palette.text.primary,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        boxShadow: `0px 0px 10px 0px ${theme.palette.grey[300]}`,
                        transition: "0.3s",
                        ":hover": {
                          cursor: "pointer",
                          color: "primary.main",
                          boxShadow: `0px 0px 10px 0px ${theme.palette.grey[400]}`,
                        },
                      }}
                    >
                      <Typography fontWeight={"bold"} fontSize={"1.1rem"}>
                        {feature}:
                      </Typography>
                      <Typography>{product.features[feature]}</Typography>
                    </Link>
                  </Tooltip>
                ))}
              </Box>
            </Box>
          </Box>
        )}
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
              fontFamily: theme.fonts.secondary,
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
                {isLoading ? (
                  <SkeletonGroup count={2} width="200px" />
                ) : (
                  <>
                    <Box display={"flex"} gap={"5px"}>
                      <Typography fontWeight={"bold"} fontSize={"1.4rem"}>
                        {product.rating.score}/5
                      </Typography>
                      <Typography alignSelf={"center"}>
                        ({product.rating.votes.length} votes)
                      </Typography>
                    </Box>
                    <Rating readOnly value={product.rating.score} />
                  </>
                )}
              </Box>
              {isNotPhone && (
                <Box display={"flex"} flexDirection={"column-reverse"}>
                  {isLoading ? (
                    <SkeletonGroup count={5} width="100px" />
                  ) : (
                    Object.keys(ratingDistribution).map((rating) => (
                      <RatingDistributionComponent
                        rating={rating}
                        occurences={ratingDistribution[rating]}
                        totalVotes={product.rating.votes.length}
                      />
                    ))
                  )}
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
              {isLoading ? (
                <Skeleton width={"100%"} height={"100%"} variant="rounded" />
              ) : product.rating.reviews.length ? (
                <Box
                  width={"90%"}
                  height={"90%"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"20px"}
                  alignItems={"center"}
                  sx={{
                    overflowY: "scroll",
                    "&::-webkit-scrollbar": {
                      bgcolor: "transparent",
                      width: "10px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      borderRadius: "25px",
                      bgcolor: theme.palette.grey[300],
                      transition: "0.3s",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      cursor: "pointer",
                      bgcolor: theme.palette.grey[400],
                    },
                  }}
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
        <ProductCardContainer
          containerTitle="More in Category"
          isLoading={isLoading}
        >
          {products.map((product) => (
            <ProductCard product={product} user={user} />
          ))}
        </ProductCardContainer>
        <ProductCardContainer
          containerTitle="Recently viewed"
          isLoading={isLoading}
          isRecent={true}
        >
          {products.map((product) => (
            <ProductCard product={product} user={user} />
          ))}
        </ProductCardContainer>
      </Box>
    </Box>
  );
};

export default ProductPage;
