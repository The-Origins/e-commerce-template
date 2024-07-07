import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Slider,
  FormControlLabel,
  TextField,
  IconButton,
  Pagination,
  RadioGroup,
  Radio,
  Skeleton,
} from "@mui/material";
import ProductCard from "../product/productCard";
import { Close, FilterAlt, RotateLeft } from "@mui/icons-material";
import { navigate } from "gatsby";
import SkeletonGroup from "../layout/skeletonGroup";
import resultHeaders from "../../lib/resultHeaders";
import ResultsWorker from "../../scripts/resultsWorker";

const ResultsComponent = ({ path, data }) => {
  const resultsWorker = new ResultsWorker(data);
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const params = new URLSearchParams(window.location.search);
  let page = Number(params.get("p")) || 1;
  let search = params.get("search");
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState([[]]);
  const options = {
    category: resultsWorker.categories,
    brand: resultsWorker.brands,
  };
  const [filters, setFilters] = useState({
    min: resultsWorker.minPrice,
    max: resultsWorker.maxPrice,
    category: "All",
    brand: "All",
  });
  const [minPrice, maxPrice] = [resultsWorker.minPrice, resultsWorker.maxPrice];
  const [isMobileFilters, setIsMobileFilters] = useState(false);
  const mobileFiltersRef = useRef(null);

  useEffect(() => {
    document.title = `Search results for '${search}'`;
    const handleClickOutside = (event) => {
      if (
        mobileFiltersRef.current &&
        !mobileFiltersRef.current.contains(event.target)
      ) {
        setIsMobileFilters(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let filteredResults = resultsWorker.filter(filters);
    setResults(resultsWorker.paginate(filteredResults));
    setIsLoading(false);
    search = new URLSearchParams(search).toString().replace("=", "");
    navigate(`/${path || "results"}?search=${search}&p=1`);
  }, [filters]);

  const handleFilterChange = (event, priceRange) => {
    setFilters((prev) => {
      if (event.target.name === "priceSlider") {
        return { ...prev, min: priceRange[0], max: priceRange[1] };
      }

      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const reset = (option) => {
    setFilters((prev) => {
      if (option === "price") {
        return { ...prev, min: minPrice, max: maxPrice };
      }
      return { ...prev, [option]: "All" };
    });
  };

  const handlePageChange = (event, value) => {
    search = new URLSearchParams(search).toString().replace("=", "");
    navigate(`/${path || "results"}?search=${search}&p=${value}`);
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
            mb={isNotPhone ? "50px" : undefined}
            width={isNotPhone ? "320px" : "95%"}
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
              position={"relative"}
            >
              {!isNotPhone && (
                <>
                  <Typography fontFamily={theme.fonts.secondary}>
                    Filters
                  </Typography>
                  <Box
                    top={-10}
                    right={-30}
                    position={"absolute"}
                    width={"110%"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    <IconButton onClick={() => setIsMobileFilters(false)}>
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
                    padding={"30px"}
                    position={"relative"}
                  >
                    <Typography
                      justifySelf={"center"}
                      mt={"10px"}
                      fontFamily={theme.fonts.secondary}
                      fontSize={"1.2rem"}
                    >
                      Price
                    </Typography>
                    {(filters.min !== minPrice || filters.max !== maxPrice) && (
                      <Box position={"absolute"} right={5} top={25}>
                        <IconButton onClick={() => reset("price")}>
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
                      value={filters.min}
                      onChange={handleFilterChange}
                      sx={{ "& > div": { fontSize: "13px" } }}
                      inputProps={{
                        min: minPrice,
                        max: maxPrice,
                      }}
                    />
                    <TextField
                      fullWidth
                      step="10"
                      type="number"
                      size="small"
                      label="max"
                      name="max"
                      value={filters.max}
                      onChange={handleFilterChange}
                      sx={{ "& > div": { fontSize: "13px" } }}
                      inputProps={{
                        min: minPrice,
                        max: maxPrice,
                      }}
                    />
                    <Slider
                      name="priceSlider"
                      max={maxPrice}
                      min={minPrice}
                      value={[filters.min, filters.max]}
                      onChange={handleFilterChange}
                      valueLabelDisplay="auto"
                      step={100}
                    />
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
                              fontFamily={theme.fonts.secondary}
                            >
                              {option.charAt(0).toUpperCase() +
                                option.substring(1)}
                            </Typography>
                            <IconButton
                              disabled={filters[option] === "All"}
                              onClick={() => reset(option)}
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
                                width: "10px",
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
                              onChange={handleFilterChange}
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
            ) : resultHeaders[search] ? (
              <Box
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                mb={"20px"}
              >
                <Box
                  position={"relative"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={"20px"}
                  height={"260px"}
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
                      filter: "blur(3px) brightness(50%)",
                    }}
                  />
                  <Typography
                    color={"white"}
                    fontSize={"clamp(1rem, 10vw, 3rem)"}
                  >
                    {search.charAt(0).toUpperCase() + search.substring(1)}
                  </Typography>
                  <Typography color={theme.palette.grey[100]}>
                    {resultHeaders[search].description}
                  </Typography>
                </Box>
                <Typography
                  ml={"10px"}
                  fontSize={"0.9rem"}
                  color={"text.secondary"}
                >
                  {Number(data.length).toLocaleString("US")} results
                </Typography>
              </Box>
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
                padding={"10px 20px"}
              >
                <Box display={"flex"} flexDirection={"column"}>
                  <Typography
                    fontWeight={"bold"}
                    fontSize={"clamp(0.7rem, 4vw, 1.3rem)"}
                  >
                    Search results for "{search}"
                  </Typography>
                  <Typography
                    fontSize={"0.9rem"}
                    color={"text.secondary"}
                  >
                    {Number(data.length).toLocaleString("US")} results
                  </Typography>
                </Box>
                {!isNotPhone && (
                  <Box
                    sx={{ position: "absolute", right: 0 }}
                    bgcolor={"white"}
                  >
                    <IconButton
                      onClick={() => setIsMobileFilters((prev) => !prev)}
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

export default ResultsComponent;
