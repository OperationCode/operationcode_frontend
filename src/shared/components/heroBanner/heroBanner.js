import React from 'react';
import PropTypes from 'prop-types';
import styles from './heroBanner.css';

const propTypes = {
  imageSrc: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  isLeftFocus: PropTypes.bool,
  isCenterFocus: PropTypes.bool,
  isRightFocus: PropTypes.bool
};

const defaultProps = {
  subtitle: '',
  isLeftFocus: false,
  isCenterFocus: true,
  isRightFocus: false
};

const HeroBanner = ({ imageSrc, title, subtitle, ...props }) => {
  const bannerStyles = {
    color: '#fff00',
    backgroundImage: `url(${imageSrc})`,
    width: '100vw',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative'
  };

  return (
    <div style={bannerStyles} className={props.className}>
      <div className={styles.headerStyles}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
};

HeroBanner.propTypes = propTypes;
HeroBanner.defaultProps = defaultProps;

export default HeroBanner;
