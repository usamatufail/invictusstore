import {
  GET_CATEGORY,
  GET_CATEGORIES,
  DELETE_CATEGORY,
  CATEGORY_ERROR,
  // UPDATE_CATEGORY
} from "../types";

const initialState = {
  category: null,
  categories: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: payload,
        loading: false
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          category => category.id !== payload
        ),
        loading: false
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    default:
      return state;
  }
}
