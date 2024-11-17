import { useTheme, Box, Typography, Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import SkeletonGroup from "../layout/skeletonGroup";
import ProductCard from "./productCard";
import { useDispatch } from "react-redux";
import FetchWorker from "../../utils/fetchWorker";
import { setSnackBar } from "../../state/snackBar";
import IsErrorComponent from "../layout/isError";
import { Link } from "gatsby";

const ProductCardContainer = ({
  user,
  session,
  currency,
  location,
  title,
  category,
  setConfirmationModal,
  isRecentlyViewedProducts = false,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const fetchWorker = new FetchWorker();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState({});
  const [reloadCounter, setReloadCounter] = useState(0);

  useEffect(() => {
    fetchWorker
      .fetchOffers()
      .then((res) => {
        setOffers(res);
      })
      .catch((err) => {
        dispatch(
          setSnackBar({
            on: true,
            type: "ERROR",
            message: `Error fetching product offers: ${err}`,
          })
        );
      });
    if (!isRecentlyViewedProducts) {
      fetchWorker
        .fetchResults(category, "category", 4)
        .then((res) => {
          setProducts(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [reloadCounter, category, isRecentlyViewedProducts]);

  useEffect(() => {
    if (isRecentlyViewedProducts) {
      if (!user.isFetching && !session.isFetching) {
        fetchWorker
          .fetchRecentlyViewedProducts(user, session)
          .then((res) => {
            setProducts(res);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            setIsError(true);
            dispatch(
              setSnackBar({
                on: true,
                type: "ERROR",
                message: `Error fetching recently viewed products: ${err}`,
              })
            );
          });
      }
    }
  }, [user, session, reloadCounter]);

  return (
    <Box
      width={"100%"}
      height={"80vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={"100%"} display={"flex"} flexDirection={"column"}>
        <Typography margin={"10px 20px"} color={"text.secondary"}>
          {title}
        </Typography>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"25px"}
          padding={"30px 2vw"}
          border={`1px solid ${theme.palette.grey[400]}`}
          overflow={"hidden"}
        >
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            sx={{
              overflowX: "scroll",
              "&::-webkit-scrollbar": {
                bgcolor: "transparent",
                height: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "25px",
                bgcolor: theme.palette.grey[300],
              },
              "&::-webkit-scrollbar-thumb:hover": {
                cursor: "pointer",
                bgcolor: theme.palette.grey[400],
              },
            }}
          >
            {isLoading ? (
              <SkeletonGroup
                count={4}
                width={"clamp(80px, 42vw, 250px)"}
                height={"clamp(300px, 50vw, 350px)"}
                flexDirection={"row"}
              />
            ) : isError ? (
              <IsErrorComponent
                message={"Error fetching products"}
                setReloadCounter={setReloadCounter}
              />
            ) : (
              <Box display={"flex"} gap={"20px"}>
                {products.map((product) => (
                  <ProductCard
                    {...{
                      location,
                      product,
                      user,
                      currency,
                      setConfirmationModal,
                      offers,
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>
          {!isRecentlyViewedProducts && (
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Link
                to={`/category?search=${category}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button endIcon={<ArrowRightAlt />}>View more</Button>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCardContainer;
