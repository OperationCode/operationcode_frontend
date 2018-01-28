import React from 'react';
import PropTypes from 'prop-types';
import styles from './teamCard.css';

const TeamCard = ({ name, role, email, slack }) => (
  <div className={styles.teamCard}>
    <span className={styles.name}>
      {name}
    </span>
    <hr />
    <span className={styles.role}>
      {role}
    </span>
    <span className={styles.email}>
      {email}
    </span>
    <span className={styles.slack}>
      {slack}
    </span>
  </div>
);

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  slack: PropTypes.string.isRequired
};

export default TeamCard;
