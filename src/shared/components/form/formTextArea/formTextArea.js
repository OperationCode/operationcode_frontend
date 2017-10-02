import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './formTextArea.css';

class FormTextArea extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
      }
    });
  }

  render() {
    return (
      <div>
        <textarea className={styles.text_area} onChange={this.handleChange} placeholder={this.props.placeHolder} />
      </div>
    );
  }
}

FormTextArea.propTypes = {
  onChange: PropTypes.func,
  placeHolder: PropTypes.string
};

FormTextArea.defaultProps = {
  onChange: null,
  placeHolder: ''
};

export default FormTextArea;
