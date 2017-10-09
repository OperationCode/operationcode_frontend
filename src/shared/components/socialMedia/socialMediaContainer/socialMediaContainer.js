import React from 'react';
import PropTypes from 'prop-types';
import styles from './socialMediaContainer.css';

const SocialMediaContainer = ({ children }) => (
  <div className={styles.socialMediaContainer}>
    {children}
  </div>
);

SocialMediaContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default SocialMediaContainer;
