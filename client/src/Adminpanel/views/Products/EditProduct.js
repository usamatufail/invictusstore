import React, { useEffect, useState } from 'react';
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import IconButton from "@material-ui/core/IconButton";
// core components
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
//redux
import { connect } from "react-redux";
import { setAlert } from "../../../redux/Actions/alert";
import { editProduct,addProduct, getCurrentProduct } from "../../../redux/Actions/products";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
const EditProduct = ({match, editProduct, addProduct, getCurrentProduct, product: { product, loading}}) => {
  const classes = useStyles();
   const [formData, setFormData] = useState({
    productTitle: "",
    description: "",
    productPrice: "",
    vendor: "",
    quantity: "",
    discountPercentage: "",
    files: "",
    parentCollections: "",
    tags: ""
  });
useEffect(() => {
    getCurrentProduct("5d91cebff45c3125c4b2e102");
    setFormData({
      productTitle: loading || !product.productTitle ? "" : product.productTitle,
      description: loading || !product.description ? "" : product.description,
      productPrice: loading || !product.productPrice ? "" : product.productPrice,
      vendor: loading || !product.vendor ? "" : product.vendor,
      quantity:
        loading || !product.quantity ? "" : product.quantity,
      discountPercentage: loading || !product.discountPercentage ? "" : product.discountPercentage,
      files: loading || !product.files ? "" : product.files,
      parentCollections: loading || !product.parentCollections ? "" : product.parentCollections,
      tags: loading || !product.tags ? "" : product.tags,
     
    });
  }, [loading, getCurrentProduct, match.params.id]);

    const {
    productTitle,
    description,
    productPrice,
    vendor,
    quantity,
    discountPercentage,
    files,
    parentCollections,
    tags
  } = formData;

  const handleChange = prop => event => {
    setFormData({ ...formData, [prop]: event.target.value });
    console.log(formData);
  };

  const onChangeFile = e => {
    setFormData({ ...formData, files: e.target.files[0] });
    console.log(formData);
  };
const onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("productTitle", productTitle);
    data.append("description", description);
    data.append("productPrice", productPrice);
    data.append("vendor", vendor);
    data.append("quantity", quantity);
    data.append("discountPercentage", discountPercentage);
    data.append("files", files);
    data.append("parentCollections", parentCollections);
    data.append("tags", tags);
     
    addProduct(formData, true)
    console.log("yesss clickedd");
  };
  return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Product
        </Typography>
        <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <TextField
        id="outlined-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Title"
        value = { productTitle }
        type = "text"
        name = "productTitle"
        onChange =  {handleChange('productTitle')}
        InputProps={{
          startAdornment: <InputAdornment position="start">Title</InputAdornment>,
        }}
      />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange('productPrice')}
                value = {productPrice}
                id="price"
                label=" Price"
                name=" productPrice"
                autoComplete=" productPrice"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange('vendor')}
                value = {vendor}
                id="vendor"
                label="Vendor"
                name=" vendor"
                autoComplete=" vendor"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange('quantity')}
                value = {quantity}
                name="quantity"
                label="Quantity"
                type="number"
                id="password"
                autoComplete="quantity"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={handleChange('parentCollections')}
                value = {parentCollections}
                name="parentCollections"
                label="Parent Collection"
                type="text"
                id="parentCollections"
                autoComplete="parentCollections"
              />
            </Grid>
            <input
              // accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              onChange = { e => onChangeFile(e)}
              name="files"
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                Upload
              </Button>
            </label>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Edit Product
          </Button>
        </form>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  product: state.product
});
export default connect(mapStateToProps, { getCurrentProduct,addProduct, editProduct })(EditProduct);
