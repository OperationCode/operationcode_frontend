import React from 'react';
import PropTypes from 'prop-types';
import styles from './heading.css';

const Heading = (props) => {
  const {
    text,
    ...otherProps
  } = props;
  return (
    <h2 className={styles.heading} {...otherProps}>{text}</h2>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired
};

export default Heading;
