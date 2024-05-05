import React from "react";
import { MenuItem, Link, ListItemIcon } from "@mui/material";

const SideBarElement = (props) => {
  return (
    <Link
      href={`/user/#${props.path}`}
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
            ((props.stage === "order" && props.path === "orders") ||
              props.path === props.stage) &&
            "#F5F5F5",
        }}
      >
        <ListItemIcon color="inherit">{props.icon}</ListItemIcon>
        {props.title}
      </MenuItem>
    </Link>
  );
};

export default SideBarElement;
