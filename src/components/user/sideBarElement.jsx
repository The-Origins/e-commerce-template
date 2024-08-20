import React from "react";
import { MenuItem, Link, ListItemIcon, useTheme } from "@mui/material";

const SideBarElement = ({ path, stage, title, icon }) => {
  const theme = useTheme();
  return (
    <Link
      href={`/user/${path}`}
      sx={{
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
