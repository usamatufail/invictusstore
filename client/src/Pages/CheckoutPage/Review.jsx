/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import {
  selectAddress,
  selectPaymentMethod
} from "../../redux/orderInfo/orderInfo.selectors";

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

function Review(props) {
  const classes = useStyles();
  const { cartItems, cartTotal, paymentMethod, address } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map(item => (
          <ListItem className={classes.listItem} key={item.id}>
            <ListItemText primary={item.title} secondary={item.desc} />
            <Typography variant="body2">
              Rs. {item.price} x {item.quantity}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            Rs. {cartTotal}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography
            gutterBottom
          >{`${address.firstName} ${address.lastName}`}</Typography>
          <Typography gutterBottom>{address.address1}</Typography>
          {address.address2 ? (
            <Typography gutterBottom>{address.address2}</Typography>
          ) : null}
          <Typography
            gutterBottom
          >{`${address.city}, ${address.state}, ${address.country}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment Method
          </Typography>
          <Grid container>
            <Grid item xs={12}>
              <Typography gutterBottom>
                {paymentMethod.toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  address: selectAddress,
  paymentMethod: selectPaymentMethod,
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Review);
