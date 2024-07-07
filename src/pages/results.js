import React from "react";
import ResultsComponent from "../components/resultsComponent";
import data from "../lib/data";

const ResultsPage = () => {
  return <ResultsComponent data={data.products} />;
};

export default ResultsPage;
