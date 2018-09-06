import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from '../actions/index';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: '',
      marital_status: '',
      zip_code: ''
   };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event, name) {
    this.setState({ name: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state);
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="enter your annual salary"
          className="form-control"
          name="salary"
          value={this.state.salary}
          onChange={this.onInputChange}
         />
         <input
           placeholder="marital status (S/M)"
           className="form-control"
           name="marital_status"
           value={this.state.marital_status}
           onChange={this.onInputChange}
          />
        <input
          placeholder="zip code"
          className="form-control"
          name="zip_code"
          value={this.state.zip_code}
          onChange={this.onInputChange}
         />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            submit
          </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewUser);
