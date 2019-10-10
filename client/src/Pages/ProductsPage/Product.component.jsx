/* eslint-disable */

import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

//redux related
import { connect } from "react-redux";
import { selectSingleProduct } from "../../redux/shop/shop.selectors";

import Fade from "react-reveal";

// core components
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";
import ProductImage from "../../Components/ProductImage/ProductImage.component";
import NavPills from "../../Components/NavPills/NavPills";
import styles from "./Product.styles";

//core components
import Button from "../../Components/CustomButtons/Button";
import AddToCart from "Components/AddToCartButton/AddToCart.component";

//Redux Functions
import { getProductById } from "../../redux/products/productActions";

const useStyles = makeStyles(styles);

function ProductPage({ getProductById, match, product }) {
  const productId = match.params.productId;
  useEffect(() => {
    getProductById(productId);
  }, [getProductById, productId]);

  const classes = useStyles();
  return (
    <div>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          {product ? (
            <div className={classes.section}>
              <GridContainer justify="center" spacing={5}>
                {/*Cards for displaying category related product*/}
                <GridItem md={6} xl={5}>
                  <Fade left>
                    <ProductImage file={product.file} />
                  </Fade>
                </GridItem>
                <GridItem md={6} xl={7}>
                  <Fade right>
                    <div className={classes.prodTitleBlock}>
                      <div className={classes.titleHolder}>
                        <h2
                          className={classes.title}
                          style={{ marginTop: "0px" }}
                        >
                          {product.title}
                        </h2>
                      </div>
                      <div className={classes.info}>
                        <span className={classes.availability}>
                          In Stock: Yes
                        </span>
                      </div>
                    </div>

                    <div className={classes.productionBlock}>
                      <div className={classes.priceBlock}>
                        <span className={classes.price}>
                          Price: Rs. {product.price}
                        </span>
                      </div>
                    </div>
                    <div className={classes.productionBlock}>
                      <div className={classes.buttonWrap}>
                        <AddToCart style={{ width: "100%" }} item={product} />
                      </div>
                      <div
                        className={classes.buttonWrap}
                        style={{ marginLeft: "30px" }}
                      >
                        <Button
                          color="primary"
                          variant="outlined"
                          className={classes.button}
                        >
                          Buy Now
                          <ShoppingCartIcon className={classes.rightIcon} />
                        </Button>
                      </div>
                    </div>
                    <div className={classes.productionBlock}>
                      <h2 className={classes.safeCheckoutTitle}>
                        GUARANTEED SAFE CHECKOUT
                      </h2>
                    </div>
                    <img
                      src="http://bellman.store/public/webFront/images/payment/safecheckout.png"
                      alt="checkout"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Fade>
                </GridItem>
              </GridContainer>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  product: state.product.product
});

export default connect(
  mapStateToProps,
  { getProductById }
)(ProductPage);
