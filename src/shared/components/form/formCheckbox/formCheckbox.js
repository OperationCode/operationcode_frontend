import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormCheckbox extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  handleChange = (event) => {
    this.setState({ checked: event.target.checked }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.checked);
      }
    });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange}
          type="checkbox"
        />
      </div>
    );
  }
}

FormCheckbox.propTypes = {
  onChange: PropTypes.func
};

FormCheckbox.defaultProps = {
  onChange: null
};
