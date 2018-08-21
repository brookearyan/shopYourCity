import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchCity extends Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="shop your city"
          className="form-control"
          value={this.state.city}
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


export default SearchCity;
