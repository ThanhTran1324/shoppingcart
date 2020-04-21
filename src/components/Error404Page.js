import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Error404Page extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Error 404</h1>
        <Link to="/">
          <h1>Home Page</h1>
        </Link>
      </div>
    );
  }
}

export default Error404Page;
