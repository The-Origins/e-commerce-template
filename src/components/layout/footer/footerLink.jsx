import React from "react";
import { Link } from "@mui/material";

const FooterLink = ({ path, children }) => {
  return (
    <Link
      href={path}
      fontSize={"1rem"}
      sx={{
        display: "flex",
        textDecoration: "none",
        color: "black",
        gap: "10px",
        transition: "0.3s",
        ":hover": {
          color: "primary.main",
        },
      }}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
