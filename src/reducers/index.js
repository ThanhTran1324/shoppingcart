import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import filterReducer from "./filterReducer";
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  items: itemReducer,
  cart: cartReducer,
  filter: filterReducer,
});
