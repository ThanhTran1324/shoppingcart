import React, { Component } from "react";
import { connect } from "react-redux";
import { itemSorted } from "../actions/";
import { Field, reduxForm } from "redux-form";

export class SortAndFilter extends Component {
  renderSelecter = ({ name, input, label, option }) => {
    return (
      <div className="ui form column">
        {/* Sort Dropdown */}

        <select {...input} onChange={this.handleChange} className="ui dropdown">
          <option value="-1" defaultValue>
            {label}
          </option>
          {option.map((e, index) => {
            return (
              <option value={index} key={index}>
                {e}
              </option>
            );
            // value = 0 => low to high and old to new
            // value = 1 => high to old and new to old
          })}
        </select>
        {/* End Sort  Dropdown */}
      </div>
    );
  };
  handleChange = e => {
    if (e.target) {
      this.props.itemSorted(e.target.name, e.target.value);
    }
  };

  handleOnSearch = formValues => {
    // console.log(formValues);
    // this.props.itemSorted("searchByName", formValues.search);
  };
  renderSearch = ({ input, name }) => {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleOnSearch)}>
        <div className="ui input " style={{ width: "100%" }}>
          <input {...input} type="text" placeholder="Search..."></input>{" "}
          <button type="submit" className="ui button my-search-button">
            <i className="search icon"></i>
          </button>
        </div>
      </form>
    );
  };
  render() {
    // console.log(this.props);
    return (
      <div className="ui container">
        <div className="ui grid">
          {/* here */}
          {/* <div className="three wide column">
            <Field name="search" component={this.renderSearch}></Field>
          </div> */}
          <div className="three column row">
            <Field
              name="price"
              label="Price"
              component={this.renderSelecter}
              option={["Low To High", "High To Low"]}
            ></Field>

            <Field
              name="time"
              label="Time"
              component={this.renderSelecter}
              option={["Old To New", "New To Old"]}
            ></Field>

            <Field
              name="name"
              label="Name"
              component={this.renderSelecter}
              option={["A-Z", "Z-A"]}
            ></Field>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
const wrapper = connect(mapStateToProps, { itemSorted })(SortAndFilter);
export default reduxForm({
  form: "SortAndFilterForm"
})(wrapper);
