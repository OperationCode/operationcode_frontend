import React from 'react';
import PropTypes from 'prop-types';

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};

export default function CardFooter({ children, className }) {
  return <footer className={className}>{children}</footer>;
}
