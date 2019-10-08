/*eslint-disable*/
import React from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "../../../Assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="#home" className={classes.block}>
                Home
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="#company" className={classes.block}>
                Company
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="#portfolio" className={classes.block}>
                Portfolio
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="#blog" className={classes.block}>
                Blog
              </Link>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="/"
              target="_blank"
              className={classes.a}
            >
              Invictus eCom
            </a>
          
          </span>
        </p>
      </div>
    </footer>
  );
}
