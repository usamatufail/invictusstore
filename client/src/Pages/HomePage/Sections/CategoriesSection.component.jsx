import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../../Components/Grid/GridContainer.js";
import GridItem from "../../../Components/Grid/GridItem.js";
import CategoryCard from "../../../Components/CategoryCard/CategoryCard";

import styles from "./CategoriesSection.styles";

const useStyles = makeStyles(styles);

export default function CategoriesSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center" spacing={3}>
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>
            Categories ready to dispatch for you
          </h2>
        </GridItem>
        {props.categories
          .filter((item, index) => index < 4)
          .map(category => (
            <GridItem xs={12} sm={6} md={3} lg={3} xl={2} key={category._id}>
              <CategoryCard
                id={category._id}
                name={category.name}
                imageUrl={category.file}
                description={`We have best ${category.name} collections ready for your latest styles`}
              />
            </GridItem>
          ))}
      </GridContainer>
    </div>
  );
}
