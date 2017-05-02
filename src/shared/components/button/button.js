import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    handleClick,
    link,
    ...otherProps
  } = props;

  return (
    <button onSubmit={handleClick} {...otherProps} />
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  link: PropTypes.string
};

Button.defaultProps = {
  handleClick: null,
  link: null
};

export default Button;
