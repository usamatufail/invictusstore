import React, { useState } from "react";
import clsx from "clsx";
import {
  // Link,
  Redirect
} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";

// core components
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";
import Grid from "@material-ui/core/Grid";
import Button from "../../Components/CustomButtons/Button.js";
import Card from "../../Components/Card/Card.js";
import CardBody from "../../Components/Card/CardBody.js";
import CardHeader from "../../Components/Card/CardHeader.js";
import CardFooter from "../../Components/Card/CardFooter.js";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

//redux
// import moduleName from 'react-redux';
import { login } from "../../redux/user/userActions";
import { connect } from "react-redux";

import styles from "./LoginPage.styles";

import image from "../../Assets/img/bg7.jpg";
import Footer from "Components/Footer/Footer.js";

const useStyles = makeStyles(styles);

const LoginPage = ({ login, auth: { isAuthenticated, user } }) => {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false
  });

  const { email, password, showPassword } = formData;
  const handleChange = prop => event => {
    setFormData({ ...formData, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();

  //Redirect
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={e => onSubmit(e)}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                  </CardHeader>
                  <CardBody>
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        label="Email"
                        className={clsx(classes.margin, classes.textField)}
                        value={email}
                        type="email"
                        required
                        onChange={handleChange("email")}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <AccountCircle />
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        id="outlined-adornment-password"
                        className={clsx(classes.margin, classes.textField)}
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        value={formData.password}
                        onChange={handleChange("password")}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                edge="end"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {formData.showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple type="submit" color="primary" size="lg">
                      Login
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whitefont />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.user
});

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
