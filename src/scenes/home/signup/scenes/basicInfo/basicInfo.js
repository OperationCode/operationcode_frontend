import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BasicInfo extends Component {
  render() {
    return (
      <div>
        BasicInfo
      </div>
    );
  }
}

BasicInfo.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default BasicInfo;
