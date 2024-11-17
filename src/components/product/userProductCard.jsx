import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "gatsby";
import { AddShoppingCart, Delete, Edit } from "@mui/icons-material";
import CustomizeProduct from "./customizeProduct";
import EditModal from "../layout/modals/edit";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { updateUser } from "../../state/user";
import FetchWorker from "../../utils/fetchWorker";
import IsErrorComponent from "../layout/isError";

const UserProductCard = ({
  id,
  details,
  type,
  user,
  offers,
  currency,
  setConfirmationModal,
  location,
}) => {
  const dispatch = useDispatch();
  const { total: value, ...remainingDetails } = details;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [product, setProduct] = useState({});
  const [reloadCounter, setReloadCounter] = useState(0);
  const [customizeProduct, setCustomizeProduct] = useState({
    on: false,
    title: "Edit your prefrences",
  });
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();

  useEffect(() => {
    const fetchWorker = new FetchWorker();
    fetchWorker
      .fetchProduct(id)
      .then((res) => {
        setProduct(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [id, reloadCounter]);

  const handleDelete = (event, path = "cart") => {
    event.preventDefault();
    event.stopPropagation();

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

  const edit = (event, path) => {
    event.preventDefault();
    event.stopPropagation();
    changeCustomizeProduct(path, "EDIT");
  };

  const add = (event) => {
    event.preventDefault();
    event.stopPropagation();
    changeCustomizeProduct("cart", "ADD");
  };

  return (
    <Link
      to={`/product/${product.id}`}
      style={{
        textDecoration: "none",
        color: "black",
      }}
      onClick={(event) => {
        if (customizeProduct.on) {
          event.preventDefault();
        }
      }}
    >
      <Box
        maxWidth={"100%"}
        display={"flex"}
        alignItems={"center"}
        boxShadow={!isLoading && `0px 0px 10px 0px ${theme.palette.grey[300]}`}
        borderRadius={"20px"}
        padding={!isLoading && "20px"}
        gap={"20px"}
        sx={{
          transition: "0.3s",
          ":hover": {
            boxShadow:
              type === "cart"
                ? `0px 0px 10px 0px ${theme.palette.grey[400]}`
                : undefined,
          },
          ":hover .cart-item-options": {
            opacity: 1,
          },
        }}
      >
        {isLoading ? (
          <Skeleton width={"100%"} height={"100px"} variant="rounded" />
        ) : isError ? (
          <IsErrorComponent
            size={"small"}
            flexDirection={"row"}
            setReloadCounter={setReloadCounter}
          />
        ) : (
          <>
            {(type === "cart" || type === "favourites") && (
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
            )}
            <Box
              height={"90px"}
              width={"clamp(100px, 2vw, 200px)"}
              sx={{
                backgroundImage: `url(${product.images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "5px",
              }}
            />
            <Box
              pl={"10px"}
              display={"flex"}
              flexDirection={"column"}
              width={"100%"}
              height={"100%"}
              justifyContent={"space-evenly"}
              gap={"5px"}
            >
              <Typography
                fontWeight={"bold"}
                fontSize={"clamp(1rem, 6vw, 1.2rem)"}
              >
                {product.name}
              </Typography>
              <Typography
                fontSize={"clamp(0.7rem, 2vw, 0.9rem)"}
                color={"text.secondary"}
              >
                {Object.keys(remainingDetails)
                  .map(
                    (detail) =>
                      `${
                        detail.charAt(0).toUpperCase() + detail.substring(1)
                      }: ${remainingDetails[detail]}`
                  )
                  .join(", ")}
              </Typography>
              <Typography>
                {currency.symbol} {details.total}
              </Typography>
              {type === "favourites" && (
                <Box
                  className={`${type || "user"}-item-actions`}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={"10px"}
                  sx={{ opacity: 1, transition: "0.2s" }}
                >
                  <Button
                    size="small"
                    sx={{ ":hover": { color: "primary.main" } }}
                    startIcon={isNotPhone ? <Delete /> : undefined}
                    onClick={(event) => handleDelete(event, type)}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="contained"
                    disableElevation
                    size="small"
                    sx={{ alignSelf: "flex-start" }}
                    onClick={add}
                    startIcon={isNotPhone ? <AddShoppingCart /> : undefined}
                  >
                    Add to cart
                  </Button>
                </Box>
              )}
              {!isNotPhone && type === "cart" && (
                <Box
                  className={"cart-item-options"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={"10px"}
                  sx={{ opacity: 1, transition: "0.2s" }}
                >
                  <Button
                    sx={{ ":hover": { color: "primary.main" } }}
                    onClick={(event) => edit(event, type)}
                    startIcon={<Edit />}
                    size="small"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    disableElevation
                    size="small"
                    sx={{ ":hover": { color: "primary.main" } }}
                    startIcon={<Delete />}
                    onClick={(event) => handleDelete(event, type)}
                  >
                    Remove
                  </Button>
                </Box>
              )}
            </Box>
            {isNotPhone && type === "cart" && (
              <Box
                className={"cart-item-options"}
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
                sx={{ opacity: 0, transition: "0.2s" }}
              >
                <Tooltip title="Edit" placement="right">
                  <IconButton
                    sx={{ ":hover": { color: "primary.main" } }}
                    onClick={(event) => edit(event, type)}
                  >
                    <Edit />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Remove from cart" placement="right">
                  <IconButton
                    sx={{ ":hover": { color: "primary.main" } }}
                    onClick={(event) => handleDelete(event, type)}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </>
        )}
      </Box>
    </Link>
  );
};

export default UserProductCard;
