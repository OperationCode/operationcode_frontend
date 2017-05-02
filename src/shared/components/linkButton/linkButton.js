import React from 'react';
import PropTypes from 'prop-types';
import styles from './linkButton.css';

const LinkButton = (props) => {
  const {
    link,
    text,
    ...otherProps
  } = props;
  return (
    <a className={styles.linkButton} href={link} {...otherProps} >{text}</a>
  );
};

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default LinkButton;
