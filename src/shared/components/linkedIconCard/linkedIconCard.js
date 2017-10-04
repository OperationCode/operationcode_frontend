import React from 'react';
import PropTypes from 'prop-types';
import styles from './linkedIconCard.css';

const LinkedIconCard = props => (
  <a href={props.url} className={styles.linkedIconCard}>
    <div className={styles.linkedIconCard__icon}>{props.children}</div>
    <span className={styles.linkedIconCard__title}>{props.title}</span>
  </a>
);

LinkedIconCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default LinkedIconCard;
