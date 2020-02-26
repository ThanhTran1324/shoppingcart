import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  items: itemReducer,
  cart: cartReducer
});
