import React, { Component } from "react";
import { connect } from "react-redux";

import { itemCreate } from "../actions";
import ItemForm from "./ItemForm";

class ItemNew extends Component {
  onSubmit = formValue => {
    this.props.itemCreate(formValue);
  };
  render() {
    return <ItemForm onSubmit={this.onSubmit}></ItemForm>;
  }
}
export default connect(null, { itemCreate })(ItemNew);
