/* eslint-disable react/prop-types */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//React library for Reveal effects

// core components
import GridContainer from "../../Components/Grid/GridContainer.js";
import Parallax from "../../Components/Parallax/Parallax";

import styles from "./CheckoutPage.styles";

import CheckoutStepper from "./CheckoutStepper.component";
import Footer from "Components/Footer/Footer.js";

const useStyles = makeStyles(styles);

function CategoryProducts() {
  const classes = useStyles();
  return (
    <div>
      <Parallax
        filter
        image={require("../../Assets/img/landing-bg.png")}
        style={{ height: "15vh" }}
      />
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer justify="center">
              <CheckoutStepper />
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryProducts;
