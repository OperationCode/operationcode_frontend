import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Events as ScrollEvent } from 'react-scroll';
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
  /* ******************** */
  /* SCROLL  LINK  BUTTON */
  /* ******************** */
  if (scrollLink) {
    // Report scroll link button clicks to Google Analytics
    if (process.env.NODE_ENV === 'production') {
      ScrollEvent.scrollEvent.register('begin', () => {
        ReactGA.event({
          category: 'Scroll Button Clicked',
          action: `Clicked to view ${link} from ${window.location.pathname}`,
        });
      });
    }

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

  /* ******************** */
  /* EXTERNAL LINK BUTTON */
  /* ******************** */
  if (isExternal) {
    if (process.env.NODE_ENV === 'production') {
      // https://operationcode.org is 25 characters - only show what follows
      const location = window.location.href.slice(25);

      return (
        <ReactGA.OutboundLink
          to={link}
          eventLabel={`OUTBOUND [${text} Button Click] to ${link} from ${location}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.linkButton} ${styles[theme]}`}
        >
          {text}
        </ReactGA.OutboundLink>
      );
    }

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

  /* ******************** */
  /* INTERNAL LINK BUTTON */
  /* ******************** */
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
