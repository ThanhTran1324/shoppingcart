import React, { Component } from "react";
import { connect } from "react-redux";

import { itemCreate } from "../actions";
import ItemForm from "./ItemForm";

class ItemNew extends Component {
  onSubmit = formValue => {
    this.props.itemCreate(formValue);
  };
  render() {
    if (this.props.isSignedIn)
      return <ItemForm onSubmit={this.onSubmit}></ItemForm>;
    else {
      return (
        <div className="ui  container ">Please Login To Create New Item !</div>
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
