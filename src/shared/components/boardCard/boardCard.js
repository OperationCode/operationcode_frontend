import React from 'react';
import PropTypes from 'prop-types';
import styles from './boardCard.css';

const BoardCard = ({
  alt,
  name,
  role,
  src,
  description
}) => (
  <div className={styles.boardCard}>
    <img className={styles.img} src={src} alt={alt} />
    <span className={styles.name}>
      {name}
    </span>
    <hr className={styles.hr} />
    <span className={styles.item}>
      <span className={styles.upper}>Role: </span> {role}
      {description && <p>{description}</p>}
    </span>
  </div>
);

BoardCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string
};

BoardCard.defaultProps = {
  description: null
};

export default BoardCard;
