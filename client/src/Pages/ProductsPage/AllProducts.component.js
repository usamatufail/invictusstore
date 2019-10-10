/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//redux related
import { connect } from "react-redux";
// import { selectCategoryProducts } from "../../redux/shop/shop.selectors";
import { getProducts } from "../../redux/products/productActions";


//React library for Reveal effects
import Fade from "react-reveal";

// core components
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";
// import Parallax from "../../Components/Parallax/Parallax";

//Custom Components
import ProductCard from "../../Components/ProductCard/ProductCard";

import styles from "./AllProduct.styles";

const useStyles = makeStyles(styles);

const Products = ({ getProducts, products: { products } }) => {
  const classes = useStyles();
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <div>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <h2 className={classes.title}>{products.productTitle}</h2>
          <div className={classes.section}>
            <GridContainer justify="center" spacing={3}>
              {/*Cards for displaying category related product*/}
              {products.map((product, i) => (
                <GridItem xs={12} sm={4} md={3} lg={3} key={i}>
                  <Fade bottom>
                    <ProductCard item={product} img={`itemImages/${product.file}`} />
                  </Fade>
                </GridItem>
              ))}
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.product
});

export default connect(
  mapStateToProps,
  { getProducts }
)(Products);
