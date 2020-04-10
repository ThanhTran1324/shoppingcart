import React, { Component } from "react";
import { connect } from "react-redux";
import { itemSorted } from "../actions/";
import { Field, reduxForm } from "redux-form";
import { itemSearch } from "../actions/filterActions";
export class SortAndFilter extends Component {
  componentWillUnmount = () => {
    // Clean up Search
    this.props.itemSearch("");
  };

  renderSelecter = ({ name, input, label, option }) => {
    return (
      <div className="ui four column form noPadding">
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
  handleChange = (e) => {
    if (e.target) {
      this.props.itemSorted(e.target.name, e.target.value);
    }
  };

  handleOnSearch = (formValues) => {
    this.props.itemSearch(formValues.search);
  };
  renderSearch = ({ input, name }) => {
    console.log(input);
    return (
      <div className="ui  ui four column form noPadding">
        <form onSubmit={this.props.handleSubmit(this.handleOnSearch)}>
          <input type="text" placeholder="Search" {...input}></input>
        </form>
      </div>
    );
  };
  render() {
    // console.log(this.props);
    return (
      <div className="ui grid container " style={{ marginTop: "10px" }}>
        <div className="four column row noPadding">
          <Field
            name="search"
            component={this.renderSearch}
            initialValues={{ search: "hello" }}
          ></Field>

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
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const wrapper = connect(mapStateToProps, { itemSorted, itemSearch })(
  SortAndFilter
);
export default reduxForm({
  form: "SortAndFilterForm",
})(wrapper);
