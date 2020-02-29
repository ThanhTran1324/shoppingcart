import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LoginRequiteBanner from "./LoginRequiteBanner";
import { itemCreate } from "../actions";
import ItemForm from "./ItemForm";

class ItemNew extends Component {
  onSubmit = formValue => {
    console.log(formValue);
    this.props.itemCreate(formValue);
  };
  LoginRequiteContent = () => {
    return (
      <div>
        Please{" "}
        {
          <Link className="ui teal button" to="/shoppingcart/login">
            Login
          </Link>
        }{" "}
        To Start Shopping!
      </div>
    );
  };
  render() {
    if (this.props.isSignedIn)
      return <ItemForm onSubmit={this.onSubmit}></ItemForm>;
    else {
      return (
        <LoginRequiteBanner
          banner="Please Login"
          content={this.LoginRequiteContent()}
        ></LoginRequiteBanner>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(mapStateToProps, { itemCreate })(ItemNew);
