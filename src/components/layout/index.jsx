import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Contact from "./contact";
import "../../index.css";
import Modal from "./modal";
import ProductDetails from "../product/productDetails";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  const [product, setProduct] = useState({});
  const [productDetailsTitle, setProductDetailsTitle] = useState();
  const [productDetails, setProductDetails] = useState({
    icing: "whipped cream",
    color: "white",
    weight: 3,
  });
  const [isProductDetails, setIsProductDetails] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const changeProduct = (product) => {
    setProduct(product);
  };

  const changeIsProductDetails = (state) => {
    setIsProductDetails(state);
  };

  const changeProductDetailsTitle = (title) => {
    setProductDetailsTitle(title);
  };

  const changeProductDetails = (details) => {
    setProductDetails(details);
  };

  const changeIsContact = (state) => {
    setIsContact(state);
  };

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      changeProduct,
      changeIsProductDetails,
      changeProductDetailsTitle,
      changeProductDetails,
      changeIsContact,
    })
  );

  return (
    <ThemeProvider theme={theme}>
      <Modal />
      <ProductDetails
        title={productDetailsTitle}
        product={product}
        productDetails={productDetails}
        setProductDetails={setProductDetails}
        changeIsProductDetails={changeIsProductDetails}
        isProductDetails={isProductDetails}
      />
      <Contact isContact={isContact} changeIsContact={changeIsContact} />
      <Header />
      {childrenWithProps}
      <Footer changeIsContact={changeIsContact} />
    </ThemeProvider>
  );
};

export default Layout;
