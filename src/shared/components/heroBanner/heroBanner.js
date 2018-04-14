import React from 'react';
import PropTypes from 'prop-types';
import styles from './heroBanner.css';

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

HeroBanner.propTypes = {
  imageSrc: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

HeroBanner.defaultProps = {
  subtitle: ''
};

export default HeroBanner;
