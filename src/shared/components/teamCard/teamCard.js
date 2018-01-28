import React from 'react';
import PropTypes from 'prop-types';
import styles from './teamCard.css';

const TeamCard = ({ name, role, email, slack }) => (
  <div className={styles.teamCard}>
    <span className={styles.name}>
      {name}
    </span>
    <hr />
    <ul>
      <li className={styles.role}>{role}</li>
      <li className={styles.slack}>{slack}</li>
      <li className={styles.email}>{email}</li>
    </ul>
  </div>
);

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  slack: PropTypes.string.isRequired
};

export default TeamCard;
