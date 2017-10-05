import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './heading.css';

const Heading = (props) => {
  const { text, headingLines, theme, ...otherProps } = props;
  const classes = classNames({
    [`${styles.heading}`]: true,
    [`${styles[theme]}`]: true,
    [`${styles.headingLines}`]: headingLines
  });

  // we don't want validation as a property on the h2
  delete otherProps.validation;
  return <h2 className={classes} {...otherProps}>{text}</h2>;
};

function maxTextLen(props) {
  const text = props.text;
  const maxLen = 30;
  if (text.length > maxLen) {
    return new Error(`text length must be less than ${(maxLen + 1)}`);
  }

  return '';
}

Heading.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  headingLines: PropTypes.bool,
  theme: PropTypes.string,
  validation: maxTextLen
};

Heading.defaultProps = {
  id: null,
  headingLines: true,
  theme: 'dark',
  validation: maxTextLen
};

export default Heading;
