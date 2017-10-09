import React from 'react';
import PropTypes from 'prop-types';
import styles from './staffCard.css';

const StaffCard = ({
  src, alt, name, role, twitter, email
}) => (
  <div className={styles.staffCard}>
    <img className={styles.img} src={src} alt={alt} />
    <span className={styles.name}>
      {name}
    </span>
    <hr className={styles.hr} />
    <span className={styles.item}>
      <span className={styles.upper}>Role: </span> {role}
    </span>
    <span className={styles.item}>
      <span className={styles.upper}>Twitter: </span> {twitter}
    </span>
    <span className={styles.item}>
      <span className={styles.upper}>Email: </span> {email}
    </span>
  </div>
);

StaffCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default StaffCard;
