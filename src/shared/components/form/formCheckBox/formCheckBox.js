import React from 'react';
import PropTypes from 'prop-types';
import styles from './formCheckBox.css';

const FormCheckBox = ({ checkBox, name, value, onChange, label }) => (
  <div style={checkBox}>
    <input
      type="checkbox"
      name={name}
      id={value}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
    <label style={label} htmlFor={name}>
      {value}
    </label>
  </div>
);

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
  onChange: null,
  checkBox: null,
  label: null
};

export default FormCheckBox;
