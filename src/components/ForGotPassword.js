import React, { Component } from "react";
import { firebaseConnect } from "../apis/firebaseShoppingCart";

import LoginRequiteBanner from "./LoginRequiteBanner";
export class ForGotPassword extends Component {
  componentWillMount = () => {};
  content = () => {
    return (
      <div>
        <h2>
          Enter the email address for your account we'll email you a link to
          reset your password.
        </h2>
        <p></p>
        <form className="ui form">
          <div className="field">
            <label>Email address: </label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              style={{ width: "300px" }}
            ></input>
            <button
              onClick={this.handleSubmit}
              className="ui interted teal button "
              style={{ marginLeft: "5px" }}
            >
              Sent Reset Password Email
            </button>
            <h2 id="output"> </h2>
          </div>
        </form>
        <p></p>
      </div>
    );
  };
  handleSubmit = (event) => {
    event.preventDefault();
    var auth = firebaseConnect.auth();
    var email = document.getElementById("email").value;
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        //email sent
        console.log("email sent");
        document.getElementById("output").innerHTML = "Email has been sent!";
      })
      .catch((error) => {
        //an error happened
        // console.log(error);
        document.getElementById("output").innerHTML = error;
      });
  };
  render() {
    return (
      <LoginRequiteBanner
        banner="Forgot your password ? "
        content={this.content()}
      ></LoginRequiteBanner>
    );
  }
}

export default ForGotPassword;
