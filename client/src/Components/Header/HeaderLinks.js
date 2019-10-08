/*eslint-disable*/
import React, { Fragment } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";

// @material-ui/icons
import { VerifiedUser, Home, Category, Redeem } from "@material-ui/icons";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import Button from "../CustomButtons/Button";
import CartIcon from "../CartIcon/CartIcon.component";

import { connect } from "react-redux";
import { logout } from "../../redux/user/userActions";

import styles from "./headerLinksStyle.js";

const useStyles = makeStyles(styles);

const HeaderLinks = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const classes = useStyles();

  const authLinks = (
    <Fragment>
      {/* Home Link */}
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.customNavLink}>
          <Button color="transparent" className={classes.navLink}>
            <Home className={classes.icons} /> Home
          </Button>
        </Link>
      </ListItem>
      {/* Categories Link */}
      <ListItem className={classes.listItem}>
        <Link to="/categories" className={classes.customNavLink}>
          <Button color="transparent" className={classes.navLink}>
            <Category className={classes.icons} /> Categories
          </Button>
        </Link>
      </ListItem>
      {/* Products Link */}
      <ListItem className={classes.listItem}>
        <Link to="/products" className={classes.customNavLink}>
          <Button color="transparent" className={classes.navLink}>
            <Redeem className={classes.icons} /> Products
          </Button>
        </Link>
      </ListItem>

      {/*DropDown Username & Logout */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={user && user.name}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={VerifiedUser}
          dropdownList={[
            <div
              onClick={logout}
              color="transparent"
              className={classes.dropdownLink}
            >
              Log Out
            </div>
          ]}
        />
      </ListItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      {/* Home Link */}
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.customNavLink}>
          <Button color="transparent" className={classes.navLink}>
            <Home className={classes.icons} /> Home
          </Button>
        </Link>
      </ListItem>
      {/* Categories Link */}
      <ListItem className={classes.listItem}>
        <Link to="/categories" className={classes.customNavLink}>
          <Button color="transparent" className={classes.navLink}>
            <Category className={classes.icons} /> Categories
          </Button>
        </Link>
      </ListItem>
      {/* Products Link */}
      <ListItem className={classes.listItem}>
        <Link to="/products" className={classes.customNavLink}>
          <Button color="transparent" className={classes.navLink}>
            <Redeem className={classes.icons} /> Products
          </Button>
        </Link>
      </ListItem>
      {/*DropDown Login and SignUp */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Login / SignUp"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={VerifiedUser}
          dropdownList={[
            <Link to="/login" className={classes.dropdownLink}>
              Login
            </Link>,
            <Link to="/signup" className={classes.dropdownLink}>
              Sign Up
            </Link>
          ]}
        />
      </ListItem>
      {/*Cart Button */}
      <ListItem className={classes.listItem}>
        <Link to="/checkout" className={classes.customNavLink}>
          <CartIcon />
        </Link>
      </ListItem>
    </Fragment>
  );
  return (
    <List className={classes.list}>
      {<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
    </List>
  );
};

const mapStateToProps = state => ({
  auth: state.user
});

export default connect(
  mapStateToProps,
  { logout }
)(HeaderLinks);
