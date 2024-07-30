import React from "react";
import ResultsComponent from "../components/results";

const CategoryPage = ({ setConfirmationModal }) => {
  return <ResultsComponent path={"category"} {...{ setConfirmationModal }} />;
};

export default CategoryPage;
