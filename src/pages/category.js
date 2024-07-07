import React from "react";
import data from "../lib/data";
import ResultsComponent from "../components/resultsComponent";

const CategoryPage = () => {
  return <ResultsComponent path={"category"} data={data.products} />;
};

export default CategoryPage;
