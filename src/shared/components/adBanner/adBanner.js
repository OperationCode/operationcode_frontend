import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './adBanner.css';

const AdBanner = ({
  link,  
  imageSource,
  fallbackImage135pxWideSource,
  altText,
  bannerText
}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className={styles.adBanner}>
                <div className={styles.adBannerImage}>    
                    <img src={imageSource} alt={altText}/>    
                </div> 
                <h3 className={styles.adBannerText}> bannerText </h3>
            </div>
        </a>
    );
};

AdBanner.propTypes = {
  link: PropTypes.string.isRequired,  
  imageSource: PropTypes.string.isRequired,
  fallbackImage135pxWideSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  bannerText: PropTypes.string.isRequired 
};

export default AdBanner;
