/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Grid } from "@material-ui/core";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "../../Components/CustomButtons/Button";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { addItem } from "../../redux/cart/cart.actions";
import { removeItem } from "../../redux/cart/cart.actions";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";

import styles from "./Summary.styles";
const useStyles = makeStyles(styles);

function Summary(props) {
  const classes = useStyles();
  const { cartItems, total, clearItem, addItem, removeItem } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shopping Cart summary
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Typography variant="h6" gutterBottom>
            Preview
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
            Name
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom>
            Quantity
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" gutterBottom>
            Price
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" gutterBottom>
            Delete
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        space={5}
      >
        {cartItems.map((item, i) => (
          <React.Fragment key={i}>
            <Grid item xs={2} style={{ marginBottom: "15px" }}>
              <img src={item.file} width="100px" height="118px" alt="product" />
            </Grid>
            <Grid item xs={3} style={{ marginBottom: "15px" }}>
              <Typography variant="body1">{item.title}</Typography>
            </Grid>
            <Grid item xs={3} style={{ marginBottom: "15px" }}>
              <div>
                <Button
                  justIcon
                  round
                  color="primary"
                  aria-label="remove"
                  className={classes.fab}
                  onClick={() => removeItem(item)}
                >
                  <ArrowLeftIcon />
                </Button>
                {item.itemQuantity}
                <Button
                  justIcon
                  round
                  color="primary"
                  aria-label="add"
                  className={classes.fab}
                  onClick={() => addItem(item)}
                >
                  <ArrowRightIcon />
                </Button>
              </div>
            </Grid>
            <Grid item xs={2} style={{ marginBottom: "15px" }}>
              <Typography variant="body1">{`Rs. ${item.price}`}</Typography>
            </Grid>
            <Grid item xs={2} style={{ marginBottom: "15px" }}>
              <Button
                justIcon
                round
                color="primary"
                aria-label="delete"
                className={classes.fab}
                onClick={() => clearItem(item)}
              >
                <DeleteIcon />
              </Button>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {`Rs. ${total}`}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
