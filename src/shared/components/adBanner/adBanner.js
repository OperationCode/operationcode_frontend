import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'shared/components/outboundLink/outboundLink';
import styles from './adBanner.css';

const AdBanner = ({ link, imageSource, altText, adBannerText, clickText, theme }) => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <OutboundLink
        href={link}
        analyticsEventLabel={`[AdBanner Hit] to ${link} from /`}
        className={styles.adBannerLink}
      >
        <div className={styles.adBanner}>
          <div className={styles.adBannerImage}>
            <img src={imageSource} alt={altText} />
          </div>
          <h4 className={styles.adBannerText}>
            {adBannerText}
            <br />
            {clickText}
          </h4>
        </div>
      </OutboundLink>
    );
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.adBannerLink}>
      <div className={`${styles.adBanner} ${styles[theme]}`}>
        <div className={styles.adBannerImage}>
          <img src={imageSource} alt={altText} />
        </div>
        <h4 className={styles.adBannerText}>
          {adBannerText}
          <br />
          {clickText}
        </h4>
      </div>
    </a>
  );
};

AdBanner.propTypes = {
  link: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  adBannerText: PropTypes.string.isRequired,
  clickText: PropTypes.string.isRequired,
  theme: PropTypes.string
};

AdBanner.defaultProps = {
  theme: null
};

export default AdBanner;
