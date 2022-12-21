import { ADD_TO_CART, ERROR, GET_PRODUCTS, LOADING, LOGIN } from "./action";

export const appReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: action.payload,
        loading: false,
        error: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: false,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};