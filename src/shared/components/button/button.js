import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    handleClick,
    link,
    target,
    ...otherProps
  } = props;

  return (
    <button onSubmit={handleClick} {target} {...otherProps} />
  );
};

Button.propTypes = {
  handleClick: PropTypes.func,
  link: PropTypes.string,
  target: PropTypes.string
};

Button.defaultProps = {
  handleClick: null,
  link: null,
  target: null
};

export default Button;
