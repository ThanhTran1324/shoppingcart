import React, { Component } from "react";

import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_API_9,
          scope: "email"
        })
        .then(() => {
          //run when gapi loaded
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange); //get isSignedIn as first argument to function onAuthChange

          //if isSignedIn change the function onAuthChange will be call to update state.isSignin
        });
    });
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  renderAuthButton() {
    if (this.props.isSignedIn)
      return (
        <button
          onClick={this.onSignOutClick}
          style={{ marginTop: "3px" }}
          className="ui gray google button"
        >
          <i className="google icon" />
          Logout
        </button>
      );
    else
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i>Login With Google
        </button>
      );
  }
  render() {
    //console.log(this.props.isSignedIn);
    //console.log(this.props.currentUserIdFromReducer);
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
