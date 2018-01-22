import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './heading.css';

const Heading = ({ text, headingLines, theme, ...otherProps }) => {
  const classes = classNames({
    [`${styles.heading}`]: true,
    [`${styles[theme]}`]: true,
    [`${styles.headingLines}`]: headingLines
  });

  return <h2 className={classes} {...otherProps}>{text}</h2>;
};

Heading.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  headingLines: PropTypes.bool,
  theme: PropTypes.string,
};

Heading.defaultProps = {
  id: null,
  headingLines: true,
  theme: 'dark',
};

export default Heading;
