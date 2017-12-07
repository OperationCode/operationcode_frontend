import React from 'react';
import PropTypes from 'prop-types';
import styles from './boardCard.css';

const BoardCard = ({ name, role, src, description }) => (
  <div className={styles.boardCard}>
    <img src={src} alt={`Headshot of ${name}`} />
    <h6 className={styles.noTextWrap}>{name}</h6>
    <i>{role}</i>
    <hr className={styles.hr} />
    <span className={styles.descriptionText}>
      {description && <text>{description}</text>}
    </span>
  </div>
);

BoardCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string
};

BoardCard.defaultProps = {
  description: null
};

export default BoardCard;
