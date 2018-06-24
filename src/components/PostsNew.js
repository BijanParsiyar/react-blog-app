import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions/index";

class PostsNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          // A bunch of event handlers and props , passing all into the input element/tag
          {...field.input}
        />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, this.props.history);
  }

  render() {
    // Prop being passed to this component by reduxForm - validates the form first
    // with handle submit if the form passes our function onSubmit will run with the values from the
    // form
    const { handleSubmit } = this.props;

    return (
      <form className="mt-5" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </form>
    );
  }
}

// This function is called whenever the user submits the the form
function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'

  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content please";
  }
  // If errors is empty redux form assumes there is nothing wrong with the submitting form
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    { createPost }
  )(withRouter(PostsNew))
);
