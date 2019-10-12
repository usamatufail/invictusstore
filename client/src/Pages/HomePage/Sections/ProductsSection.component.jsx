import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../../Components/Grid/GridContainer.js";
import GridItem from "../../../Components/Grid/GridItem.js";

import styles from "./CategoriesSection.styles";
import ProductCard from "Components/ProductCard/ProductCard.js";

const useStyles = makeStyles(styles);

export default function ProductsSection(props) {
  const classes = useStyles();
  console.log(props.products);
  return (
    <div className={classes.section}>
      <GridContainer justify="center" spacing={3}>
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Latest Products</h2>
        </GridItem>
        {props.products
          .filter((item, index) => index > props.products.length - 5)
          .map(product => (
            <GridItem xs={12} sm={6} md={3} lg={3} xl={2} key={product._id}>
              <ProductCard item={product} />
            </GridItem>
          ))}
      </GridContainer>
    </div>
  );
}
