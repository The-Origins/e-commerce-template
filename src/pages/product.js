import React from "react";
import { Provider } from "react-redux";
import store from "../state";
import ProductPageComponent from "../components/productPage";
import Layout from "../components/layout";


const productPage = ({location}) => {
  return (
    <Provider store={store}>
      <Layout>
      <ProductPageComponent location={location} />
      </Layout>
    </Provider>
  );
};

export default productPage;
