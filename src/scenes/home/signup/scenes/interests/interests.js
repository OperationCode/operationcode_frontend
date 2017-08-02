import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Interests extends Component {
  render() {
    return (
      <div>
        Interests
      </div>
    );
  }
}

Interests.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default Interests;
