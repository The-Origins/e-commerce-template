import React, { useEffect, useState } from "react";
import ResultsComponent from "../components/results";
import data from "../../lib/data/products.json";

const CategoryPage = ({ location }) => {
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search");
  const [results, setResults] = useState([]);

  //search is handled by api
  useEffect(() => {
    switch (search) {
      case "clothing":
        setResults(data.slice(0, 9));
        break;
      case "electronics":
        setResults(data.slice(10, 20));
        break;
      case "food":
        setResults(data.slice(21));
        break;
      case "beverages":
        setResults(data.slice(21));
        break;
      default:
        setResults(data);
    }
  }, [search]);

  return (
    Boolean(results.length) && (
      <ResultsComponent path={"category"} data={results} />
    )
  );
};

export default CategoryPage;
