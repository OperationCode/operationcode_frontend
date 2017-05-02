import React from 'react';
import PropTypes from 'prop-types';
import styles from './socialMediaItem.css';

const SocialMediaItem = (props) => {
  const {
    smImage,
    smText
  } = props;
  return (
    <div className={styles.socialMediaItem}>
      <img src={smImage} alt={smText} />
    </div>
  );
};

SocialMediaItem.propTypes = {
  smImage: PropTypes.string.isRequired,
  smText: PropTypes.string.isRequired
};

export default SocialMediaItem;
