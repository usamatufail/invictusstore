/* eslint-disable react/prop-types */
import React from "react";
import { Route, Switch } from "react-router-dom";

import CategoryList from "./CategoryList.component";
import CategoryProducts from "./CategoryProducts.component";
import ProductPage from "./Product.component";

// core components
import Parallax from "../../Components/Parallax/Parallax";
import Footer from "Components/Footer/Footer";

export default function CategoryPage(props) {
  return (
    <div>
      <Parallax
        filter
        image={require("../../Assets/img/landing-bg.png")}
        style={{ height: "15vh" }}
      />
      <Switch>
        <Route exact path={`${props.match.path}`} component={CategoryList} />
        <Route exact path={`/categories/:catId`} component={CategoryProducts} />
        <Route
          path={`${props.match.path}/:catId/:productId`}
          component={ProductPage}
        />
      </Switch>
      <Footer />
    </div>
  );
}
