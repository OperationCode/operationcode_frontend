import React from 'react';
import PropTypes from 'prop-types';
import styles from './drawer.css';

const Drawer = (props) => {
  const { isVisible } = props;
  let className = styles.hidden;

  if (isVisible) {
    className = styles.visible;
  }

  return (
    <div className={className}>
      <div className={styles.content} />
    </div>
  );
};

Drawer.propTypes = {
  isVisible: PropTypes.bool
};

Drawer.defaultProps = {
  isVisible: false
};

export default Drawer;
