import React from 'react';
import PropTypes from 'prop-types';
import styles from './linkButton.css';

const LinkButton = (props) => {
  const {
    link,
    text,
    theme,
    ...otherProps
  } = props;

  return (
    <a className={`${styles.linkButton} ${styles[theme]}`} href={link} {...otherProps} >{text}</a>
  );
};

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.string
};

LinkButton.defaultProps = {
  theme: 'blue'
};

export default LinkButton;
