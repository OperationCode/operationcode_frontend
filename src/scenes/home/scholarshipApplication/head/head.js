import React, { Component } from 'react';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

class Head extends Component {
  render() {
    return (
      <div>
        <h3 className="scholarshipHeadName"> {this.props.scholarship.name} </h3>
        <p> {this.props.scholarship.description} </p>
        <p> {this.props.scholarship.location} </p>
        <p>Apply by {dateFormat(this.props.scholarship.close_time, 'fullDate')} </p>
      </div>
    );
  }
}

Head.propTypes = {
  scholarship: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    open_time: PropTypes.string,
    close_time: PropTypes.string,
    terms: PropTypes.string
  }).isRequired
};

export default Head;
