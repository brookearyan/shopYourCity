import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createUser } from '../actions/index';

class NewUser extends Component {
  onSubmit(values){
    this.props.createPost(values, () => {
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
        // <Link to="/" className="btn btn-danger">
        //   cancel
        // </Link>
      </form>
    )
  }

}
