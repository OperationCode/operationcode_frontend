import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './formCheckBox.css';

class FormCheckBox extends Component {

  render() {
    return (
      <div style={this.props.checkBox}>
        <input
          type="checkbox"
          name={this.props.name}
          id={this.props.value}
          value={this.props.value}
          onChange={this.props.onChange}
          className={styles.input}
        />
        <label style={this.props.label} htmlFor={this.props.name}>
          {this.props.value}
        </label>
      </div>
    );
  }
}

FormCheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  checkBox: PropTypes.shape({
    display: PropTypes.string,
    margin: PropTypes.string
  }),
  label: PropTypes.shape({
    textTransform: PropTypes.string,
    fontWeight: PropTypes.string,
    margin: PropTypes.string
  })
};

FormCheckBox.defaultProps = {
  checked: false,
  onChange: null,
  checkBox: null,
  label: null
};

export default FormCheckBox;
