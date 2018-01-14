import React from 'react';
import PropTypes from 'prop-types';
import styles from './adBanner.css';

const AdBanner = ({
  link,
  imageSource,
  altText,
  adBannerText
}) =>
  (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={styles.adBanner}>
        <div className={styles.adBannerImage}>
          <img src={imageSource} alt={altText} />
        </div>
        <h3 className={styles.adBannerText}> {adBannerText} </h3>
      </div>
    </a>
  );


AdBanner.propTypes = {
  link: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  adBannerText: PropTypes.string.isRequired
};

export default AdBanner;
