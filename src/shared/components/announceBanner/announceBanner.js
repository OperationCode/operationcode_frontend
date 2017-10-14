import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './announceBanner.css';

const AnnounceBanner = ({
  link,
  isExternal,
  imageSource,
  fallbackImage450pxWideSource,
  altText
}) => {
  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageSource} className={styles.announceBannerImage} alt={altText} />
        <img
          src={fallbackImage450pxWideSource}
          className={styles.announceBannerImageFallback}
          alt={altText}
        />
      </a>
    );
  }

  return (
    <Link to={link}>
      <img src={imageSource} className={styles.announceBannerImage} alt={altText} />
      <img
        src={fallbackImage450pxWideSource}
        className={styles.announceBannerImageFallback}
        alt={altText}
      />
    </Link>
  );
};

AnnounceBanner.propTypes = {
  link: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  imageSource: PropTypes.string.isRequired,
  fallbackImage450pxWideSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
};

AnnounceBanner.defaultProps = {
  isExternal: false
};

export default AnnounceBanner;
