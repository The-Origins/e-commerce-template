import React from "react";
import { MenuItem, Link, ListItemIcon } from "@mui/material";

const SideBarElement = ({ path, stage, title, icon }) => {
  return (
    <Link
      href={`/user/#${path}`}
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
            "#F5F5F5",
        }}
      >
        <ListItemIcon color="inherit">{icon}</ListItemIcon>
        {title}
      </MenuItem>
    </Link>
  );
};

export default SideBarElement;
