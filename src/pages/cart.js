import React from "react";
import { Provider } from "react-redux";
import store from "../state";
import CartPageComponent from "../components/cartPage";
import Layout from "../components/layout";


const CartPage = ({location}) => {
  return (
    <Provider store={store}>
      <Layout>
      <CartPageComponent location={location} />
      </Layout>
    </Provider>
  );
};

export default CartPage;