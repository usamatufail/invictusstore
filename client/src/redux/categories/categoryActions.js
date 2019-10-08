import {
  GET_CATEGORY,
  GET_CATEGORIES,
  // DELETE_CATEGORY,
  CATEGORY_ERROR,
  // UPDATE_CATEGORY
} from "../types";
import axios from "axios";
import { setAlert } from "../alert/alertActions";

//get a category
export const getCategory = () => async dispatch => {
  try {
    const res = await axios.get("/api/category");

    dispatch({
      type: GET_CATEGORY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or Edit Category

export const createCategory = (
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
    const res = await axios.post("/api/categories/add", formData, config);

    dispatch({
      type: GET_CATEGORY,
      payload: res.data
    });
    // dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    dispatch(setAlert("Category Created", "success"));
    dispatch(getCategories());

    // if (!edit) {
    //   history.push("/dashboard");
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Update Product
export const updateCategory = (
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
    const res = await axios.post(
      `/api/categories/edit/${id}`,
      formData,
      config
    );

    dispatch({
      type: GET_CATEGORY,
      payload: res.data
    });
    // dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    dispatch(setAlert("Category Updated", "success"));
    dispatch(getCategories());

    // if (!edit) {
    //   history.push("/dashboard");
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//get all categories
export const getCategories = () => async dispatch => {
  try {
    const res = await axios.get("/api/categories/all");

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const deleteCategory = Id => async dispatch => {
  try {
    await axios.delete(`/api/categories/${Id}`);

    dispatch({ type: GET_CATEGORY });
    dispatch(getCategories());
    dispatch(setAlert("Category Deleted Successfully", "danger"));
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
