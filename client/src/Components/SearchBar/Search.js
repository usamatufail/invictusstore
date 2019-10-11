import React, { useEffect, useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ListItem from "@material-ui/core/ListItem";

import { connect } from "react-redux";
import { getProducts } from "../../redux/products/productActions";
import { getCategories } from "../../redux/categories/categoryActions";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 0,
      "&:focus": {
        width: 200
      }
    }
  }
}));
const Search = ({ getCategories, getProducts, categories, products }) => {
  const [searchProduct, setProduct] = useState({
    search_products:[]
  })
  const [searchCategory, setCategory] = useState({
    search_categoris:[]
  }) 
  const { search_products } = searchProduct;
  const { search_categoris } = searchCategory;
  const onChange = e => {
    const text = e.target.value;
    const search_products = products.filter(product => {
      return (
        product.title
          .toLowerCase()
          .substring(0, text.toLowerCase().length)
          .indexOf(product.title.toLowerCase()) !== -1
      );
      setProduct({ ...searchProduct, search_products});
    });

    const search_categoris = categories.filter(category => {
      return (
        category.name
          .toLowerCase()
          .substring(0, text.toLowerCase().length)
          .indexOf(category.name.toLowerCase()) !== -1
      );
      setCategory({ ...searchCategory, search_categoris})

    });
    const result = text ? search_products : products;
    console.log(search_products, search_categoris, text);
    console.log(result)
  };
  const classes = useStyles();
  useEffect(() => {
    getCategories();
    getProducts();
  }, [getCategories, getProducts]);
  return (
    <ListItem className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        onChange={e => onChange(e)}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </ListItem>
  );
};

const mapStateToProps = state => ({
  products: state.product.products,
  categories: state.categories.categories
});

export default connect(
  mapStateToProps,
  { getCategories, getProducts }
)(Search);
