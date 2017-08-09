import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Scholarship extends Component {
  render() {
    return (
      <div>
        <Link to="/scholarship-application">{this.props.scholarship.name}</Link> : {this.props.scholarship.description}
      </div>
    );
  }
}

Scholarship.propTypes = {
  scholarship: PropTypes.arrayOf,
};

Scholarship.defaultProps = {
  scholarship: false
};

export default Scholarship;
