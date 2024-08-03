import React from "react";
import ResultsComponent from "../components/results";

const ResultsPage = ({ location, setConfirmationModal }) => {
  return <ResultsComponent {...{location, setConfirmationModal }} />;
};

export default ResultsPage;
