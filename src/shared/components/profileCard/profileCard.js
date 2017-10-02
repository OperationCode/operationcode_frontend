import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './profileCard.css';

const ProfileCard = props => (
  <Link to={props.url} className={styles.profileCard}>
    <div className={styles.profileCard__icon}>{props.children}</div>
    <span className={styles.profileCard__title}>{props.title}</span>
  </Link>
);

ProfileCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ProfileCard;
