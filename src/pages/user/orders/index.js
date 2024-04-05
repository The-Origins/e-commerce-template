import React from "react";
import OrderPageComponent from "../../../components/orderPage";
import Layout from "../../../components/layout";

const ordersPage = ({ location }) => {
  return (
    <Layout>
      <OrderPageComponent location={location} />
    </Layout>
  );
};

export default ordersPage;
