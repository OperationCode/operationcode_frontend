import React from 'react';
import PropTypes from 'prop-types';
import styles from './socialMediaItem.css';

const SocialMediaItem = (props) => {
  const {
    smImage,
    smText,
    link,
    target,
    rel
  } = props;

  return (
    <div className={styles.socialMediaItem}>
      <a href={link} target={target} rel={rel}><img src={smImage} alt={smText} /></a>
    </div>
  );
};

SocialMediaItem.propTypes = {
  smImage: PropTypes.string.isRequired,
  smText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  rel: PropTypes.string.isRequired
};

SocialMediaItem.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
};

export default SocialMediaItem;
