import React from "react";
import { useDispatch } from "react-redux";
import { Close, History } from "@mui/icons-material";
import {
  Box,
  IconButton,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import {
  activateConfirmationModal,
  removeRecentSearch,
} from "../../../state/store";
import { navigate } from "gatsby";

const SearchSuggestionsComponent = ({
  isSearchSuggestions,
  recentSearches,
  searchSuggestions,
}) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSuggestionSelect = (suggestion) => {
    const formattedSearch = new URLSearchParams(suggestion).toString();
    navigate(
      `/results?search=${formattedSearch.substring(
        0,
        formattedSearch.length - 1
      )}`
    );
  };

  const handleDeleteSuggestion = (suggestion) => {
    dispatch(
      activateConfirmationModal({
        message: `Are you sure you want to remove '${suggestion}' from your search history?`,
        onCancel: () => {},
        onConfirm: () => dispatch(removeRecentSearch(suggestion)),
      })
    );
  };

  return (
    <Box
      position={"absolute"}
      top={"100%"}
      width={"100%"}
      height={isSearchSuggestions ? "500px" : "0px"}
      sx={{
        transition: "0.3s ease-in",
        overflowY: isSearchSuggestions ? "scroll" : "hidden",
        "&::-webkit-scrollbar": {
          bgcolor: "transparent",
          width: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "25px",
          bgcolor: theme.palette.grey[300],
        },
        "&::-webkit-scrollbar-thumb:hover": {
          cursor: "pointer",
          bgcolor: theme.palette.grey[400],
        },
      }}
      bgcolor={"white"}
      zIndex={20}
      boxShadow={`0px 5px 10px 0px ${theme.palette.grey[500]}`}
      borderRadius={"0px 0px 20px 20px"}
    >
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        gap={"5px"}
        padding={"20px"}
      >
        {searchSuggestions.map((suggestion) => (
          <Box
            className="search-suggestion"
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              ":hover .delete-search-suggestion": {
                opacity: 1,
              },
            }}
          >
            <MenuItem
              sx={{ width: "100%" }}
              onClick={() => handleSuggestionSelect(suggestion)}
            >
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                {recentSearches.includes(suggestion) && <History />}
                <Typography>{suggestion}</Typography>
              </Box>
            </MenuItem>
            {recentSearches.includes(suggestion) && (
              <Box
                bgcolor={theme.palette.grey[100]}
                className="delete-search-suggestion"
                sx={{
                  opacity: 0,
                  ":hover ": {
                    bgcolor: "transparent",
                  },
                }}
              >
                <Tooltip title="remove" placement="right">
                  <IconButton
                    onClick={() => handleDeleteSuggestion(suggestion)}
                  >
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SearchSuggestionsComponent;
