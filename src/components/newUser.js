import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createUser } from '../actions/index';

class NewUser extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className="form-group has-danger">
        <label> {field.label} </label>
        <input
          className="form-control"
          type="text"
          {...field.input}
         />
         <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    )
  }
  //field states: pristine, touched, invalid
  onSubmit(values){
    this.props.createUser(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="please enter your annual salary"
          name="salary"
          component={this.renderField}
         />
        <Field
          label="marital status"
          name="marital_status"
          component={this.renderField}
          />
        <Field
          label="zip code"
          name="zip_code"
          component={this.renderField}
         />
         <button type="submit" className="btn btn-primary">
          calculate my taxes!
        </button>
      </form>
    )
  }
}
function validate(values) {
  const errors = {};

  if(!values.salary) {
    errors.salary = "please enter your annual salary"
  }
  if(!values.marital_status) {
    errors.marital_status = "please enter your marital status"
  }
  if(!values.zip_code) {
    errors.zip_code = "please enter your zip code"
  }
  return errors;
}
//passed values entered by user as obj
//validate inputs & returns errors obj, no errors submits form

export default reduxForm({
  //abbrev for validate: validate,
  validate,
  form: 'NewUserForm'
})(
  connect(null, { createUser })(NewUser)
);


//validate:
//--pass single argument (function)
//--specifies form incase we have multiple forms, must be unique string
