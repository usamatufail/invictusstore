import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//React library for Reveal effects
import Fade from "react-reveal";

// redux
import { connect } from "react-redux";

// core components
import GridContainer from "../../Components/Grid/GridContainer";
import GridItem from "../../Components/Grid/GridItem";
import Button from "../../Components/CustomButtons/Button";
import Parallax from "../../Components/Parallax/Parallax";

import styles from "./HomePage.styles";

// Sections for this page
import CategoriesSection from "./Sections/CategoriesSection.component";
import ProductsSection from "./Sections/ProductsSection.component";
import ContactSection from "./Sections/ContactSection.component";
import Footer from "Components/Footer/Footer";
import BannerSection from "./Sections/BannerSection.component";

import { getCategories } from "../../redux/categories/categoryActions";
import { getProducts } from "../../redux/products/productActions";

const useStyles = makeStyles(styles);

const HomePage = ({
  auth: { isAuthenticated, user },
  getCategories,
  getProducts,
  products,
  categories
}) => {
  console.log(categories);
  console.log(products);

  useEffect(() => {
    getCategories();
    getProducts();
  }, [getCategories, getProducts]);
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image={require("../../Assets/img/landing-bg.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Shop with Us</h1>
              <Fade left>
                <h4>
                  Invictus solutions is one of top rated IT solution company in
                  Pakistan. We are always pleased to server your IT Solution
                  needs. This is a demo E-commerce store which includes a lot of
                  functionalities and built on latest technologies.
                </h4>
              </Fade>
              <br />
              {isAuthenticated ? (
                <Link to="/products" className={classes.customLink}>
                  <Button color="danger" size="lg" rel="noopener noreferrer">
                    <i className="fas fa-cart-arrow-down" />
                    Sop With Us
                  </Button>
                </Link>
              ) : (
                <Link to="/login" className={classes.customLink}>
                  <Button color="danger" size="lg" rel="noopener noreferrer">
                    <i className="fas fa-user" />
                    Login
                  </Button>
                </Link>
              )}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CategoriesSection categories={categories} />
          <BannerSection />
          <ProductsSection products={products} />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.user,
  categories: state.categories.categories,
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { getCategories, getProducts }
)(HomePage);
