import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './form.css';

class Form extends Component {

  render() {
    const classes = classNames({
      [`${styles.form}`]: true,
      [`${this.props.className}`]: this.props.className
    });
    return (
      <form className={classes}>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string
};

Form.defaultProps = {
  className: null
};

export default Form;
