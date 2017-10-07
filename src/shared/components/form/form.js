import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form.css';

const Form = ({ className, children }) => {
  const classes = classNames({
    [`${styles.form}`]: true,
    [`${className}`]: className
  });
  return (
    <form className={classes}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string
};

Form.defaultProps = {
  className: null
};

export default Form;
