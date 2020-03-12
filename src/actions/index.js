import {
  SIGN_IN,
  SIGN_OUT,
  ITEM_CREATE,
  ITEMS_FETCH,
  ITEM_DELETE,
  ITEM_FETCH,
  ITEM_EDIT,
  ITEM_SORTED
} from "./types";
import { cartClean } from "./cartActions/";
import uuid from "uuid";
import { firebaseConnect } from "../apis/firebaseShoppingCart";
import history from "../history";
import firebase from "firebase";
// import { cartAdd } from "./cartActions";
// import { CART_CLEAN } from "./cartActions/type";
import * as _ from "lodash";
import { NotificationManager } from "react-notifications";
// var data = firebaseConnect.database().ref("/");

let items = firebaseConnect.database().ref("items");

export const signIn = (userId, isAnonymous) => async dispatch => {
  if (isAnonymous)
    NotificationManager.success(
      "Please Upgrade To Permanent User To Have Better Service !",
      "WelCome Back",
      2000
    );
  else NotificationManager.success("Login Success", "Success", 2000);
  await dispatch({
    type: SIGN_IN,
    payload: { userId, isAnonymous }
  });
};

export const signInAsAnonymous = () => async (dispatch, getState) => {
  if (!getState().auth.isSignedIn) {
    var errorMessage = null;
    //if user is not login so create new anonymous user
    await firebaseConnect
      .auth()
      .signInAnonymously()
      .catch(error => {
        errorMessage = error.message;
        NotificationManager.error(errorMessage, "Error", 2000);
      });
  }
};

export const signOut = () => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      NotificationManager.success("", "Logout Successful", 2000);
    })
    .catch(error => {
      console.log(error);
      NotificationManager.error(error, "Error", 2000);
    });

  dispatch({ type: SIGN_OUT });
  dispatch(cartClean());
  history.push("/shoppingcart");
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
  if (response) NotificationManager.success("", "New Item Created", 2000);
  dispatch({
    type: ITEM_CREATE,
    payload: response
  });
  history.push("/shoppingcart");
};

export const itemsFetch = () => async dispatch => {
  let response = await items.once("value").then(function(snapshot) {
    return snapshot.val();
  });
  dispatch({
    type: ITEMS_FETCH,
    payload: response
  });
  dispatch(itemSorted("time", "1")); //sort item as new first after fetch
};
//items.set(_.keyBy(response, "id")); convert array to Object to fix database

export const itemFetch = id => async dispatch => {
  // let response = await items.once("value").then(snapshot => {
  //   return snapshot.val()[id]; //access to Object and get value with key = id
  // });
  let response = await items
    .orderByChild("id")
    .equalTo(id)
    .once("value")
    .then(function(snapshot) {
      return snapshot.val();
    });
  dispatch({
    type: ITEM_FETCH,
    payload: response[id]
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
      NotificationManager.error(error, "Error", 2000); // need fix delete error
    });
  NotificationManager.success("", "Deleted", 2000);
  history.push("/shoppingcart");
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
  history.push("/shoppingcart");
};

export const itemSorted = (name, value) => (dispatch, getState) => {
  //sortedItems is an array sent to reducer, reducer will convert to Object
  // console.log(name, value);
  let sortedItems = [];
  let originalItems = getState().items;
  switch (name) {
    //sort by name
    case "name":
      if (value === "0") {
        //sort from a to z
        sortedItems = _.sortBy(Object.values(originalItems), [
          function(o) {
            return o.name;
          }
        ]);
      } else {
        //sort from z to a
        sortedItems = _.sortBy(Object.values(originalItems), [
          function(o) {
            return o.name;
          }
        ]).reverse();
      }
      break;

    //end sort by name
    case "price":
      if (value === "0") {
        //sort from low price to hight price
        sortedItems = Object.values(originalItems).sort(
          (a, b) => a.price - b.price
        );
        console.log("low to high");
      } else {
        //sort from high to low price
        sortedItems = Object.values(originalItems)
          .sort((a, b) => a.price - b.price)
          .reverse();
      }
      break;
    case "time":
      if (value === "0") {
        //sort from old to new
        sortedItems = Object.values(originalItems).sort((a, b) => {
          return a.createdTime - b.createdTime;
        });
      } else {
        //sort from new to old
        sortedItems = Object.values(originalItems)
          .sort((a, b) => {
            return a.createdTime - b.createdTime;
          })
          .reverse();
      }
      break;
    // case "searchByName":
    //   sortedItems = Object.values(originalItems).filter(e =>
    //     e.name.match(value)
    //   );
    //   console.log(sortedItems.length === 0);
    //   if (sortedItems.length === 0) {
    //     console.log("no item");
    //     NotificationManager.warning("", "No Item Was found!", 3000);
    //     dispatch(itemsFetch());
    //   }

    //   break;
    default:
      console.log("no sort");
  }
  dispatch({
    type: ITEM_SORTED,
    payload: sortedItems
  });
};
