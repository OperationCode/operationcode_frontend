import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './linkButton.css';

const LinkButton = (props) => {
  const {
    link,
    text,
    theme,
    ...otherProps
  } = props;

  return (
    <Link className={`${styles.linkButton} ${styles[theme]}`} to={link} {...otherProps}>{text}</Link>
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
