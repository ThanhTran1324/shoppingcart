import { CART_ADD, CART_FETCH, CART_REMOVE, CART_CLEAN } from "./type";

import { firebaseConnect } from "../../apis/firebaseShoppingCart";
//import history from "../../history";

export const cartAdd = item => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  await firebaseConnect
    .database()
    .ref(`/cart/Cart-${userId}/${item.id}`)
    .set(item);
  dispatch({
    type: CART_ADD,
    payload: item
  });
};

export const cartFetch = () => async (dispatch, getState) => {
  const userId = await getState().auth.userId;

  if (userId !== null) {
    firebaseConnect
      .database()
      .ref(`/cart/Cart-${userId}`)
      .on("value", function(snapshot) {
        dispatch({
          type: CART_FETCH,
          payload: snapshot.val()
        });
      });
  }
};

export const cartRemove = id => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  firebaseConnect
    .database()
    .ref(`/cart/Cart-${userId}/`)
    .child(id) //id of child
    .remove();

  dispatch({
    type: CART_REMOVE,
    payload: id
  });
};

export const cartClean = () => {
  return {
    type: CART_CLEAN
  };
};
