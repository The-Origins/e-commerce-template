import React from "react";
import ResultsComponent from "../components/results";

const ResultsPage = ({ setConfirmationModal }) => {
  return <ResultsComponent {...{ setConfirmationModal }} />;
};

export default ResultsPage;
