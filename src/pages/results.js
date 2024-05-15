import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  IconButton,
  Pagination,
  RadioGroup,
  Radio,
  Button,
  Skeleton,
} from "@mui/material";
import data from "../lib/data";
import ProductCard from "../components/product/productCard";
import { Close, FilterAlt, RotateLeft } from "@mui/icons-material";
import { navigate } from "gatsby";
import ResultsWorker from "../scripts/resultsWorker";
import SkeletonGroup from "../components/product/skeletonGroup";

const typesPlural = { cake: "Cakes", pastry: "Pastries" };
const ResultsPage = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const params = new URLSearchParams(window.location.search);
  let page = Number(params.get("p")) || 1;
  const search = params.get("search");
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([[]]);
  const [options, setOptions] = useState({});
  const [filters, setFilters] = useState({ category: "All", brand: "All" });
  const [priceRange, setPriceRange] = useState([20, 33]);
  const [prices, setPrices] = useState([]);
  const [minPrice, maxPrice] = [Math.min(...prices), Math.max(...prices)];
  const [isPriceChange, setIsPriceChange] = useState(false);
  const [isMobileFilters, setIsMobileFilters] = useState(false);
  const mobileFiltersRef = useRef(null);

  useEffect(() => {
    const resultsWorker = new ResultsWorker(data.products);
    document.title = `Search results for '${search}'`;
    setFilters((prev) => ({
      ...prev,
      types: resultsWorker.parseTypes(),
      min: Math.min(...resultsWorker.parsePrices()),
      max: Math.max(...resultsWorker.parsePrices()),
    }));
    setOptions((prev) => ({
      ...prev,
      category: resultsWorker.parseCategories(),
      brand: resultsWorker.parseBrands(),
    }));
    setPriceRange([
      Math.min(...resultsWorker.parsePrices()),
      Math.max(...resultsWorker.parsePrices()),
    ]);
    setPrices(resultsWorker.parsePrices());

    const handleClickOutside = (event) => {
      if (
        mobileFiltersRef.current &&
        !mobileFiltersRef.current.contains(event.target)
      ) {
        switchIsMobileFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const resultsWorker = new ResultsWorker(data.products);
    let filteredResults = resultsWorker.filter(filters, typesPlural);
    setResults(resultsWorker.paginate(filteredResults));
    navigate(`/results?search=${String(search).split(" ").join("+")}&p=1`);
    setIsLoading(false);
  }, [filters]);

  const handlePriceRangeChangeSlider = (event, newPriceRange) => {
    setPriceRange(newPriceRange);
    setIsPriceChange(true);
  };

  const handlePriceRangeChangeInput = ({ target }) => {
    if (target.name === "min") {
      if (target.value < maxPrice) {
        setPriceRange((prev) => [target.value, prev[1]]);
      }
    } else if (target.name === "max") {
      if (target.value < maxPrice) {
        setPriceRange((prev) => [prev[0], target.value]);
      }
    }
    setIsPriceChange(true);
  };

  const handlePriceSave = () => {
    if (priceRange[0] < minPrice) {
      setPriceRange((prev) => [minPrice, prev[1]]);
    } else if (priceRange[1] > maxPrice) {
      setPriceRange((prev) => [prev[0], maxPrice]);
    }
    setFilters((prev) => ({ ...prev, min: priceRange[0], max: priceRange[1] }));
    setIsPriceChange(false);
  };

  const handlePriceRangeReset = () => {
    setPriceRange([minPrice, maxPrice]);
    setFilters((prev) => ({
      ...prev,
      min: minPrice,
      max: maxPrice,
    }));
    setIsPriceChange(false);
  };

  const handleOptionChange = ({ target }) => {
    setFilters((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const resetOption = (option) => {
    setFilters((prev) => ({ ...prev, [option]: "All" }));
  };

  const switchIsMobileFilters = (state) => {
    setIsMobileFilters(state);
  };

  const handlePageChange = (event, value) => {
    navigate(
      `/results?search=${String(search).split(" ").join("+")}&p=${value}`
    );
  };

  return (
    <Box
      mt={"150px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={"95%"}>
        <Box minHeight={"100vh"} display={"flex"}>
          <Box
            ref={mobileFiltersRef}
            position={isNotPhone ? undefined : "fixed"}
            bottom={isMobileFilters ? 0 : -20}
            paddingTop={"20px"}
            mb={isNotPhone ? "50px" : undefined}
            width={isNotPhone ? "25%" : "95%"}
            borderRadius={"25px 25px 0px 0px"}
            height={isMobileFilters ? "70%" : "0"}
            display={"flex"}
            justifyContent={"center"}
            overflow={isNotPhone ? undefined : "scroll"}
            bgcolor={"white"}
            zIndex={isNotPhone ? undefined : 6}
            sx={{ transformOrigin: "bottom", transition: "0.4s" }}
            boxShadow={
              isNotPhone
                ? undefined
                : `0px 0px 10px 0px ${theme.palette.grey[400]}`
            }
          >
            <Box
              minHeight={"400px"}
              width={isNotPhone ? "70%" : "80%"}
              borderRadius={"25px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={"20px"}
              padding={"20px 0px"}
              position={"relative"}
            >
              {!isNotPhone && (
                <>
                  <Typography fontFamily={"pacifico"}>Filters</Typography>
                  <Box
                    top={-10}
                    right={-30}
                    position={"absolute"}
                    width={"110%"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    <IconButton onClick={() => switchIsMobileFilters(false)}>
                      <Close />
                    </IconButton>
                  </Box>
                </>
              )}
              {isLoading ? (
                <SkeletonGroup count={3} height="200px" width={"200px"} />
              ) : (
                <>
                  <Box
                    width={"100%"}
                    boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    borderRadius={"10px"}
                    gap={"20px"}
                    padding={"20px 0px"}
                    position={"relative"}
                  >
                    <Typography
                      justifySelf={"center"}
                      mt={"10px"}
                      fontFamily={"pacifico"}
                      fontSize={"1.2rem"}
                    >
                      Price
                    </Typography>
                    {(priceRange[0] !== minPrice ||
                      priceRange[1] !== maxPrice) && (
                      <Box position={"absolute"} right={5} top={25}>
                        <IconButton onClick={handlePriceRangeReset}>
                          <RotateLeft />
                        </IconButton>
                      </Box>
                    )}

                    <Box
                      display={"flex"}
                      flexWrap={"wrap"}
                      gap={"45px"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      width={"90%"}
                    >
                      <TextField
                        step="10"
                        type="number"
                        size="small"
                        label="min"
                        name="min"
                        value={priceRange[0]}
                        onChange={handlePriceRangeChangeInput}
                        sx={{ "& > div": { fontSize: "13px" } }}
                      />
                      <TextField
                        step="10"
                        type="number"
                        size="small"
                        label="max"
                        name="max"
                        value={priceRange[1]}
                        onChange={handlePriceRangeChangeInput}
                        sx={{ "& > div": { fontSize: "13px" } }}
                      />
                    </Box>
                    <Slider
                      max={maxPrice}
                      min={minPrice}
                      value={priceRange}
                      onChange={handlePriceRangeChangeSlider}
                      valueLabelDisplay="auto"
                      step={100}
                      sx={{ width: "80%" }}
                    />
                    {isPriceChange && (
                      <Button
                        variant="contained"
                        disableElevation
                        onClick={handlePriceSave}
                      >
                        Save
                      </Button>
                    )}
                  </Box>
                  {Object.keys(options).map((option) => {
                    if (options[option].length > 2) {
                      return (
                        <Box
                          width={"100%"}
                          boxShadow={`0px 0px 10px 0px ${theme.palette.grey[400]}`}
                          display={"flex"}
                          flexDirection={"column"}
                          alignItems={"center"}
                          borderRadius={"20px"}
                        >
                          <Box
                            width={"100%"}
                            display={"flex"}
                            position={"relative"}
                            justifyContent={"center"}
                          >
                            <Typography
                              padding={"10px"}
                              fontSize={"1.2rem"}
                              fontFamily={"pacifico"}
                            >
                              {option.charAt(0).toUpperCase() +
                                option.substring(1)}
                            </Typography>
                            <IconButton
                              disabled={filters[option] === "All"}
                              onClick={() => resetOption(option)}
                              sx={{
                                opacity: filters[option] === "All" ? 0 : 1,
                                position: "absolute",
                                right: 0,
                                m: "5px",
                              }}
                            >
                              <RotateLeft />
                            </IconButton>
                          </Box>
                          <Box
                            width={"100%"}
                            display={"flex"}
                            flexDirection={"column"}
                            padding={"20px"}
                            gap={"10px"}
                            maxHeight={"300px"}
                            sx={{
                              overflowY: "scroll",
                              "&::-webkit-scrollbar": {
                                bgcolor: "transparent",
                              },
                              "&::-webkit-scrollbar-thumb": {
                                borderRadius: "25px",
                                bgcolor: theme.palette.grey[300],
                                transition: "0.3s",
                              },
                              "&::-webkit-scrollbar-thumb:hover": {
                                cursor: "pointer",
                                bgcolor: theme.palette.grey[400],
                              },
                            }}
                          >
                            <RadioGroup
                              row
                              aria-labelledby={`result-filters-group`}
                              name={option}
                              value={filters[option]}
                              onChange={handleOptionChange}
                              sx={{
                                width: "90%",
                                flexDirection: "column",
                                alignSelf: "center",
                              }}
                            >
                              {options[option].map((item) => (
                                <FormControlLabel
                                  value={item}
                                  control={<Radio />}
                                  label={
                                    item.charAt(0).toUpperCase() +
                                    item.substring(1)
                                  }
                                  checked={filters[option] === item}
                                />
                              ))}
                            </RadioGroup>
                          </Box>
                        </Box>
                      );
                    }
                    return <></>;
                  })}
                </>
              )}
            </Box>
          </Box>
          <Box
            width={isNotPhone ? "75%" : "100%"}
            display={"flex"}
            flexDirection={"column"}
          >
            {isLoading ? (
              <Skeleton
                width={"100%"}
                height={"50px"}
                sx={{ mb: "20px" }}
                variant="rounded"
              />
            ) : (
              <Box
                border={`1px solid ${theme.palette.grey[400]}`}
                borderRadius={"25px"}
                width={"100%"}
                mb={"30px"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                position={"relative"}
                gap={"20px"}
              >
                <Typography
                  fontFamily={"pacifico"}
                  fontSize={"clamp(0.7rem, 4vw, 1.3rem)"}
                  margin={"10px 30px"}
                >
                  Search results for "{search}"
                </Typography>
                {!isNotPhone && (
                  <Box
                    sx={{ position: "absolute", right: 0 }}
                    bgcolor={"white"}
                  >
                    <IconButton
                      onClick={() => switchIsMobileFilters(!isMobileFilters)}
                    >
                      <FilterAlt
                        sx={{
                          color: isMobileFilters ? "primary.main" : undefined,
                        }}
                      />
                    </IconButton>
                  </Box>
                )}
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
            ) : (
              results[page - 1] && (
                <Box
                  display={"flex"}
                  flexWrap={"wrap"}
                  padding={"0px 0px 50px 0px"}
                  width={"100%"}
                >
                  {results[page - 1].map((result) => (
                    <ProductCard product={result} user={user} />
                  ))}
                </Box>
              )
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
                count={results.length}
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResultsPage;
