import React, { useEffect, useRef, useState } from "react";
import UserMenu from "./userMenu";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Link,
  TextField,
  InputAdornment,
  useMediaQuery,
  Skeleton,
  useTheme,
} from "@mui/material";
import { Search, ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addRecentSearch } from "../../../state/store";
import SkeletonGroup from "../skeletonGroup";
import SearchSuggestionsComponent from "./searchSuggestions";

const Header = ({ user, isLoading }) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const dispatch = useDispatch();
  const isUser = Object.keys(user).length;
  const [isUserMenu, setIsUserMenu] = useState(false);
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const mobileSearchRef = useRef(null);
  const [search, setSearch] = useState("");
  const recentSearches = useSelector((state) => state.recentSearches);
  const [isSearchSuggestions, setIsSearchSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState(recentSearches);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target)
      ) {
        setIsMobileSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const switchIsUserMenu = (state) => {
    setIsUserMenu(state);
  };

  const handleSearch = () => {
    dispatch(addRecentSearch(search));
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  useEffect(() => {
    setSearchSuggestions(recentSearches);
  }, [recentSearches]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "white",
        boxShadow: `0px 0px 10px 0px ${theme.palette.grey[300]}`,
        padding: "10px",
        transition: "0.3s",
        zIndex: 1,
      }}
    >
      <Box
        position={"relative"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          width={isNotPhone ? "80%" : "90%"}
        >
          {!isLoading && (
            <UserMenu
              isUserMenu={isUserMenu}
              switchIsUserMenu={switchIsUserMenu}
              user={user}
            />
          )}
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            mt={isNotPhone ? undefined : "5px"}
          >
            <Box display={"flex"} alignItems={"center"}>
              {isLoading ? (
                <Skeleton
                  width={"clamp(100px, 5vw, 300px)"}
                  height={"30px"}
                  variant="rounded"
                />
              ) : (
                <Link
                  href="/"
                  fontSize={"clamp(0.4rem, 5vw, 3rem)"}
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontFamily: theme.fonts.secondary,
                  }}
                >
                  E-commerce
                </Link>
              )}
            </Box>
            {isNotPhone &&
              (isLoading ? (
                <Skeleton width={"50%"} height={"30px"} variant="rounded" />
              ) : (
                <Box
                  width={"50%"}
                  display={"flex"}
                  flexDirection={"column"}
                  position={"relative"}
                >
                  <form
                    action="/results"
                    style={{ width: "100%" }}
                    onSubmit={handleSearch}
                  >
                    <TextField
                      fullWidth
                      name="search"
                      value={search}
                      onChange={handleChange}
                      onFocus={() => setIsSearchSuggestions(true)}
                      onBlur={() => setIsSearchSuggestions(false)}
                      InputProps={{
                        autoComplete: "off",
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton type="submit" disabled={!search.length}>
                              <Search />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      type="search"
                      placeholder="search for what you desire..."
                      sx={{ "& > div": { borderRadius: "25px" } }}
                    />
                  </form>
                  <SearchSuggestionsComponent
                    {...{
                      isSearchSuggestions,
                      recentSearches,
                      searchSuggestions,
                    }}
                  />
                </Box>
              ))}
            {isLoading ? (
              <SkeletonGroup
                count={3}
                width={"30px"}
                height={"30px"}
                variant={"circular"}
                flexDirection={"row"}
              />
            ) : (
              <Box
                display={"flex"}
                gap={isNotPhone ? "20px" : "5px"}
                alignItems={"center"}
              >
                {!isNotPhone && (
                  <IconButton
                    onClick={() => {
                      setIsMobileSearch((prev) => !prev);
                    }}
                  >
                    <Search />
                  </IconButton>
                )}
                <Link href="/cart">
                  <IconButton>
                    <Badge
                      color="primary"
                      badgeContent={
                        isUser ? Object.keys(user.cart.items).length : 0
                      }
                    >
                      <ShoppingCart
                        sx={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)" }}
                      />
                    </Badge>
                  </IconButton>
                </Link>
                <IconButton
                  onClick={() => {
                    switchIsUserMenu(true);
                  }}
                >
                  <Badge
                    color="primary"
                    variant="dot"
                    overlap="circular"
                    invisible={isUser ? !user.notifications.new : true}
                    badgeContent=" "
                  >
                    <Avatar
                      alt="profile image"
                      sx={{
                        bgcolor: isUserMenu ? "primary.main" : undefined,
                        width: "clamp(1.8rem, 3vw, 2.3rem)",
                        height: "clamp(1.8rem, 3vw, 2.3rem)",
                      }}
                    />
                  </Badge>
                </IconButton>
              </Box>
            )}
          </Box>
          {!isNotPhone && (
            <Box
              position={"relative"}
              ref={mobileSearchRef}
              sx={{ transition: "0.2s" }}
              overflow={isMobileSearch ? undefined : "hidden"}
              height={isMobileSearch ? "45px" : "0px"}
              mt={isMobileSearch && "10px"}
            >
              <form
                action="/results"
                style={{ width: "100%" }}
                onSubmit={handleSearch}
              >
                <TextField
                  type="search"
                  size="small"
                  onFocus={() => setIsSearchSuggestions(true)}
                  onBlur={() => setIsSearchSuggestions(false)}
                  value={search}
                  onChange={handleChange}
                  placeholder="search for what you desire..."
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton type="submit">
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    width: "100%",
                    "& > div": { borderRadius: "25px" },
                  }}
                />
              </form>
              <SearchSuggestionsComponent
                {...{
                  isSearchSuggestions,
                  recentSearches,
                  searchSuggestions,
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
    </header>
  );
};

export default Header;
