import React, { useEffect, useState } from "react";
import { Box} from "@mui/material";
import "../../styles/index.css";
import Header from "./header";
import Footer from "./footer";
import { useDispatch, useSelector } from "react-redux";
import SnackBarComponent from "./snackBar";
import { fetchUser } from "../../state/user";
import { fetchSession } from "../../state/session";
import ContactModal from "./modals/contact";
import ConfirmationModal from "./modals/confirmation";

const Layout = ({ location, children }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [confirmationModal, setConfirmationModal] = useState({ on: false });
  const [isContact, setIsContact] = useState();

  const mappedChildren = React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // Clone the child element and add props, setIsContact and setConfirmationModal functions
      return React.cloneElement(child, {
        setIsContact,
        setConfirmationModal,
      });
    }
    // Return the child if it's not a React element (e.g., text nodes)
    return child;
  });

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchSession());
  }, []);

  return (
    <>
      <SnackBarComponent />
      <ContactModal {...{ isContact, setIsContact }} />
      <ConfirmationModal {...{ confirmationModal, setConfirmationModal }} />
      <Header {...{ location, user, setHeaderHeight, setConfirmationModal }} />
      <Box mt={`${headerHeight + 30}px`} mb={"50px"}>
        {mappedChildren}
      </Box>
      <Footer {...{ setIsContact }} />
    </>
  );
};

export default Layout;
