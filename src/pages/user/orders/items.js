import React from "react";
import OrderItemPageComponent from "../../../components/orderItemPage";
import Layout from "../../../components/layout";

const orderItemPage = ({ location }) => {
  return (
    <Layout>
      <OrderItemPageComponent location={location} />
    </Layout>
  );
};

export default orderItemPage;
