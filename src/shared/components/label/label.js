import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
  const {
    htmlFor,
    ...otherProps
  } = props;
  return (
    <label htmlFor={htmlFor} {...otherProps} />
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

export default Label;
