import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AddShoppingCart, Delete, Edit } from "@mui/icons-material";
import CustomizeProduct from "./customizeProduct";
import ProductWorker from "../../scripts/productWorker";
import EditModal from "../layout/modals/edit";
import { navigate } from "gatsby";
import { useDispatch } from "react-redux";
import { updateUser } from "../../state/user";

const UserProductCard = ({
  id,
  details,
  type,
  user,
  currency,
  setConfirmationModal,
  isLink = false,
}) => {
  const dispatch = useDispatch();
  const productWorker = new ProductWorker();
  const product = productWorker.findProduct(id);
  const { total: value, ...remainingDetails } = details;
  const [customizeProduct, setCustomizeProduct] = useState({
    on: false,
    title: "Edit your prefrences",
  });
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();

  const handleDelete = (path = "cart") => {
    setConfirmationModal({
      on: true,
      message: `Are you sure you want to remove '${product.name}' from your ${path}`,
      onCancel: () => {},
      onConfirm: () =>
        dispatch(
          updateUser({ path, action: "DELETE", data: { productId: product.id } })
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
    <Box
      maxWidth={"100%"}
      display={"flex"}
      alignItems={"center"}
      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[300]}`}
      borderRadius={"20px"}
      padding={"20px"}
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
      <Link
        href={isLink ? `/product/?p=${id}` : undefined}
        sx={{
          color: "black",
          textDecoration: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          pl={"10px"}
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          height={"100%"}
          justifyContent={"space-evenly"}
          gap={"5px"}
        >
          <Typography fontWeight={"bold"} fontSize={"clamp(1rem, 6vw, 1.2rem)"}>
            {product.name}
          </Typography>
          <Typography
            fontSize={"clamp(0.7rem, 2vw, 0.9rem)"}
            color={"text.secondary"}
          >
            {Object.keys(remainingDetails)
              .map(
                (detail) =>
                  `${detail.charAt(0).toUpperCase() + detail.substring(1)}: ${
                    remainingDetails[detail]
                  }`
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
                onClick={() => handleDelete("favourites")}
              >
                Remove
              </Button>
              <Button
                variant="contained"
                disableElevation
                size="small"
                sx={{ alignSelf: "flex-start" }}
                onClick={() => changeCustomizeProduct("cart", "ADD")}
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
                onClick={() => changeCustomizeProduct("cart", "EDIT")}
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
                onClick={() => handleDelete("cart")}
              >
                Remove
              </Button>
            </Box>
          )}
        </Box>
      </Link>
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
              onClick={() => changeCustomizeProduct("cart", "EDIT")}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Remove from cart" placement="right">
            <IconButton
              sx={{ ":hover": { color: "primary.main" } }}
              onClick={() => handleDelete("cart")}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default UserProductCard;
