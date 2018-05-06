import React from 'react';
import PropTypes from 'prop-types';
import styles from './heroBanner.css';

const HeroBanner = ({ imageSrc, title, subtitle }) => {
  const bannerStyles = {
    backgroundImage: `url(${imageSrc})`
  };

  return (
    <div style={bannerStyles} className={styles.heroBanner}>
      <div className={styles.header}>
        <h1>{title}</h1>
        { subtitle &&
          <h4>{subtitle}</h4>
        }
      </div>
    </div>
  );
};

HeroBanner.propTypes = {
  imageSrc: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

HeroBanner.defaultProps = {
  subtitle: ''
};

export default HeroBanner;
