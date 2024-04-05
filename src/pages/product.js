import React from "react";
import ProductPageComponent from "../components/productPage";
import Layout from "../components/layout";

const productPage = ({ location }) => {
  return (
    <Layout>
      <ProductPageComponent location={location} />
    </Layout>
  );
};

export default productPage;
