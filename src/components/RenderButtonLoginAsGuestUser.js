import React, { Component } from "react";
import { connect } from "react-redux";
import { signInAsAnonymous } from "../actions";
import { Link } from "react-router-dom";
export class RenderButtonLoginAsGuestUser extends Component {
  render() {
    if (!this.props.isSignedIn)
      //not login
      return (
        <button
          onClick={this.props.signInAsAnonymous}
          className="ui teal google button my-google-login"
        >
          <i className="user secret icon"></i>Login As Guest User
        </button>
      );
    else if (this.props.isSignedIn && this.props.isAnonymous) {
      //logined as guest
      return (
        <Link
          to="/shoppingcart/login/"
          className="ui blue google button my-google-login"
        >
          <i className="user secret icon"></i>Upgrade to permanent user
        </Link>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isAnonymous: state.auth.isAnonymous
  };
};
export default connect(mapStateToProps, { signInAsAnonymous })(
  RenderButtonLoginAsGuestUser
);