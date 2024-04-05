import React from "react";
import Layout from "../../../components/layout";
import FavouritesPageComponent from "../../../components/favouritesPage";

const favouritesPage = ({ location }) => {
  return (
    <Layout>
      <FavouritesPageComponent location={location} />
    </Layout>
  );
};

export default favouritesPage;
