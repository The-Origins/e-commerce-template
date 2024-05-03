import React from "react";
import { Link, IconButton } from "@mui/material";

const FooterIconLink = (props) => {
  return (
    <Link
      href={props.path}
      sx={{ textDecoration: "none", color: "black" }}
    >
      <IconButton
        sx={{
          color: "black",
          transition: "0.3s",
          ":hover": { color: "primary.main" },
        }}
      >
        {props.icon}
      </IconButton>
    </Link>
  );
};

export default FooterIconLink;
