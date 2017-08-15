import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormTextArea extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.text);
      }
    });
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} />
      </div>
    );
  }
}

FormTextArea.propTypes = {
  onChange: PropTypes.func
};

FormTextArea.defaultProps = {
  onChange: null
};
