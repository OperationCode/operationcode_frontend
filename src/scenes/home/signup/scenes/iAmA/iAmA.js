import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IAmA extends Component {
  render() {
    return (
      <div>
        IAmA
      </div>
    );
  }
}

IAmA.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default IAmA;
