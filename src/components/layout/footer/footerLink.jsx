import React from "react";
import { Link } from "gatsby";
import { Typography } from "@mui/material";

const FooterLink = ({ path, children }) => {
  return (
    <Link
      to={path}
      style={{
        color: "black",
        textDecoration: "none",
      }}
    >
      <Typography
        sx={{
          color: "text.secondary",
          transition: "0.2s",
          ":hover": { color: "primary.main" },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};

export default FooterLink;
