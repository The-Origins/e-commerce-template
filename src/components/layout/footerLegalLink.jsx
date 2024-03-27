import React from "react";
import { Link } from "@mui/material";

const FooterLegalLink = (props) => {
  return (
    <Link
      key={`footer-legal-link-${props.id}`}
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
      {props.children}
    </Link>
  );
};

export default FooterLegalLink;
