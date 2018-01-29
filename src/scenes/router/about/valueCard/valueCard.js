import React from 'react';
import PropTypes from 'prop-types';
import styles from './valueCard.css';

const ValueCard = ({ name, description }) => (
  <div className={styles.valueCard}>
    <h4>{name}</h4>
    <p>{description}</p>
  </div>
);

ValueCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ValueCard;
