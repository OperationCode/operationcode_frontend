import React from 'react';
import PropTypes from 'prop-types';
import styles from './teamCard.css';

const TeamCard = ({ name, role }) => (
  <div className={styles.teamCard}>
    <span className={styles.name}>
      {name}
    </span>
    <hr />
    <span className={styles.role}>
      {role}
    </span>
  </div>
);

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default TeamCard;
