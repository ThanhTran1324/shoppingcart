import React, { Component } from "react";
import firebase from "firebase";
export class ForGotPassword extends Component {
  componentWillMount = () => {};
  handleSubmit = event => {
    event.preventDefault();
    var auth = firebase.auth();
    var email = document.getElementById("email").value;
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        //email sent
        console.log("email sent");
        document.getElementById("output").innerHTML = "Email has been sent!";
      })
      .catch(error => {
        //an error happened
        // console.log(error);
        document.getElementById("output").innerHTML = error;
      });
  };
  render() {
    return (
      <div className="ui container">
        <form>
          <label>Forgot your password ? </label>
          <p>
            Enter the email address for your account we'll email you a link to
            reset your password.
          </p>
          <h3>Email: </h3>
          <input type="text" id="email"></input>
          <button onClick={this.handleSubmit}>Sent Reset Password email</button>
          <h2 id="output"> </h2>
        </form>
      </div>
    );
  }
}

export default ForGotPassword;
