import React, { Component } from "react";
import firebase from "firebase";
// import firebaseui from "firebaseui";

import "./auth.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
// import GoogleAuth from "./GoogleAuth";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }

  renderInput = ({ input, meta, label, type }) => {
    const confirmError = meta.error && meta.touched;
    const errorClassName = `field ${confirmError ? `error` : ``}`;

    return (
      <div className={errorClassName}>
        <label>
          {label}
          {`${confirmError ? meta.error : ""}`}
        </label>
        <input {...input} type={type} />
      </div>
    );
  };
  onSubmit = formValue => {
    // console.log(formValue);
    firebase
      .auth()
      .signInWithEmailAndPassword(formValue.email, formValue.password)
      .then(result => {
        this.setState({ error: "Login Success" });

        this.props.signIn(result.user.uid);
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;

        // console.log(errorCode);
        // var errorMessage = error.message;

        this.setState({ error: errorCode });
        // ...
        // console.log( "message:", errorMessage);
      });
  };
  renderErrorFromServer = () => {
    console.log(this.state.error);
    switch (this.state.error) {
      case "auth/user-not-found":
      case "auth/wrong-password":
        return <div>Wrong User or Password</div>;
      default:
        return <div>{this.state.error}</div>;
    }
  };
  googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      });
  };
  render() {
    return (
      <div className="ui container">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="email"
            label="Email"
            type="username"
            component={this.renderInput}
          ></Field>
          <Field
            type="password"
            name="password"
            label="Password"
            component={this.renderInput}
          ></Field>
          {this.renderErrorFromServer()}
          <button type="submit" className="ui green approve right button">
            Login
          </button>
        </form>
        <button onClick={this.googleLogin} className="ui red google button">
          <i className="google icon"></i>Login With Google
        </button>
      </div>
    );
  }
}
const validate = formValue => {
  const error = {};
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!formValue.email) error.email = " Requite Value !";
  else if (!formValue.email.match(mailformat))
    error.email = " Wrong Email Format !";
  if (!formValue.password) error.password = " Requite Value !";

  return error;
};
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};
const componentWrapup = connect(mapStateToProps, { signIn, signOut })(Auth);

export default reduxForm({
  form: "userForm",
  validate
})(componentWrapup);
