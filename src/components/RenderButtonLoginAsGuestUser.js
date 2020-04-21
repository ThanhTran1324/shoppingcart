import React, { Component } from "react";
import { connect } from "react-redux";
import { signInAsAnonymous } from "../actions";
import { Link } from "react-router-dom";
export class RenderButtonLoginAsGuestUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!this.props.isSignedIn)
      //not login
      return (
        <button
          onClick={this.props.signInAsAnonymous}
          className="ui teal google button my-google-login"
        >
          <i
            className="user secret icon"
            style={{ fontSize: "25px", color: "red" }}
          ></i>
          Anonymous Login
        </button>
      );
    else if (this.props.isAnonymous) {
      //logined as guest
      return (
        <Link to="/login/" className="ui blue google button my-google-login">
          <i className="user secret icon"></i>Upgrade to permanent user
        </Link>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isAnonymous: state.auth.isAnonymous,
  };
};
export default connect(mapStateToProps, { signInAsAnonymous })(
  RenderButtonLoginAsGuestUser
);
