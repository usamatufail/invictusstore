import { CREATE_MESSAGE, GET_MESSAGES, MESSAGE_ERROR } from '../types';
import axios from 'axios';
import { setAlert } from '../alert/alertActions'


export const createMessage = (formData) => async dispatch => {
   try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
     const res = axios.post('/api/contact', formData, config);

     dispatch({
      type: CREATE_MESSAGE,
      payload: res.data
    });
    dispatch(setAlert("Thanks for contact us your Message Recived", "success"));
   } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
   }
}

export const getMessages = () => async dispatch => {
  try {
    const res = await axios.get("/api/contact");

    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};