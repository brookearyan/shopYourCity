import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchCity extends Component {
  constructor(props) {
    super(props);
    this.state = { city: };
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="get a five day forecast in your favorite cities"
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
