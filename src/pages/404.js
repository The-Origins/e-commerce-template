import { navigate } from "gatsby";
import React from "react";

const Page404 = () => {
    navigate("/?ref=404")
    document.title = "Redirecting..."
  return (
    <div
      style={{
        position:"fixed",
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
