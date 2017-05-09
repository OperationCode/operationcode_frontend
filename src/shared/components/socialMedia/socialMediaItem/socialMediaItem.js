import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './socialMediaItem.css';

const SocialMediaItem = (props) => {
  const {
    smImage,
    smText,
    link
  } = props;

  return (
    <div className={styles.socialMediaItem}>
      <Link to={link}><img src={smImage} alt={smText} /></Link>
    </div>
  );
};

SocialMediaItem.propTypes = {
  smImage: PropTypes.string.isRequired,
  smText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default SocialMediaItem;
