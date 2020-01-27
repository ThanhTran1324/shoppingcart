import {
  SIGN_IN,
  SIGN_OUT,
  ITEM_CREATE,
  ITEMS_FETCH,
  ITEM_DELETE,
  ITEM_FETCH,
  ITEM_EDIT
} from "./types";
import uuid from "uuid";
import { firebaseConnect } from "../apis/firebaseShoppingCart";
import history from "../history";
import * as _ from "lodash";

// var data = firebaseConnect.database().ref("/");

let items = firebaseConnect.database().ref("/items");
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const itemCreate = formValues => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const newItem = {
    ...formValues,
    userId: userId,
    id: uuid()
  };
  firebaseConnect
    .database()
    .ref(`items/${newItem.id}`)
    .set(newItem);

  const response = await firebaseConnect
    .database()
    .ref(`items/${newItem.id}`)
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });

  dispatch({
    type: ITEM_CREATE,
    payload: response
  });
  history.push("/");
};

export const itemsFetch = () => async dispatch => {
  var response = await items.once("value").then(snapshot => {
    return snapshot.val();
  });
  //items.set(_.keyBy(response, "id")); convert array to Object to fix database
  dispatch({
    type: ITEMS_FETCH,
    payload: response
  });
};

export const itemFetch = id => async dispatch => {
  let response = await items.once("value").then(snapshot => {
    return snapshot.val()[id]; //access to Object and get value with key = id
  });
  dispatch({
    type: ITEM_FETCH,
    payload: response
  });
};

export const itemDelete = id => async dispatch => {
  const deleteItem = await firebaseConnect.database().ref(`items/${id}`);
  deleteItem
    .remove()
    .then(() => {
      dispatch({
        type: ITEM_DELETE,
        payload: id
      });
    })
    .catch(error => {
      console.log(error); // need fix delete error
    });
  history.push("/");
};
export const itemEdit = (id, formValues) => async dispatch => {
  let editItem = firebaseConnect.database().ref(`items/${id}`);
  editItem.update(formValues);
  const response = await firebaseConnect
    .database()
    .ref(`items/${id}`)
    .once("value")
    .then(snapshot => {
      return snapshot.val();
    });
  dispatch({
    type: ITEM_EDIT,
    payload: response
  });
  history.push("/");
};
