import { Close, History, Search } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRecent } from "../../../state/user";

const SearchBar = ({ searchFocus = false, setConfirmationModal }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  //fetch recent searches from user or session
  const user = useSelector((state) => state.user);
  const session = useSelector((state) => state.session);
  const recentSearches = user.isLoggedIn
    ? user.data.recent.searches
    : session?.recent.searches;
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const formRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchFocus && searchRef.current) {
      searchRef.current.focus();
    }
  }, [searchFocus]);

  useEffect(() => {
    if (recentSearches) {
      setSuggestions(recentSearches);
    }
  }, [recentSearches]);

  const handleSubmit = () => {
    dispatch(updateRecent({ path: "search", action: "ADD", data: search }));
  };

  const handleOptionDelete = (option) => {
    setOpen(false);
    setConfirmationModal({
      on: true,
      message: `Are you sure you want to remove '${option}' from your search history?`,
      onCancel: () => {},
      onConfirm: () =>
        dispatch(
          updateRecent({
            path: "search",
            action: "REMOVE",
            data: option,
          })
        ),
    });
  };

  const handleOptionSelect = (option) => {
    setSearch(option);
    setOpen(false);

    setTimeout(() => {
      // Trigger form submission after setting search
      if (formRef.current) {
        formRef.current.submit();
      }
    }, 0);
  };

  const handleChange = (event, search) => {
    setSearch(search);
  };

  return (
    <form
      ref={formRef}
      action={`${__PATH_PREFIX__}/results`}
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Autocomplete
        fullWidth
        name="search"
        freeSolo
        autoHighlight
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        options={suggestions}
        inputValue={search}
        onInputChange={handleChange}
        renderOption={(props, option) => (
          <Box
            {...{ ...props, onClick: () => {} }}
            component={"li"}
            fontFamily={"roboto mono"}
            display={"flex"}
            sx={{
              ":hover .delete-search-suggestion": {
                opacity: 1,
              },
            }}
          >
            <button
              type="submit"
              onClick={() => handleOptionSelect(option)}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                padding: 0,
                backgroundColor: "transparent",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  ":hover": { backgroundColor: "initial" },
                }}
              >
                {recentSearches.includes(option) && (
                  <History sx={{ fontSize: "1rem", color: "text.secondary" }} />
                )}
                <Typography>{option}</Typography>
              </Box>
            </button>
            {recentSearches.includes(option) && (
              <Tooltip title="remove">
                <IconButton
                  size="small"
                  className="delete-search-suggestion"
                  onClick={() => handleOptionDelete(option)}
                  sx={{ transition: "0.2s", opacity: isNotPhone ? 0 : 1 }}
                >
                  <Close sx={{ fontSize: "1rem" }} />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        )}
        renderInput={(props) => (
          <TextField
            {...props}
            size={isNotPhone ? "medium" : "small"}
            name="search"
            placeholder="Search..."
            fullWidth
            InputProps={{
              ...props.InputProps,
              inputRef: searchRef,
            }}
            sx={{ "& > div": { borderRadius: "30px 0px 0px 30px" } }}
          />
        )}
      />
      <button
        disabled={!search}
        type="submit"
        style={{
          padding: "0px",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <Tooltip title="search">
          <Box
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
            padding={"0px 20px"}
            borderTop={`1px solid ${theme.palette.grey[400]}`}
            borderRight={`1px solid ${theme.palette.grey[400]}`}
            borderBottom={`1px solid ${theme.palette.grey[400]}`}
            borderRadius={"0px 30px 30px 0px"}
            sx={{
              transition: "0.2s",
              ":hover": {
                cursor: "pointer",
                bgcolor: theme.palette.grey[300],
              },
            }}
          >
            <Search sx={{ color: theme.palette.grey[600] }} />
          </Box>
        </Tooltip>
      </button>
    </form>
  );
};

export default SearchBar;
