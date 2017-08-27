import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './formTextArea.css';

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
