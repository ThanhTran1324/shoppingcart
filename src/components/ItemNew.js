import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import LoginRequiteBanner from "./LoginRequiteBanner";
import { itemCreate } from "../actions";
import ItemForm from "./ItemForm";

class ItemNew extends Component {
  onSubmit = formValue => {
    console.log(formValue);
    this.props.itemCreate(formValue);
  };

  render() {
    if (this.props.isSignedIn && !this.props.isAnonymous)
      return <ItemForm onSubmit={this.onSubmit}></ItemForm>;
    else if (this.props.isAnonymous)
      return (
        <LoginRequiteBanner
          banner="Please Login"
          content={`You Are Shopping As Guest User!
        Please Login To Have Better Service.`}
        ></LoginRequiteBanner>
      );
    else {
      return (
        <LoginRequiteBanner
          banner="Please Login"
          content="To Start Selling"
        ></LoginRequiteBanner>
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
export default connect(mapStateToProps, { itemCreate })(ItemNew);
