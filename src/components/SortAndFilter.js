import React, { Component } from "react";
import { connect } from "react-redux";
import { itemSorted, itemSearch } from "../actions/";
import { Field, reduxForm, formValues } from "redux-form";

export class SortAndFilter extends Component {
  renderSelecter = ({ name, input, label, option }) => {
    return (
      <div className="ui form">
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
    if (e.target !== undefined) {
      this.props.itemSorted(e.target.name, e.target.value);
    }
  };

  handleOnSearch = formValues => {
    this.props.itemSearch(formValues);
  };
  renderSearch = ({ input, name }) => {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.handleOnSearch)}
        className="ui fluid category search"
      >
        <div className="ui icon input">
          <input
            {...input}
            className="prompt"
            type="text"
            placeholder="Search..."
          ></input>
          <i className="search icon"></i>
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
          <div className="four wide column">
            <Field name="search" component={this.renderSearch}></Field>
          </div>

          <div className="four wide column">
            <Field
              name="price"
              label="Price"
              component={this.renderSelecter}
              option={["Low To High", "High To Low"]}
            ></Field>
          </div>
          <div className="four wide column">
            <Field
              name="time"
              label="Time"
              component={this.renderSelecter}
              option={["Old To New", "New To Old"]}
            ></Field>
          </div>
          <div className="four wide column">
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
const wrapper = connect(mapStateToProps, { itemSorted, itemSearch })(
  SortAndFilter
);
export default reduxForm({
  form: "SortAndFilterForm"
})(wrapper);
