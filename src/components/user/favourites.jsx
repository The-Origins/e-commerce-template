import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import UserProductCard from "../product/userProductCard";
import { useDispatch } from "react-redux";
import FetchWorker from "../../utils/fetchWorker";
import { setSnackBar } from "../../state/snackBar";

const UserFavourites = ({
  user,
  currency,
  location,
  setIsLoading,
  setConfirmationModal,
}) => {
  const dispatch = useDispatch();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [offers, setOffers] = useState({});

  useEffect(() => {
    const fetchWorker = new FetchWorker();
    setIsLoading(true);
    fetchWorker
      .fetchOffers()
      .then((res) => {
        setOffers(res);
        setIsLoading(false);
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
  }, []);

  return (
    <Box
      padding={isNotPhone ? "20px" : "20px 7px"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
    >
      {Object.keys(user.data.favourites).map((id) => {
        return (
          <UserProductCard
            {...{ id, user, offers, currency, location, setConfirmationModal }}
            details={user.data.favourites[id]}
            type="favourites"
          />
        );
      })}
    </Box>
  );
};

export default UserFavourites;
