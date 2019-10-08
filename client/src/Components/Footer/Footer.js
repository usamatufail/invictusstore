/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "./footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://invictussolutions.co/"
                className={classes.block}
                target="_blank"
              >
                Invictus Solutions
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://invictussolutions.co/#about"
                className={classes.block}
                target="_blank"
              >
                About Invictus
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://invictussolutions.co/#service"
                className={classes.block}
                target="_blank"
              >
                Services by Invictus
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://invictussolutions.co/#portfolio"
                className={classes.block}
                target="_blank"
              >
                Portfolio of Invictus
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://invictussolutions.co/"
            className={aClasses}
            target="_blank"
          >
            Invictus Team
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
