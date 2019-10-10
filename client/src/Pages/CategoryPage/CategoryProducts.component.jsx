/* eslint-disable */
import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//redux related
import { connect } from "react-redux";

//React library for Reveal effects
import Fade from "react-reveal";

// core components
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";

//Custom Components
import ProductCard from "../../Components/ProductCard/ProductCard";

import { getProductsByCategories } from "../../redux/products/productActions.js";

import styles from "./Category.styles";

const useStyles = makeStyles(styles);

function CategoryProducts(props) {
  const { categoryProducts } = props;
  useEffect(() => {
    props.getProductsByCategories(props.match.params.catId);
  }, [getProductsByCategories]);
  const classes = useStyles();
  // debugger;
  return (
    <div>
      <div style={{ color: "black" }} className={classNames(classes.main)}>
        <div className={classes.container}>
          <h2 className={classes.title}>{categoryProducts.title}</h2>
          <div className={classes.section}>
            <GridContainer justify="center" spacing={3}>
              {categoryProducts
                ? categoryProducts.map((data, i) => (
                    <GridItem xs={12} sm={4} md={3} lg={3} key={i}>
                      <Fade bottom>
                        <ProductCard item={data} img={`../../itemImages/${data.file}`} />
                      </Fade>
                    </GridItem>
                  ))
                : null}
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  // debugger;
  return {
    categoryProducts: state.product.products
  };
};

export default connect(
  mapStateToProps,
  { getProductsByCategories }
)(CategoryProducts);
