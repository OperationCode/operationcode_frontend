import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './form.css';


class Form extends Component {
  render() {
    return (
      <form className={styles.form}>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.element.isRequired
};

export default Form;
