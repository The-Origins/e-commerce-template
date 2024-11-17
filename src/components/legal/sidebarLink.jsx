import { Add, Remove } from "@mui/icons-material";
import { Collapse, List, MenuItem, useTheme } from "@mui/material";
import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import legalData from "../../../lib/legal.json";

const SidebarLink = ({
  path,
  currentPath,
  currentSection,
  children,
  setIsMobileMenu,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(currentPath === path);
  }, [currentPath, path]);

  const handleClick = (path) => {
    if (currentPath === path) {
      setOpen((prev) => !prev);
    } else {
      changePath(path);
    }
  };

  const handleSectionClick = (path) => {
    changePath(path);
    setIsMobileMenu(false);
  };

  const changePath = (path) => {
    navigate(`/legal/${path}`);
  };

  return (
    <List>
      <MenuItem
        onClick={() => handleClick(path)}
        sx={{
          width: "100%",
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          bgcolor: currentPath === path ? theme.palette.grey[300] : undefined,
        }}
      >
        {children}
        {legalData[path] &&
          (open ? (
            <Remove sx={{ color: "text.secondary", fontSize: "1rem" }} />
          ) : (
            <Add sx={{ color: "text.secondary", fontSize: "1rem" }} />
          ))}
      </MenuItem>
      <Collapse component="li" in={open} timeout="auto" unmountOnExit>
        <List>
          {Object.keys(legalData[path] || {}).map((section) => {
            const sectionSearch = new URLSearchParams(section)
              .toString()
              .replace("=", "");
            return (
              <MenuItem
                sx={{
                  color:
                    currentSection === section ? "primary.main" : undefined,
                }}
                onClick={() => handleSectionClick(`${path}/${sectionSearch}`)}
              >
                {section}
              </MenuItem>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default SidebarLink;
