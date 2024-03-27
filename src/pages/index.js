import React from "react";
import { Provider } from "react-redux";
import store from "../state";
import HomeComponent from "../components/homePage";
import Layout from "../components/layout";

const Home = ({location}) => {
  return (
    <Provider store={store}>
      <Layout>
      <HomeComponent location={location}/>
      </Layout>
    </Provider>
  );
};

export default Home;
