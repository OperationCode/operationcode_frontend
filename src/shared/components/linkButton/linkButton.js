import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styles from './linkButton.css';

const LinkButton = (props) => {
  const {
    link,
    text,
    theme,
    scrollLink,
    isExternal,
    ...otherProps
  } = props;

  if (scrollLink) {
    return (
      <ScrollLink
        className={`${styles.linkButton} ${styles[theme]}`}
        to={link}
        smooth duration={400}
        {...otherProps}
      >
        {text}
      </ScrollLink>
    );
  }

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.linkButton} ${styles[theme]}`}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      className={`${styles.linkButton} ${styles[theme]}`}
      to={link}
      {...otherProps}
    >
      {text}
    </Link>
  );
};

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.string,
  scrollLink: PropTypes.bool,
  isExternal: PropTypes.bool,
};

LinkButton.defaultProps = {
  theme: 'blue',
  scrollLink: false,
  isExternal: false,
};

export default LinkButton;
