import React from "react";
import { Link } from "react-router-dom";
function LoginRequiteBanner({ banner, content }) {
  return (
    <div className="ui container">
      <div className="ui one column grid">
        <div className="column">
          <div className="ui raised segment">
            <p className="ui red ribbon label">{banner}</p>
            <p></p>
            <div>
              Please{" "}
              {
                <Link className="ui teal button" to="/shoppingcart/login">
                  Login
                </Link>
              }
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRequiteBanner;
