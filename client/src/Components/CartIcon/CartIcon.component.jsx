/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Button from "../CustomButtons/Button";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

import styles from "./CartIcon.styles";
const useStyles = makeStyles(styles);

function CartIcon(props) {
  const classes = useStyles();
  return (
    <Button color="transparent" className={classes.navLink}>
      <Badge
        className={classes.badge}
        badgeContent={props.itemCount}
        color="primary"
      >
        <ShoppingCartIcon className={classes.socialIcons} />
      </Badge>
    </Button>
  );
}
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);
