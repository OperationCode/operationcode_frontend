import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './formButton.css';

class FormButton extends Component {
  render() {
    const classes = classNames({
      [`${styles.formButton}`]: true,
      [`${styles[this.props.theme]}`]: true,
      [`${this.props.className}`]: this.props.className
    });
    return (
      <button
        type="button"
        className={classes}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    );
  }
}

FormButton.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

FormButton.defaultProps = {
  theme: 'blue',
  onClick: null,
  className: null,
  disabled: false,
};

export default FormButton;
