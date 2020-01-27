import {
  ITEM_CREATE,
  ITEM_EDIT,
  ITEMS_FETCH,
  ITEM_FETCH,
  ITEM_DELETE
} from "../actions/types";
import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case ITEM_CREATE:
      return { ...state, [action.payload.id]: action.payload };
    case ITEM_EDIT:
      return { ...state, [action.payload.id]: action.payload };
    case ITEM_FETCH:
      return { ...state, [action.payload.id]: action.payload };
    case ITEMS_FETCH:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case ITEM_DELETE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
