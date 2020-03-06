import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import ItemForm from "./ItemForm";

import { itemFetch, itemEdit } from "../actions";
class ItemEdit extends Component {
  componentDidMount() {
    this.props.itemFetch(this.props.match.params.id);

    //fix createdTime of item
    // Object.values(this.props.items).map(item => {
    //   if (!item.createdTime) {
    //     var date = new Date();
    //     var TimeInMiliSecond = date.getTime();
    //     var newItem = { ...item, createdTime: TimeInMiliSecond };
    //     this.props.itemEdit(newItem.id, newItem);
    //     console.log("edited");
    //   }
    // });

    // add createdTime to Database
    // Object.values(this.props.items).map(item => {
    //   var date = new Date();
    //   var TimeInMiliSecond = date.getTime();
    //   var newItem = { ...item, createdTime: TimeInMiliSecond };
    //   this.props.itemEdit(newItem.id, newItem);
    //   console.log("edited");
    // });
  }

  id = this.props.match.params.id;

  onSubmit = formValues => {
    this.props.itemEdit(this.id, formValues);
  };
  render() {
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
    item: state.items[ownProps.match.params.id],
    items: state.items
  };
};
export default connect(mapStateToProps, { itemFetch, itemEdit })(ItemEdit);