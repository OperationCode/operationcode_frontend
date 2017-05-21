import React from 'react';
import PropTypes from 'prop-types';
import styles from './drawer.css';

const Drawer = (props) => {
  const { isVisible, children } = props;
  let className = styles.hidden;

  if (isVisible) {
    className = styles.visible;
  }

  return (
    <div className={className}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

Drawer.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

Drawer.defaultProps = {
  isVisible: false,
};

export default Drawer;
