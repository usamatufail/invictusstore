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

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

function CategoryCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => props.history.push(`${props.match.url}/${props.id}`)}
      >
        <CardMedia
          component="img"
          alt="categories in invictus e-com store"
          height="200"
          image={props.imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {props.name}
          </Typography> 
          <Divider variant="middle" />
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withRouter(CategoryCard);
