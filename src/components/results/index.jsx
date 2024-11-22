import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Slider,
  TextField,
  IconButton,
  Pagination,
  Skeleton,
  Button,
  InputAdornment,
  ClickAwayListener,
} from "@mui/material";
import ProductCard from "../product/productCard";
import {
  Close,
  FilterAlt,
  Home,
  RotateLeft,
  SearchOff,
} from "@mui/icons-material";
import { navigate } from "gatsby";
import SkeletonGroup from "../layout/skeletonGroup";
import resultHeaders from "./resultHeaders";
import ResultsWorker from "../../utils/resultsWorker";
import FilterComponent from "./filterComponent";
import ActiveFiltersComponent from "./activeFiltersComponent";
import FetchWorker from "../../utils/fetchWorker";
import { setSnackBar } from "../../state/snackBar";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const ResultsComponent = ({ location, path, setConfirmationModal }) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const fetchWorker = new FetchWorker();
  const resultsWorker = new ResultsWorker();
  const theme = useTheme();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);

  let page = Number(searchParams.get("p")) || 1;
  let search = searchParams.get("search");
  const [params, setParams] = useState(
    Object.fromEntries(searchParams.entries())
  );

  const user = useSelector((state) => state.user);
  const currency = useSelector((state) => state.currency);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [offers, setOffers] = useState();
  const [results, setResults] = useState({ pages: 1, all: [] });
  const [price, setPrice] = useState({ min: 0, max: 0 });
  const [priceFilter, setPriceFilter] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [filters, setFilters] = useState({});
  const [isMobileFilters, setIsMobileFilters] = useState(false);
  const mobileFiltersButtonRef = useRef(null);

  useEffect(() => {
    if (results.pageData) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [results]);

  useEffect(() => {
    fetchWorker
      .fetchOffers()
      .then((res) => {
        setOffers(res);
      })
      .catch((err) => {
        dispatch(
          setSnackBar({
            on: true,
            type: "ERROR",
            message: `Error fetching offers: ${err}`,
          })
        );
      });
    fetchWorker
      .fetchResults(search, path)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        dispatch(
          setSnackBar({
            on: true,
            type: "ERROR",
            message: `Error fetching results: ${err}`,
          })
        );
      });
  }, [path]);

  useEffect(() => {
    if (offers && data.length) {
      resultsWorker.parseInfo(data, params, offers);
      setFilterOptions(resultsWorker.filterOptions);
      setFilters(resultsWorker.filters);
      setPrice({
        min: resultsWorker.minPrice,
        max: resultsWorker.maxPrice,
      });
      setPriceFilter({
        min: resultsWorker.minPrice,
        max: resultsWorker.maxPrice,
      });
    }
  }, [offers, data]);

  useEffect(() => {
    if (data.length) {
      setResults(
        resultsWorker.getResults(
          resultsWorker.filterResults(filters, data, params, offers),
          1
        )
      );
      setFilterOptions(resultsWorker.filterOptions);
      resetPage();
    }
  }, [filters, data,]);

  const resetPage = (page = 1) => {
    setParams((prev) => ({ ...prev, p: page }));
    setParams((prev) => {
      const formatedParams = new URLSearchParams(prev).toString();
      navigate(`/${path || "results"}?${formatedParams}`);
      return prev;
    });
  };

  const handleFilterChange = ({ target }) => {
    setFilters((prev) => ({ ...prev, [target.name]: target.value }));
    setIsMobileFilters(false);
  };

  const handlePriceChange = (event, priceRange) => {
    setPriceFilter((prev) => {
      if (event.target.name === "priceSlider") {
        return { min: priceRange[0], max: priceRange[1] };
      }
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handlePriceSave = () => {
    setPriceFilter((prev) => ({
      min:
        prev.min < price.min
          ? price.min
          : prev.min > price.max
          ? price.max
          : prev.min,
      max:
        prev.max < price.min
          ? price.min
          : prev.max > price.max
          ? price.max
          : prev.max,
    }));

    setPriceFilter((prevPrice) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        min: prevPrice.min,
        max: prevPrice.max,
      }));
      return prevPrice;
    });

    setIsMobileFilters(false);
  };

  const resetFilter = (filter) => {
    setParams((prev) => {
      const { [filter]: value, ...rest } = prev;
      return rest;
    });

    setFilters((prev) => {
      if (filter === "price") {
        setPriceFilter({ min: price.min, max: price.max });
        return { ...prev, min: price.min, max: price.max };
      }
      return { ...prev, [filter]: "All" };
    });
    resetPage();
  };

  const handlePageChange = (event, value) => {
    const resultsWorker = new ResultsWorker(params, offers);
    setResults((prev) => resultsWorker.getResults(prev.all, value));
    resetPage(value);
  };

  const handleClickAway = (event) => {
    if (
      mobileFiltersButtonRef.current &&
      mobileFiltersButtonRef.current.contains(event.target)
    ) {
      return;
    }
    setIsMobileFilters(false);
  };

  return (
    <>
      <Helmet>
        <title>
          Search results for '{search}' | {theme.title}
        </title>
        <meta name="description" content={`Search results for '${search}'`} />
      </Helmet>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          minHeight={"100vh"}
          display={"flex"}
          width={isNotPhone ? "87%" : "95%"}
        >
          <ClickAwayListener onClickAway={handleClickAway}>
            <Box
              position={isNotPhone ? "static" : "fixed"}
              width={isNotPhone ? "290px" : "95%"}
              borderRadius={"25px 25px 0px 0px"}
              height={isNotPhone ? undefined : isMobileFilters ? "70%" : "0px"}
              bottom={0}
              display={"flex"}
              flexDirection={"column"}
              bgcolor={"white"}
              zIndex={!isNotPhone && isMobileFilters ? 1 : 0}
              sx={{ transformOrigin: "bottom", transition: "0.4s" }}
              boxShadow={
                isNotPhone
                  ? undefined
                  : `0px 0px 10px 0px ${theme.palette.grey[400]}`
              }
            >
              {!isNotPhone && (
                <>
                  <Box
                    padding={"10px"}
                    width={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    position={"relative"}
                  >
                    <Typography
                      sx={{ typography: "secondaryFont", fontWeight: "bold" }}
                    >
                      Filters
                    </Typography>
                    <IconButton
                      onClick={() => setIsMobileFilters(false)}
                      sx={{ position: "absolute", right: 5 }}
                    >
                      <Close />
                    </IconButton>
                  </Box>
                </>
              )}
              <Box height={"100%"} overflow={isNotPhone ? undefined : "scroll"}>
                {isLoading ? (
                  <SkeletonGroup count={3} height="200px" width={"200px"} />
                ) : (
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"20px"}
                    padding={"20px"}
                  >
                    <Box
                      width={"100%"}
                      boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      borderRadius={"10px"}
                      gap={"20px"}
                      padding={"30px"}
                      position={"relative"}
                    >
                      <Typography justifySelf={"center"} fontWeight={"bold"}>
                        Price
                      </Typography>
                      {(filters.min !== price.min ||
                        filters.max !== price.max) && (
                        <Box position={"absolute"} right={5} top={25}>
                          <IconButton onClick={() => resetFilter("price")}>
                            <RotateLeft />
                          </IconButton>
                        </Box>
                      )}
                      <TextField
                        fullWidth
                        step="10"
                        type="number"
                        size="small"
                        label="min"
                        name="min"
                        value={priceFilter.min}
                        onChange={handlePriceChange}
                        sx={{ "& > div": { fontSize: "13px" } }}
                        InputProps={{
                          min: price.min,
                          max: price.max,
                          startAdornment: (
                            <InputAdornment position="start">
                              <Typography>{currency.symbol}</Typography>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        fullWidth
                        step="10"
                        type="number"
                        size="small"
                        label="max"
                        name="max"
                        value={priceFilter.max}
                        onChange={handlePriceChange}
                        sx={{ "& > div": { fontSize: "13px" } }}
                        InputProps={{
                          min: price.min,
                          max: price.max,
                          startAdornment: (
                            <InputAdornment position="start">
                              <Typography>{currency.symbol}</Typography>
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Slider
                        name="priceSlider"
                        max={price.max}
                        min={price.min}
                        value={[priceFilter.min, priceFilter.max]}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        step={10}
                      />
                      {(priceFilter.min !== price.min ||
                        priceFilter.max !== price.max) &&
                        (filters.min !== priceFilter.min ||
                          filters.max !== priceFilter.max) && (
                          <Button
                            variant="contained"
                            disableElevation
                            onClick={handlePriceSave}
                          >
                            save
                          </Button>
                        )}
                    </Box>
                    {Object.keys(filterOptions).map((option) => (
                      <FilterComponent
                        {...{
                          option,
                          filterOptions,
                          filters,
                          handleFilterChange,
                          resetFilter,
                        }}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </ClickAwayListener>
          <Box width={"100%"} display={"flex"} flexDirection={"column"}>
            {isLoading ? (
              <Skeleton
                width={"100%"}
                height={"50px"}
                sx={{ mb: "20px" }}
                variant="rounded"
              />
            ) : resultHeaders[search] ? (
              <Box width={"100%"} display={"flex"} flexDirection={"column"}>
                <Box
                  position={"relative"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"20px"}
                  padding={"10px"}
                  height={"30vh"}
                  width={"100%"}
                  borderRadius={"20px"}
                  overflow={"hidden"}
                >
                  <Box
                    position={"absolute"}
                    width={"100%"}
                    height={"100%"}
                    zIndex={-1}
                    sx={{
                      backgroundImage: `url(${resultHeaders[search].image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(2px) brightness(50%)",
                    }}
                  />
                  <Typography
                    color={"white"}
                    fontSize={"clamp(1rem, 10vw, 3rem)"}
                  >
                    {search.charAt(0).toUpperCase() + search.substring(1)}
                  </Typography>
                  <Typography
                    color={theme.palette.grey[300]}
                    textAlign={"center"}
                  >
                    {resultHeaders[search].description}
                  </Typography>
                </Box>
                <ActiveFiltersComponent
                  resultCount={results.all.length}
                  {...{ filters, price, currency, resetFilter }}
                />
              </Box>
            ) : (
              <Box
                border={`1px solid ${theme.palette.grey[400]}`}
                borderRadius={"25px"}
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
                padding={"10px 20px"}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography
                    fontWeight={"bold"}
                    fontSize={"clamp(0.7rem, 4vw, 1.3rem)"}
                  >
                    Search results for "{search}"
                  </Typography>
                  <ActiveFiltersComponent
                    resultCount={results.all.length}
                    {...{ filters, price, currency, resetFilter }}
                  />
                </Box>
              </Box>
            )}
            {!isNotPhone && (
              <Box
                padding={"10px"}
                display={"flex"}
                justifyContent={"flex-end"}
              >
                <Button
                  ref={mobileFiltersButtonRef}
                  onClick={() => setIsMobileFilters((prev) => !prev)}
                  size="small"
                  variant="outlined"
                  sx={{ textTransform: "none" }}
                  endIcon={<FilterAlt />}
                >
                  filter results
                </Button>
              </Box>
            )}
            {isLoading ? (
              <SkeletonGroup
                count={8}
                flexDirection={"row"}
                flexWrap="wrap"
                width={"clamp(80px, 42vw, 250px)"}
                height={"clamp(300px, 50vw, 350px)"}
              />
            ) : results.pageData.length ? (
              <Box
                display={"flex"}
                justifyContent={isNotPhone ? "flex-start" : "space-between"}
                flexWrap={"wrap"}
                width={"100%"}
                minHeight={"100vh"}
              >
                {results.pageData.map((product) => (
                  <ProductCard
                    {...{
                      location,
                      setConfirmationModal,
                      product,
                      user,
                      currency,
                      offers,
                    }}
                  />
                ))}
              </Box>
            ) : (
              <Box
                margin={"50px 0px"}
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"20px "}
              >
                <Box display={"flex"} gap={"10px"} flexDirection={"column"}>
                  <Typography
                    fontSize={"1.3rem"}
                    display={"flex"}
                    gap={"10px"}
                    alignItems={"center"}
                  >
                    <SearchOff
                      sx={{ fontSize: "3rem", color: theme.palette.grey[400] }}
                    />
                    No results for search:
                  </Typography>
                  <Typography fontWeight={"bold"} fontSize={"1.3rem"}>
                    "{search}"
                  </Typography>
                  <Typography>
                    Try searching using broad keywords and correct spelling
                  </Typography>
                  <Link
                    to={`/`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      size="large"
                      variant="contained"
                      disableElevation
                      startIcon={<Home />}
                    >
                      Back home
                    </Button>
                  </Link>
                </Box>
              </Box>
            )}
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              m={"30px 0px"}
            >
              <Pagination
                page={page}
                count={results.pages}
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResultsComponent;
