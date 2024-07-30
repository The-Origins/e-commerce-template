import React from "react";
import { Link } from "@mui/material";

const FooterLink = ({ path, children }) => {
  return (
    <Link
      href={path}
      sx={{
        color: "text.secondary",
        textDecoration: "none",
        transition: "0.2s",
        ":hover": { color: "primary.main" },
      }}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
