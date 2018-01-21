import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const OutboundLink = ({
  href,
  analyticsEventLabel,
  children,
  className,
  style,
}) => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <ReactGA.OutboundLink
        to={href}
        eventLabel={`OUTBOUND [${analyticsEventLabel}] from ${window.location
          .pathname}`}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {children}
      </ReactGA.OutboundLink>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {children}
    </a>
  );
};

OutboundLink.propTypes = {
  href: PropTypes.string.isRequired,
  analyticsEventLabel: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired, // eslint-disable-line
  className: PropTypes.string,
  style: PropTypes.object, //eslint-disable-line
};

OutboundLink.defaultProps = {
  className: '',
};

export default OutboundLink;
