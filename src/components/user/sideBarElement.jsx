import React from "react";
import { MenuItem, ListItemIcon, useTheme } from "@mui/material";
import { Link } from "gatsby";

const SideBarElement = ({ path, stage, title, icon }) => {
  const theme = useTheme();
  return (
    <Link
      to={`/user/${path}`}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <MenuItem
        sx={{
          ":hover": { color: "primary.main" },
          height: "50px",
          bgcolor:
            ((stage === "order" && path === "orders") || path === stage) &&
            theme.palette.grey[300],
        }}
      >
        <ListItemIcon color="inherit">{icon}</ListItemIcon>
        {title}
      </MenuItem>
    </Link>
  );
};

export default SideBarElement;
