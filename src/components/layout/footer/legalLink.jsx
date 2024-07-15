import React from "react";
import { Link } from "@mui/material";

const FooterLegalLink = ({ children }) => {
  return (
    <Link
      sx={{
        fontSize: "12px",
        fontWeight: "lighter",
        color: "text.secondary",
        textDecoration: "none",
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

export default FooterLegalLink;
