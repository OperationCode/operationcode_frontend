import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormCheckBox extends Component {

  render() {
    return (
      <div>
        <input
          type="checkbox"
          id={this.props.name}
          value={this.props.name}
        />
        <label htmlFor={this.props.name}>
          {this.props.name}
        </label>
      </div>
    );
  }
}

FormCheckBox.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormCheckBox;
