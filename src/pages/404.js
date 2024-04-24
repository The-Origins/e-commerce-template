import React from "react";
import { activateSnackBar } from "../state/store";
import { useDispatch } from "react-redux";

const Page404 = () => {
  document.title = "404 Error | Wendoh Cakes";
  const dispatch = useDispatch();
  dispatch(
    activateSnackBar({
      message: {
        title: "404 Error",
        description: "Couldn't find the page you're looking for",
      },
      modalType: "error",
    })
  );
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Redirecting...</h1>
    </div>
  );
};

export default Page404;
