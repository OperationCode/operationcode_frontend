import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WorkAndSchool extends Component {
  render() {
    return (
      <div>
        WorkAndSchool
      </div>
    );
  }
}

WorkAndSchool.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default WorkAndSchool;
