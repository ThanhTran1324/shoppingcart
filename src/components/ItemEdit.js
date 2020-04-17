import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import ItemForm from "./ItemForm";
import { itemFetch, itemEdit, itemImageDelete } from "../actions";
import Loading from "./Loading";
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

  onSubmit = (formValues) => {
    if (formValues.images !== this.props.item.images)
      this.props.itemImageDelete(this.props.item.images);
    this.props.itemEdit(this.id, formValues);
  };
  render() {
    if (this.props.item)
      return (
        <ItemForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.item, "name", "price", "images")}
        ></ItemForm>
      );
    else return <Loading />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items[ownProps.match.params.id],
    items: state.items,
  };
};
export default connect(mapStateToProps, {
  itemFetch,
  itemEdit,
  itemImageDelete,
})(ItemEdit);
