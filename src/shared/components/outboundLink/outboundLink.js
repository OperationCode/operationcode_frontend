import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const OutboundLink = ({ href, analyticsEventLabel, children }) => {
  if (process.env.NODE_ENV === 'production') {
    // landing page is 25 characters including SSL
    const location = window.location.href.slice(25);

    return (
      <ReactGA.OutboundLink
        to={href}
        eventLabel={`OUTBOUND ${analyticsEventLabel} from ${location}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </ReactGA.OutboundLink>
    );
  }

  const onDevOutboundLinkClick = () => {
    console.log(`OUTBOUND ${analyticsEventLabel} analytics event clicked`); // eslint-disable-line
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onDevOutboundLinkClick}
    >
      {children}
    </a>
  );
};

OutboundLink.propTypes = {
  href: PropTypes.string.isRequired,
  analyticsEventLabel: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired, // eslint-disable-line
};

export default OutboundLink;
