import {
  GET_PRODUCT,
  PRODUCT_ERROR,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCTS,

} from "../types";

const initialState = {
  product: null,
  products: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
    case UPDATE_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false
      };
      case GET_PRODUCTS:
        return {
          ...state,
          products: payload,
          loading: false
        }
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(item => item.id !== payload),
        loading: false
      };
      
    default:
      return state;
  }
}
