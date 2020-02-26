import {
  ITEM_CREATE,
  ITEM_EDIT,
  ITEMS_FETCH,
  ITEM_FETCH,
  ITEM_DELETE,
  ITEM_SORTED,
  ITEM_FILTERED
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
      // console.log("got items");
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case ITEM_DELETE:
      return _.omit(state, action.payload);
    case ITEM_SORTED:
      // console.table(action.payload);
      return _.mapKeys(action.payload, "id");
    case ITEM_FILTERED:
      return action.payload; // need fix
    default:
      return state;
  }
};
