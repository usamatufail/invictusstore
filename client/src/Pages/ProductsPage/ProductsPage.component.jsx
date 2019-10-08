/* eslint-disable react/prop-types */
import React from "react";
import { Route, Switch } from "react-router-dom";

import AllProducts from "./AllProducts.component";
import ProductPage from "./Product.component";

// core components
import Parallax from "../../Components/Parallax/Parallax";
import Footer from "Components/Footer/Footer";

export default function ProductsPage(props) {
  return (
    <div>
      <Parallax
        filter
        image={require("../../Assets/img/landing-bg.png")}
        style={{ height: "15vh" }}
      />
      <Switch>
        <Route exact path={`${props.match.path}`} component={AllProducts} />
        <Route
          path={`${props.match.path}/:productId`}
          component={ProductPage}
        />
      </Switch>
      <Footer />
    </div>
  );
}
