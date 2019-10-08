import {
  UPDATE_ADDRESS,
  UPDATE_PAYMENT_METHOD,
  CREATE_ORDER,
  GET_ORDER,
  GET_ORDERS,
  ORDER_ERROR,
  UPDATE_ORDER,
  DELETE_ORDER
} from "./orderInfo.types";

const initialState = {
  address: {},
  paymentMethod: "",
  order: null,
  orders: [],
  loading: true,
  error: {}
};

const orderInfoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_ADDRESS:
      return {
        ...state,
        address: payload
      };
    case UPDATE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload
      };
    case CREATE_ORDER:
    case GET_ORDER:
      return {
        ...state,
        loading: false,
        order: payload
      };
    case GET_ORDERS:
      return {
        ...state,
        loading: false,
        orders: payload
      };
    case UPDATE_ORDER:
      return {
        ...state,
        product: payload,
        loading: false
      };
    case DELETE_ORDER:
      return {
        ...state,
        products: state.orders.filter(item => item.id !== payload),
        loading: false
      };
    case ORDER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default orderInfoReducer;
