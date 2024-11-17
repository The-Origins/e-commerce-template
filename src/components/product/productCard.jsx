import React, { useEffect, useState } from "react";
import { AddCircle, Edit, Favorite, ShoppingCart } from "@mui/icons-material";
import {
  useTheme,
  Box,
  IconButton,
  Rating,
  Typography,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import { Link } from "gatsby";
import CustomizeProduct from "./customizeProduct";
import ProductWorker from "../../utils/productWorker";
import EditModal from "../layout/modals/edit";
import { convertHex } from "../../theme";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { updateUser } from "../../state/user";

const ProductCard = ({
  location,
  product,
  user,
  currency,
  setConfirmationModal,
  offers,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const productWorker = new ProductWorker();
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [customizeProduct, setCustomizeProduct] = useState({
    on: false,
    title: (isInCart || isLiked) && "Edit your prefrences",
  });

  useEffect(() => {
    if (user.isLoggedIn) {
      setIsLiked(Boolean(user.data.favourites[product.id]));
      setIsInCart(Boolean(user.data.cart.items[product.id]));
    } else {
      setIsLiked(false);
      setIsInCart(false);
    }
  }, [user, product]);

  const handleFavourite = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (isLiked) {
      handleDelete();
    } else {
      changeCustomizeProduct("favourites", "ADD");
    }
  };

  const edit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    changeCustomizeProduct("cart", "EDIT");
  };

  const add = (event) => {
    event.preventDefault();
    event.stopPropagation();
    changeCustomizeProduct("cart", "ADD");
  };

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
      navigate(`/auth/login?tab=${location.pathname}`);
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "black", padding: "10px" }}
      onClick={(event) => {
        if (customizeProduct.on) {
          event.preventDefault();
        }
      }}
    >
      <Box
        boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
        overflow={"hidden"}
        borderRadius={"20px"}
        width={"clamp(130px, 40vw, 250px)"}
        height={"clamp(300px, 50vw, 350px)"}
        sx={{
          transition: "0.3s",
          ":hover": {
            boxShadow: `0px 0px 10px 0px ${theme.palette.grey[400]}`,
          },
        }}
      >
        <EditModal
          isEdit={customizeProduct.on}
          width={"min(700px, 90%)"}
          handleClose={() => setCustomizeProduct({ on: false })}
        >
          <CustomizeProduct
            {...{
              product,
              user,
              offers,
              currency,
              customizeProduct,
              setCustomizeProduct,
            }}
          />
        </EditModal>
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          height={"100%"}
        >
          <Box width={"100%"} height={"50%"} position={"relative"}>
            <Box
              top={0}
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              position={"absolute"}
            >
              <Tooltip title={isLiked ? "Favourited" : "Add to favourites"}>
                <IconButton onClick={handleFavourite}>
                  <Favorite
                    sx={{ color: isLiked ? "primary.main" : "white" }}
                  />
                </IconButton>
              </Tooltip>
              {isInCart ? (
                <Box display={"flex"} gap={"2px"}>
                  <Tooltip title="edit">
                    <IconButton sx={{ transition: "0.2s" }} onClick={edit}>
                      <Edit sx={{ color: "white" }} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="go to cart">
                    <Link
                      to={`/cart`}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <IconButton>
                        <ShoppingCart
                          sx={{
                            color: "white",
                          }}
                        />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </Box>
              ) : (
                <IconButton onClick={add} sx={{ color: "white" }}>
                  <AddCircle />
                </IconButton>
              )}
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${product.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
              }}
            />
          </Box>
          <Box
            padding={"10px"}
            width={"100%"}
            height={"50%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
          >
            <Box display={"flex"} flexDirection={"column"} width={"100%"}>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography fontSize={"0.7rem"} color={"text.secondary"}>
                  {product.categories.join(", ")}
                </Typography>
                {Boolean(offers[product.id]) && isNotPhone && (
                  <Typography
                    padding={"2px 5px"}
                    bgcolor={`rgba(${convertHex(
                      theme.palette.primary.main
                    ).join(" ")} / 0.2)`}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"clamp(0.6rem, 1vw, 0.8rem)"}
                    color={"primary.main"}
                  >
                    -{offers[product.id]}%
                  </Typography>
                )}
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  fontSize={"clamp(1rem, 2vw, 1.2rem)"}
                  fontWeight={"bold"}
                >
                  {product.name}
                </Typography>
                <Rating
                  value={product.rating.score}
                  sx={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
                  readOnly
                />
                <Typography
                  fontSize={"0.6rem"}
                  color={theme.palette.status.product[product.state]}
                >
                  {product.state}
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Typography fontSize={"1rem"}>
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
                    fontSize: "0.8rem",
                    color: "text.secondary",
                    textDecoration: "line-through",
                  }}
                >
                  {currency.symbol} {product.unitPrice.amount}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
