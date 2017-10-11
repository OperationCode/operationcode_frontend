import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './formButton.css';

const FormButton = ({
  theme, className, onClick, disabled, text
}) => {
  const classes = classNames({
    [`${styles.formButton}`]: true,
    [`${styles[theme]}`]: true,
    [`${className}`]: className
  });
  return (
    <button
      type="submit"
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

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
