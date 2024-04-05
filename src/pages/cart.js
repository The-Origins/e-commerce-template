import React from "react";
import CartPageComponent from "../components/cartPage";
import Layout from "../components/layout";

const CartPage = ({ location }) => {
  return (
    <Layout>
      <CartPageComponent location={location} />
    </Layout>
  );
};

export default CartPage;
