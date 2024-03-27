import React from "react";
import { Provider } from "react-redux";
import store from "../../state";
import OrderPageComponent from "../../components/orderPage";
import Layout from "../../components/layout";


const ordersPage = ({location}) => {
  return (
    <Provider store={store}>
      <Layout>
      <OrderPageComponent location={location} />
      </Layout>
    </Provider>
  );
};

export default ordersPage;