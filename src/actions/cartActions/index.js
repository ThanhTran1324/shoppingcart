import { CART_ADD, CART_FETCH, CART_REMOVE } from "./type";

import { firebaseConnect } from "../../apis/firebaseShoppingCart";
//import history from "../../history";

let itemInCart = firebaseConnect.database().ref("/cart");

export const cartAdd = item => async dispatch => {
  await firebaseConnect
    .database()
    .ref(`cart/${item.id}`)
    .set(item);
  dispatch({
    type: CART_ADD,
    payload: item
  });
};

export const cartsFetch = () => async dispatch => {
  itemInCart = await firebaseConnect
    .database()
    .ref(`/cart`)
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });

  dispatch({
    type: CART_FETCH,
    payload: itemInCart
  });
};

export const cartRemove = id => async dispatch => {
  firebaseConnect
    .database()
    .ref(`cart/`)
    .child(id)
    .remove();

  dispatch({
    type: CART_REMOVE,
    payload: id
  });
};
