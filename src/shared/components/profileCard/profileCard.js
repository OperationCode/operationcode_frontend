import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './profileCard.css';

// Stateless component that wraps a link around an icon / img and title
// Image or Icon are passed as a child to allow more flexibility
// Props = url, title, and at least one child
const ProfileCard = props => (
  <Link to={props.url} className={styles.profileCard}>
    {props.children}
    <span className={styles.profileCard__title}>{props.title}</span>
  </Link>
);

ProfileCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ProfileCard;
