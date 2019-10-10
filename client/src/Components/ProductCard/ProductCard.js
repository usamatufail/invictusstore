/* eslint-disable react/prop-types */
//Libraries from react and material UI
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import AddToCart from "../AddToCartButton/AddToCart.component";
import { connect } from 'react-redux'

// import img from '../../Assets/img/cynthia-del-rio.jpg'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(2)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  },
  card: {
    maxWidth: 345
  }
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const { item } = props;
  const routeName = item._id;
  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => props.history.push(`${props.match.url}/${routeName}`)}
      >
        <CardMedia
          component="img"
          alt="products in invictus e-com store"
          height="200"
          image={`${props.img}`}
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="h6">Rs. {item.price}</Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <AddToCart item={item} />
    </Card>
  );
}



export default connect()(withRouter(ProductCard));
