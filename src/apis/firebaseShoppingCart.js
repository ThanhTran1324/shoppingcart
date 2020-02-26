import * as firebase from "firebase";

var config = {
  apiKey: process.env.REACT_APP_API_1,
  authDomain: process.env.REACT_APP_API_2,
  databaseURL: process.env.REACT_APP_API_3,
  projectId: process.env.REACT_APP_API_4,
  storageBucket: process.env.REACT_APP_API_5,
  messagingSenderId: process.env.REACT_APP_API_6,
  appId: process.env.REACT_APP_API_7,
  measurementId: process.env.REACT_APP_API_8
};
// Initialize Firebase

export const firebaseConnect = firebase.initializeApp(config);
