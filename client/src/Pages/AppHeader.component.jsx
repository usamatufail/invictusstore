/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router-dom";
// core components
import Header from "../Components/Header/Header";
import HeaderLinks from "../Components/Header/HeaderLinks";

//dashboard routes
const dashboardRoutes = [];

function AppHeader(props) {
  const { ...rest } = props;
  if (props.location.pathname.includes("admin")) {
    return null;
  } else {
    return (
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Invictus E-Commerce"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={
          // eslint-disable-next-line react/prop-types
          props.location.pathname === "/"
            ? {
                height: 400,
                color: "white"
              }
            : {
                height: 50,
                color: "white"
              }
        }
        {...rest}
      />
    );
  }
}

export default withRouter(AppHeader);
