import { CART_ADD, CART_FETCH, CART_REMOVE, CART_CLEAN } from "./type";

import { firebaseConnect } from "../../apis/firebaseShoppingCart";
//import history from "../../history";
import { NotificationManager } from "react-notifications";

export const cartAdd = (item) => async (dispatch, getState) => {
  const userId = getState().auth.userId;

  //for Logined User
  if (userId) {
    await firebaseConnect
      .database()
      .ref(`/cart/Cart-${userId}/${item.id}`)
      .set(item);

    dispatch({
      type: CART_ADD,
      payload: item,
    });
    NotificationManager.success(
      "You have added a new Item!",
      "Successful!",
      2000
    );
  } else {
    NotificationManager.error("Please Login !", "Warning", 2000);
  }
};

export const cartFetch = () => async (dispatch, getState) => {
  const userId = await getState().auth.userId;
  let response = {};
  if (userId !== null) {
    response = await firebaseConnect
      .database()
      .ref(`/cart/Cart-${userId}`)
      .once("value")
      .then(function (dataSnapshot) {
        return dataSnapshot.val();
      });
    dispatch({
      type: CART_FETCH,
      payload: response,
    });
  }
};

export const cartRemove = (id) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  if (userId) {
    firebaseConnect
      .database()
      .ref(`/cart/Cart-${userId}/`)
      .child(id) //id of child
      .remove();

    dispatch({
      type: CART_REMOVE,
      payload: id,
    });
  }
};
export const cartClean = () => (dispatch) => {
  dispatch({ type: CART_CLEAN });
};
