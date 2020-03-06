import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signInAsAnonymous } from "../actions";
class LoginRequiteBanner extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui one column grid">
          <div className="column">
            <div className="ui raised segment">
              <p className="ui red ribbon label">{this.props.banner}</p>
              <p></p>
              <div>
                Please{" "}
                {
                  <Link className="ui teal button" to="/shoppingcart/login">
                    Login
                  </Link>
                }
                {this.props.content}
                <button
                  onClick={this.props.signInAsAnonymous}
                  className="ui teal google button my-google-login"
                >
                  <i className="user secret icon"></i>Login As Guest User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { signInAsAnonymous })(LoginRequiteBanner);
