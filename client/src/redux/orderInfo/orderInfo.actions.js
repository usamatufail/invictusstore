import {
  UPDATE_ADDRESS,
  UPDATE_PAYMENT_METHOD,
  CREATE_ORDER,
  GET_ORDER,
  GET_ORDERS,
  ORDER_ERROR,
  DELETE_ORDER
} from "./orderInfo.types";
import { setAlert } from "../alert/alertActions";
import axios from "axios";

export const updateAddress = address => async dispatch => {
  try {
    dispatch({
      type: UPDATE_ADDRESS,
      payload: address
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const updatePaymentMethod = paymentMethod => async dispatch => {
  try {
    dispatch({
      type: UPDATE_PAYMENT_METHOD,
      payload: paymentMethod
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//create order
export const createOrder = address => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/orders/new", address, config);

    dispatch({
      type: CREATE_ORDER,
      payload: res.data
    });
    dispatch(setAlert("Order Created Successfully", "success"));
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//get all orders
export const getOrders = () => async dispatch => {
  try {
    const res = await axios.get("/api/orders/all");

    dispatch({
      type: GET_ORDERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Update Order
export const updateOrder = (
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
    const res = await axios.post(`/api/orders/edit/${id}`, formData, config);

    dispatch({
      type: GET_ORDER,
      payload: res.data
    });
    // dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    dispatch(setAlert("Order Updated", "success"));
    dispatch(getOrders());

    // if (!edit) {
    //   history.push("/dashboard");
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete product
export const deleteOrder = Id => async dispatch => {
  try {
    await axios.delete(`/api/orders/${Id}`);

    dispatch({ type: DELETE_ORDER });

    dispatch(setAlert("Order Deleted Successfully"));
    dispatch(getOrders());
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
