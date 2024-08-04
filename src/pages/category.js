import React from "react";
import ResultsComponent from "../components/results";

const CategoryPage = ({location, setConfirmationModal }) => {
  return <ResultsComponent path={"category"} {...{location, setConfirmationModal }} />;
};

export default CategoryPage;
