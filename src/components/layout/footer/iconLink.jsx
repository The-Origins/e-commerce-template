import React from "react";
import { Link, IconButton } from "@mui/material";

const FooterIconLink = ({path, icon, children}) => {
  return (
    <Link
      href={`${path}`}
      sx={{ textDecoration: "none", color: "black" }}
    >
      <IconButton
        sx={{
          color: "black",
          transition: "0.3s",
          ":hover": { color: "primary.main" },
        }}
      >
        {icon}
      </IconButton>
      {children}
    </Link>
  );
};

export default FooterIconLink;
