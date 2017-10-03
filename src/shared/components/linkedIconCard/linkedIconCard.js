import React from 'react';
import PropTypes from 'prop-types';
import styles from './linkedIconCard.css';

// Stateless component that wraps a link around an icon / img and title
// Image or Icon are passed as a child to allow more flexibility
// Props = url, title, and at least one child
const LinkedIconCard = props => (
  <a href={props.url} className={styles.linkedIconCard}>
    {props.children}
    <span className={styles.linkedIconCard__title}>{props.title}</span>
  </a>
);

LinkedIconCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default LinkedIconCard;
