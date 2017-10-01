import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './profileCard.css';

const ProfileCard = props => (
  <Link to={props.url} className={styles.profileCard}>
    {props.children}
    <h2>{props.title}</h2>
  </Link>
);

ProfileCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ProfileCard;
