import React, { Component } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { itemFetch, itemDelete } from "../actions";
class ItemDelete extends Component {
  componentDidMount() {
    this.props.itemFetch(this.props.match.params.id);
  }
  actions = () => {
    return (
      <React.Fragment>
        <Link to="/shoppingcart" className="ui button">
          Cancel
        </Link>
        <button
          className="ui button primary"
          onClick={() => this.props.itemDelete(this.props.match.params.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  };
  render() {
    //console.log(this.props.item);
    return (
      <div>
        <Modal
          actions={this.actions()}
          header="Delete Item"
          content={`Do you want to delete   ${
            this.props.item ? this.props.item.name : ""
          }?`}
        ></Modal>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items[ownProps.match.params.id]
  };
};
export default connect(mapStateToProps, { itemFetch, itemDelete })(ItemDelete);
