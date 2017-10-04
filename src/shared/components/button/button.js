import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    handleClick,
    ...otherProps
  } = props;

  return (
    <button onSubmit={handleClick} {...otherProps} />
  );
};

Button.propTypes = {
  handleClick: PropTypes.func
};

Button.defaultProps = {
  handleClick: null
};

export default Button;
