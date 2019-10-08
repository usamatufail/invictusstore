import axios from "axios";
import {
  GET_PRODUCT,
  PRODUCT_ERROR,
  // UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS
} from "../types";
import { setAlert } from "../alert/alertActions";

//get current product
export const getCurrentProduct = () => async dispatch => {
  try {
    const res = await axios.get("/api/product/current");

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//get all products
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get("/api/product/all");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//get product by Id
export const getProductById = prodId => async dispatch => {
  try {
    const res = await axios.get(`/api/product/current/${prodId}`);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//get Products by Categories
export const getProductsByCategories = catId => async dispatch => {
  try {
    const res = await axios.get(`/api/product/${catId}`);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or Update product

export const createProduct = (
  formData
  // history,
  // edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/product/add", formData, config);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
    // dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    dispatch(setAlert("Product Created", "success"));
    dispatch(getProducts());

    // if (!edit) {
    //   history.push("/dashboard");
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Update Product
export const updateProduct = (
  formData,
  id
  // history,
  // edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post(`/api/product/edit/${id}`, formData, config);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
    // dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    dispatch(setAlert("Product Updated", "success"));
    dispatch(getProducts());

    // if (!edit) {
    //   history.push("/dashboard");
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete product
export const deleteProduct = Id => async dispatch => {
  try {
    await axios.delete(`/api/product/${Id}`);

    dispatch({ type: DELETE_PRODUCT });

    dispatch(setAlert("Product Deleted Successfully"));
    dispatch(getProducts());
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
