import React, { Component } from "react";
import { firebaseConnect } from "../apis/firebaseShoppingCart";
import firebase from "firebase/app";
import "firebase/auth";
// import firebaseui from "firebaseui";
import { Link } from "react-router-dom";

import "./auth.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { NotificationManager } from "react-notifications";
import history from "../history";
// import GoogleAuth from "./GoogleAuth";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      showVerifyPassword: false,
    };
  }

  renderInput = ({ input, meta, label, type }) => {
    const confirmError = meta.error && meta.touched;
    const errorClassName = `field textbox ${confirmError ? `error` : ``}`;
    return (
      <div className={errorClassName}>
        <label>
          {label}
          {`${confirmError ? meta.error : ""}`}
        </label>
        <input {...input} type={type} autoComplete={input.name} />
      </div>
    );
  };
  onSubmit = (formValue) => {
    //--------Log In--------
    if (!this.state.showVerifyPassword) {
      //Login
      firebaseConnect
        .auth()
        .signInWithEmailAndPassword(formValue.email, formValue.password)
        .then((result) => {
          this.setState({ error: "Login Success" });
          history.push("/shoppingcart");
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          this.setState({ error: errorCode });
        });
    }
    //--------Sign Up--------
    else {
      if (this.props.isSignedIn && this.props.isAnonymous) {
        //merge anonymous user and new user
        var credential = firebaseConnect.auth.EmailAuthProvider.credential(
          formValue.email,
          formValue.password
        );
        // console.log(credential);
        firebaseConnect
          .auth()
          .currentUser.linkWithCredential(credential)
          .then(
            function (usercred) {
              NotificationManager.success(
                `Anonymous account successfully upgraded `,
                "Successful!",
                2000
              );
              history.push("/shoppingcart");
              // console.log("Anonymous account successfully upgraded");
            },
            function (error) {
              NotificationManager.error(error.message, "Error!", 2000);
              // console.log("Error upgrading anonymous account", );
            }
          );
      } else {
        //Create User
        firebaseConnect
          .auth()
          .createUserWithEmailAndPassword(formValue.email, formValue.password)
          .then((result) => {
            history.push(`/shoppingcart`);
          })
          .catch((error) => {
            //Handle Erros here
            var errorCode = error.code;
            this.setState({ error: errorCode });
          });
      }
      //notificateModal
    }
  };
  renderErrorFromServer = () => {
    // console.log(this.state.error);
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
    firebaseConnect
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        // ...
        if (result.user) history.push("/shoppingcart");
      })
      .catch(function (error) {
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

  renderVerifyPassword = () => {
    if (this.state.showVerifyPassword) {
      return (
        <Field
          type="password"
          name="verifyPassword"
          label="Verify Password"
          component={this.renderInput}
        ></Field>
      );
    }
  };
  renderForgetPassword = () => {
    if (!this.state.showVerifyPassword) {
      return (
        <Link
          to="/shoppingcart/forgotpassword"
          className="my_forgot_password_text"
        >
          Forgot Your Password
        </Link>
      );
    }
  };
  SignInSignUpSwitch = (value) => {
    this.setState({ showVerifyPassword: value });
  };
  render() {
    console.log(firebaseConnect);
    return (
      <div className="ui  container ">
        <div className="login-container">
          <div className="login-box">
            <div className="ui equal width center aligned padded grid">
              <div className="row">
                <div
                  className=" green column"
                  onClick={() => this.SignInSignUpSwitch(false)}
                  style={{ cursor: "pointer" }}
                >
                  Log in
                </div>
                <div
                  className="blue column"
                  onClick={() => this.SignInSignUpSwitch(true)}
                  style={{ cursor: "pointer" }}
                >
                  Sign Up
                </div>
              </div>
            </div>
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form error"
            >
              <Field
                name="email"
                label="Email"
                component={this.renderInput}
              ></Field>
              <Field
                type="password"
                name="password"
                label="Password"
                component={this.renderInput}
              ></Field>
              {this.renderForgetPassword()}
              {this.renderVerifyPassword()}
              {this.renderErrorFromServer()}
              <button
                type="submit"
                className={`ui approve  button  my-login-button ${
                  this.state.showVerifyPassword ? `blue` : `green`
                }`}
              >
                {this.state.showVerifyPassword ? `Sign Up` : `Log In`}
              </button>
            </form>
          </div>
          <button
            onClick={this.googleLogin}
            className="ui red google button my-google-login"
          >
            <i className="google icon"></i>Google Login
          </button>
        </div>
      </div>
    );
  }
}
const validate = (formValue) => {
  const error = {};
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!formValue.email) error.email = " Requite Value !";
  else if (!formValue.email.match(mailformat)) error.email = " Wrong Format !";
  if (!formValue.password) error.password = " Requite Value !";

  if (formValue.verifyPassword !== formValue.password)
    error.verifyPassword = " : Wrong Verify Password";
  if (!formValue.verifyPassword) error.verifyPassword = " Requite Value !";

  return error;
};
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isAnonymous: state.auth.isAnonymous,
  };
};
const componentWrapup = connect(mapStateToProps, {
  signIn,
  signOut,
})(Auth);

export default reduxForm({
  form: "userForm",
  validate,
})(componentWrapup);
