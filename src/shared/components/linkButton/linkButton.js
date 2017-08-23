import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styles from './linkButton.css';

const LinkButton = (props) => {
  function isExternalLink(link) {
    if (link.startsWith('http://') || link.startsWith('https://') || link.startsWith('mailto:')) { return true; }
    return false;
  }

  const {
    link,
    target,
    rel,
    text,
    theme,
    scrollLink,
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

  if (isExternalLink(link)) {
    return (
      <a href={link} target={target} rel={rel} className={`${styles.linkButton} ${styles[theme]}`}>{text}</a>
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
  target: PropTypes.string,
  rel: PropTypes.string
};

LinkButton.defaultProps = {
  theme: 'blue',
  scrollLink: false,
  target: '_blank',
  rel: 'noopener noreferrer'
};

export default LinkButton;
