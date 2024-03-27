import React from "react";
import { Provider } from "react-redux";
import store from "../state";
import ResultsPageComponent from "../components/resultsPage";
import Layout from "../components/layout";


const resultsPage = ({location}) => {
  return (
    <Provider store={store}>
      <Layout>
      <ResultsPageComponent location={location} />
      </Layout>
    </Provider>
  );
};

export default resultsPage;