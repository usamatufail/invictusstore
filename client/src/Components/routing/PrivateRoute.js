import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
 
  component: Component,
  auth: { isAuthenticated, user},
  ...rest
}) => {
 console.log(user);
  // debugger;
  return (
    <Route
      {...rest}
      render={props =>
      !user || user.role !== "admin" ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.user
});

export default connect(
  mapStateToProps,
 null
)(PrivateRoute);
