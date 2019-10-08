import { CREATE_MESSAGE, GET_MESSAGES, MESSAGE_ERROR } from '../types';
// import axios from 'axios';
const initialState = {
  messages: [],
  message: null,
  error: {},
  loading: true
}

export default function(state = initialState, action){
  const { type, payload } = action;
  switch(type){
    case CREATE_MESSAGE:
      return {
        ...state,
        message: payload,
        loading: false
      };
      case GET_MESSAGES:
        return {
          ...state,
          messages: payload,
          loading: false
        };
        case MESSAGE_ERROR:
          return {
            ...state,
            error: payload,
            loading: false
          }
        default:
          return state;
  }
}