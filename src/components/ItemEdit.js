import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import ItemForm from "./ItemForm";

import { itemFetch, itemEdit } from "../actions";
class ItemEdit extends Component {
  componentDidMount() {
    this.props.itemFetch(this.props.match.params.id);
  }
  id = this.props.match.params.id;

  onSubmit = formValues => {
    this.props.itemEdit(this.id, formValues);
  };
  render() {
    console.log(this.props.item);
    if (this.props.item)
      return (
        <ItemForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.item, "name", "price")}
        ></ItemForm>
      );
    else return "loading";
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps, { itemFetch, itemEdit })(ItemEdit);
