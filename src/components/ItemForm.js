import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class ItemForm extends Component {
  renderInput = ({ input, meta, label, type }) => {
    const confirmError = meta.error && meta.touched;
    const errorClassName = `field ${confirmError ? `error` : ``}`;

    return (
      <div className={errorClassName}>
        <label>
          {label}
          {`${confirmError ? "Requited" : ""}`}
        </label>
        <input {...input} type={type} />
      </div>
    );
  };

  onSubmit = formValue => {
    formValue.price = parseInt(formValue.price);
    this.props.onSubmit(formValue);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="name" component={this.renderInput} label="Name : " />
        <Field
          name="price"
          component={this.renderInput}
          label="Price: "
          type="number"
        />
        <button className="ui green approve right button">Submit</button>
      </form>
    );
  }
}

const validate = formValue => {
  const error = {};
  if (!formValue.name) error.name = "Requite Value!";
  if (!formValue.price) error.price = "Requite Value!";

  return error;
};

export default reduxForm({
  form: "ItemForm",
  validate
})(ItemForm);
