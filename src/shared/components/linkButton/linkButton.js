import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ReactGA from 'react-ga';
import styles from './linkButton.css';

const LinkButton = ({
  link,
  text,
  theme,
  scrollLink,
  isExternal,
  ...otherProps
}) => {
  if (scrollLink) {
    return (
      <ScrollLink
        className={`${styles.linkButton} ${styles[theme]}`}
        to={link}
        smooth
        duration={400}
        {...otherProps}
      >
        {text}
      </ScrollLink>
    );
  }

  if (isExternal) {
    if (process.env.NODE_ENV === 'production') {
      // landing page is 25 characters including SSL
      const location = window.location.href.slice(25);

      return (
        <ReactGA.OutboundLink
          to={link}
          eventLabel={`OUTBOUND [n/a] to ${link} from ${location}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkButton} ${styles[theme]}`}
        >
          {text}
        </ReactGA.OutboundLink>
      );
    }

    const onDevLinkButtonClick = () => {
      console.log(`OUTBOUND ${analyticsEventLabel} analytics event clicked`); // eslint-disable-line
    };

    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.linkButton} ${styles[theme]}`}
        onClick={onDevLinkButtonClick}
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
