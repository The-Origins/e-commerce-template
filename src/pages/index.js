import React from "react";
import HomeComponent from "../components/homePage";
import Layout from "../components/layout";

const Home = ({ location }) => {
  return (
    <Layout>
      <HomeComponent location={location} />
    </Layout>
  );
};

export default Home;
