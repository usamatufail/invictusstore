import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

//react reveal library for reveal effects
import Fade from "react-reveal";

// core components
import GridContainer from "../../../Components/Grid/GridContainer.js";
import GridItem from "../../../Components/Grid/GridItem.js";
// import CustomInput from "../../../Components/CustomInput/CustomInput.js";
import TextField from "@material-ui/core/TextField";
import Button from "../../../Components/CustomButtons/Button.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Email from "@material-ui/icons/Email";

import { connect } from "react-redux";
import { createMessage } from "../../../redux/contact/contactAction";

import styles from "./ContactSection.styles";

const useStyles = makeStyles(styles);

const WorkSection = ({ createMessage }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { name, email, message } = formData;
  const handleChange = prop => event => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createMessage(formData);
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact Us Now</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <Fade bottom>
            <form onSubmit={e => handleSubmit(e)}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="Your Name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange("name")}
                    formcontrolprops={{
                      fullWidth: true
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AccountCircle />
                        </InputAdornment>
                      )
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="Your Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange("email")}
                    formcontrolprops={{
                      fullWidth: true
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField
                    label="Your Message"
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange("message")}
                    formcontrolprops={{
                      fullWidth: true,
                      className: classes.textArea
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 10
                    }}
                  />
                </GridItem>
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary" type="submit">
                      Send Message
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </Fade>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default connect(
  null,
  { createMessage }
)(WorkSection);
