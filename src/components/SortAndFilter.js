import React, { Component } from "react";
import { connect } from "react-redux";

export class SortAndFilter extends Component {
  render() {
    console.log(
      Object.values(this.props.items).sort((a, b) => a.price - b.price)
    );
    return <div></div>;
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
export default connect(mapStateToProps)(SortAndFilter);
