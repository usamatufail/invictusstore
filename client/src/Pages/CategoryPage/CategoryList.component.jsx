/* eslint-disable react/prop-types */
import React, { useEffect, Fragment } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

//redux-related
import { connect } from "react-redux";
import { getCategories } from "../../redux/categories/categoryActions";
//React library for Reveal effects
import Fade from "react-reveal";

// core components
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";

//Custom Components
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import Spinner from '../../Components/Spinner/Spinner';


import styles from "./Category.styles";

const useStyles = makeStyles(styles);

const CategoryList = ({ getCategories, categories,  loading  }) => {
  const classes = useStyles();
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <Fragment>
      { loading ? <Spinner /> : <Fragment>

     
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <h2 className={classes.title}>Categories</h2>
          <div className={classes.section}>
            <GridContainer justify="center" spacing={3}>
              {/*Cards for displaying categories*/}
              {categories.map(category => {
                return (
                  <GridItem xs={12} sm={4} md={3} lg={3} key={category._id}>
                    <Fade left>
                      <CategoryCard
                        id={category._id}
                        name={category.name}
                        imageUrl={`http://localhost:8080/collectionImages/${category.file}`}
                        description={`we have best ${category.name} collections ready for your latest styles`}
                      />
                    </Fade>
                  </GridItem>
                );
              })}
            </GridContainer>
          </div>
        </div>
      </div>
      </Fragment>}
    </Fragment>
  );
};

// const mapStateToProps = createStructuredSelector({
//   categories: selectCategories,
// });

const mapStateToProps = state => ({
  categories: state.categories.categories,
  laoding: state.categories.loading,
});

export default connect(
  mapStateToProps,
  { getCategories }
)(CategoryList);
