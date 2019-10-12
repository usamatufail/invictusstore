import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../../Components/Grid/GridContainer.js";
import GridItem from "../../../Components/Grid/GridItem.js";

import styles from "./BannerSection.styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function BannerSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridContainer justify="center" spacing={0}>
        <GridItem xs={12} sm={12} md={6} lg={6} xl={6} className={classes.item}>
          <div className={classes.textBox}>
            <h2 className={classes.title}>CIBER SALE</h2>
            <p className={classes.simpleText}>ON SUMMER COLLECTIONS</p>
            <h3 className={classes.simpleText}>50% OR MORE</h3>
            <Button
              transparent
              fullwidth={true}
              size="large"
              style={{
                color: "#fff",
                marginTop: "1.95em",
                letterSpacing: "2.5px"
              }}
            >
              Shop Now
            </Button>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6} xl={6} className={classes.item}>
          <img
            src={require("../../../Assets/img/banner.jpg")}
            alt="products"
            className={classes.image}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
