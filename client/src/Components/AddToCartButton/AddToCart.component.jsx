/* eslint-disable react/prop-types */
import React from "react";
import Button from "../CustomButtons/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

function AddToCart({ item, addItem, match }) {
  const useStyles = makeStyles(theme => ({
    button:
      match.path === "/categories/:catId" || match.path === "/products"
        ? {
            margin: theme.spacing(1)
          }
        : {
            margin: theme.spacing(0),
            width: "100%",
            fontSize: "18px"
          },
    rightIcon: {
      marginLeft: theme.spacing(1)
    }
  }));
  const classes = useStyles();
  const addItemToast = () => {
    addItem(item);
    toast.success("🛒 Added to cart successfully");
  };
  return (
    <Button
      color="primary"
      variant="outlined"
      className={classes.button}
      onClick={() => addItemToast()}
    >
      Add To Cart
      <ShoppingCartIcon className={classes.rightIcon} />
    </Button>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddToCart)
);
