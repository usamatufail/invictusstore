import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Parallax from "../../Components/Parallax/Parallax";

const useStyles = makeStyles({
  root: {
    width: "50%",
    maxWidth: 500
    // display: 'flex',
    // justifyContent:"center",
    // alignItems: "center"
  }
  //   box: {
  // alignSelf: "center",
  // height: 400
  //   }
});

const NotFound = () => {
  const classes = useStyles();
  return (
    <div style={{ width: '100%' }}>
     <Parallax
        filter
        image={require("../../Assets/img/landing-bg.png")}
        style={{ height: "15vh" }}
      />
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        justifyContent="center"
         alignItems="center"
        p={1}
        m={1}
        // bgcolor="background.paper"
        css={{ Height: '100%' }}
      >
        <Box bgcolor="grey.300" alignSelf="center"  css={{ Width: '90%', Height: '90%' }}>
        <Typography variant="h1" component="h2" gutterBottom>
          <i className="fas fa-exclamation-triangle" /> Page Not Found
        </Typography>
        </Box>
        <Box bgcolor="grey.300">
        <Typography variant="subtitle1" gutterBottom>
          Sorry this page does not exist
        </Typography>
        </Box>
      </Box>
   </div>
  );
};

export default NotFound;
