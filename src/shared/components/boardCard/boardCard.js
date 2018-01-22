import React from 'react';
import PropTypes from 'prop-types';
import styles from './boardCard.css';

const BoardCard = ({ name, role, src, description }) => (
  <div className={styles.boardCard}>
    <img src={src} alt={`Headshot of ${name}`} />
    <h6 className={styles.name}>{name}</h6>
    <i className={styles.role}>{role}</i>
    <hr className={styles.hr} />
    {description && (
      <span className={styles.descriptionText}>
        <text>{description}</text>
      </span>
    )}
  </div>
);

BoardCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string,
};

BoardCard.defaultProps = {
  description: null,
};

export default BoardCard;
