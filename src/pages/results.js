import React from "react";
import ResultsPageComponent from "../components/resultsPage";
import Layout from "../components/layout";

const resultsPage = ({ location }) => {
  return (
    <Layout>
      <ResultsPageComponent location={location} />
    </Layout>
  );
};

export default resultsPage;
