import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RenderButtonLoginAsGuestUser from "./RenderButtonLoginAsGuestUser";
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
                <RenderButtonLoginAsGuestUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(LoginRequiteBanner);
