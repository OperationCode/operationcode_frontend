import React from 'react';
import PropTypes from 'prop-types';
import styles from './teamCard.css';

const TeamCard = ({ name, role, slack, email, isBoard, description, src }) => (
  <div className={styles.teamCard}>
    {src && (<img src={src} alt={`Headshot of ${name}`} />)}
    <h6 className={styles.name}>{name}</h6>
    <i className={styles.role}>{role}</i>
    <hr className={styles.hr} />
    {!isBoard && (
      <span className={styles.detail}>
        <span className={styles.slack}>
          <text>{slack}</text>
        </span>
        <span className={styles.email}>
          <text>{email}</text>
        </span>
      </span>
    )}
    {isBoard && description && (
      <span className={styles.descriptionText}>
        <text>{description}</text>
      </span>
    )}
  </div>
);

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  slack: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isBoard: PropTypes.bool,
  src: PropTypes.string,
  description: PropTypes.string,
};

TeamCard.defaultProps = {
  description: null,
  isBoard: true,
  src: ''
};

export default TeamCard;
