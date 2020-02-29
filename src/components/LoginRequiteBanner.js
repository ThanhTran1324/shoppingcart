import React from "react";

function LoginRequiteBanner(props) {
  return (
    <div className="ui container">
      <div class="ui one column grid">
        <div class="column">
          <div class="ui raised segment">
            <p class="ui red ribbon label">{props.banner}</p>
            <p></p>
            {props.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRequiteBanner;
