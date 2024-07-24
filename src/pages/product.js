import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useTheme,
  useMediaQuery,
  Box,
  IconButton,
  Typography,
  Button,
  Rating,
  Tooltip,
  Skeleton,
  Link,
} from "@mui/material";
import {
  AddShoppingCart,
  Edit,
  Favorite,
  PersonOff,
  Share,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import products from "../../lib/data/products.json";
import offers from "../../lib/data/offers.json";
import ProductWorker from "../scripts/productWorker";
import RatingDistributionComponent from "../components/product/ratingDistribution";
import ReviewComponent from "../components/product/reviewComponent";
import ProductCardContainer from "../components/product/productCardContainer";
import CustomizeProduct from "../components/product/customizeProduct";
import SkeletonGroup from "../components/layout/skeletonGroup";
import EditModal from "../components/layout/modals/edit";
import Carousel from "../components/layout/carousel";
import { navigate } from "gatsby";
import { updateUser } from "../state/user";
import FetchWorker from "../scripts/fetchWorker";
import { setSnackBar } from "../state/snackBar";

const ProductPage = ({ setConfirmationModal }) => {
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state) => state.user);
  const currency = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  const productWorker = new ProductWorker();
  let params = new URLSearchParams(window.location.search);

  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [product, setProduct] = useState({});
  const [customizeProduct, setCustomizeProduct] = useState({
    on: false,
    title: (isInCart || isLiked) && "Edit your prefrences",
  });
  const [ratingDistribution, setRatingDistribution] = useState({});

  useEffect(() => {
    const id = Number(params.get("p"));
    const fetchWorker = new FetchWorker();
    fetchWorker
      .fetchProduct(id)
      .then((res) => {
        setIsLoading(false);
        setProduct(res);
      })
      .catch((err) => {
        setIsLoading(false);
        dispatch(
          setSnackBar({
            on: true,
            type: "ERROR",
            message: `Error fetching product: ${err}`,
          })
        );
      });
  }, []);

  useEffect(() => {
    const productWorker = new ProductWorker();
    document.title = (product.name || "product page") + ` | ${theme.title}`;

    if (Object.keys(product).length) {
      setRatingDistribution(productWorker.getRatingDistribution(product));
    }
  }, [product]);

  useEffect(() => {
    if (user.isLoggedIn) {
      setIsLiked(Boolean(user.data.favourites[product.id]));
      setIsInCart(Boolean(user.data.cart.items[product.id]));
    } else {
      setIsLiked(false);
      setIsInCart(false);
    }
  }, [user, product]);

  const changeImageIndex = ({ target }) => {
    setImageIndex(Number(target.value));
  };

  const handleFavourite = () => {
    if (isLiked) {
      handleDelete();
    } else {
      changeCustomizeProduct("favourites", "ADD");
    }
  };

  const handleShare = () => {};

  const handleDelete = (path = "favourites") => {
    setConfirmationModal({
      on: true,
      message: `Are you sure you want to remove '${product.name}' from your ${path}`,
      onCancel: () => {},
      onConfirm: () =>
        dispatch(
          updateUser({
            path,
            action: "DELETE",
            data: { productId: product.id },
          })
        ),
    });
  };

  const changeCustomizeProduct = (path, action) => {
    if (user.isLoggedIn) {
      setCustomizeProduct((prev) => ({ ...prev, on: true, path, action }));
    } else {
      navigate(`/auth/login?tab=${window.location.pathname}`);
    }
  };

  return (
    <Box display={"flex"} justifyContent={"center"}>
      {!isLoading && (
        <EditModal
          isEdit={customizeProduct.on}
          width={"min(700px, 90%)"}
          handleClose={() => setCustomizeProduct({ on: false })}
        >
          <CustomizeProduct
            {...{
              user,
              product,
              currency,
              customizeProduct,
              setCustomizeProduct,
            }}
          />
        </EditModal>
      )}
      <Box width={isNotPhone ? "80%" : "90%"}>
        <Box
          height={"100vh"}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
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
              <Carousel
                width={"100%"}
                height={isNotPhone ? "100%" : "300px"}
                index={imageIndex}
                setIndex={setImageIndex}
                maxIndex={product.images?.length - 1}
                isLoading={isLoading}
                controls
                swipeable
              >
                {product.images?.map((image) => (
                  <Box
                    width={"100%"}
                    height={"100%"}
                    sx={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
              </Carousel>
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
                  {isLoading ? (
                    <Skeleton width={"100%"} variant="rounded" />
                  ) : isInCart ? (
                    <Box width={"100%"} display={"flex"} gap={"20px"}>
                      <Button
                        onClick={() => changeCustomizeProduct("cart", "EDIT")}
                        startIcon={<Edit />}
                        variant="outlined"
                      >
                        edit
                      </Button>
                      <Link href="/cart" width={"100%"}>
                        <Button
                          fullWidth
                          disableElevation
                          startIcon={<ShoppingCartCheckout />}
                          variant="contained"
                        >
                          go to cart
                        </Button>
                      </Link>
                    </Box>
                  ) : (
                    <Button
                      fullWidth
                      disableElevation
                      disabled={isLoading}
                      sx={{ height: "50px" }}
                      variant="contained"
                      startIcon={<AddShoppingCart />}
                      onClick={() => changeCustomizeProduct("cart", "ADD")}
                    >
                      add to cart
                    </Button>
                  )}
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
                    <Typography
                      color={theme.palette.productStateColors[product.state]}
                    >
                      {product.state}
                    </Typography>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                      <Typography fontWeight={"bold"} fontSize={"1.3rem"}>
                        {currency.symbol}{" "}
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
                          {currency.symbol} {product.unitPrice.amount}
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
                    {isLoading ? (
                      <Skeleton width={"100%"} variant="rounded" />
                    ) : isInCart ? (
                      <Box width={"100%"} display={"flex"} gap={"20px"}>
                        <Button
                          onClick={() =>
                            changeCustomizeProduct("favourites", "EDIT")
                          }
                          startIcon={<Edit />}
                          variant="outlined"
                        >
                          edit
                        </Button>
                        <Link href="/cart" width={"100%"}>
                          <Button
                            fullWidth
                            disableElevation
                            startIcon={<ShoppingCartCheckout />}
                            variant="contained"
                          >
                            go to cart
                          </Button>
                        </Link>
                      </Box>
                    ) : (
                      <Button
                        fullWidth
                        disableElevation
                        disabled={isLoading}
                        sx={{ height: "50px" }}
                        variant="contained"
                        startIcon={<AddShoppingCart />}
                        onClick={() => changeCustomizeProduct("cart", "ADD")}
                      >
                        add to cart
                      </Button>
                    )}
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        {!isLoading && Object.keys(product.features).length ? (
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            padding={isNotPhone ? "50px 0px" : "0px 0px 50px 0px"}
            alignItems={"center"}
          >
            <Typography
              variant="h2"
              sx={{
                typography: "secondaryFont",
                fontWeight: "bold",
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
              {isNotPhone && (
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
                      {currency.symbol}{" "}
                      {offers[product.id]
                        ? productWorker.getDiscount(
                            offers[product.id],
                            product.unitPrice.amount
                          )
                        : product.unitPrice.amount}
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box
                width={"100%"}
                padding={"20px"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
              >
                {Object.keys(product.features).map((feature) => {
                  const isSearchExeption =
                    productWorker.searchExeptions.includes(feature);
                  const featureSearch =
                    !isSearchExeption &&
                    new URLSearchParams(product.features[feature])
                      .toString()
                      .replace("=", "");
                  return (
                    <Tooltip
                      title={
                        !isSearchExeption &&
                        `search: ${product.type}, ${feature}=${featureSearch}`
                      }
                    >
                      <Link
                        href={
                          !isSearchExeption
                            ? `/results?search=${product.type}&${feature}=${featureSearch}`
                            : undefined
                        }
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
                          ":hover": !isSearchExeption
                            ? {
                                cursor: "pointer",
                                color: "primary.main",
                                boxShadow: `0px 0px 10px 0px ${theme.palette.grey[400]}`,
                              }
                            : {},
                        }}
                      >
                        <Typography fontWeight={"bold"} fontSize={"1.1rem"}>
                          {feature}:
                        </Typography>
                        <Typography>{product.features[feature]}</Typography>
                      </Link>
                    </Tooltip>
                  );
                })}
              </Box>
            </Box>
          </Box>
        ) : (
          <></>
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
              typography: "secondaryFont",
              fontWeight: "bold",
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
          {...{ user, isLoading, currency, setConfirmationModal }}
          title={`More in ${product.categories?.[0]}`}
          category={product.categories?.[0]}
          products={products.slice(0, 4)}
        />
        <ProductCardContainer
          {...{ user, isLoading, currency, setConfirmationModal }}
          title={`Recently viewed`}
          products={products.slice(5, 9)}
          disableLink
        />
      </Box>
    </Box>
  );
};

export default ProductPage;
