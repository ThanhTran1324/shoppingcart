import { CART_ADD, CART_FETCH, CART_REMOVE } from "../actions/cartActions/type";
import _ from "lodash";
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD:
      return { ...state, [action.payload.id]: action.payload };
    case CART_FETCH:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CART_REMOVE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
