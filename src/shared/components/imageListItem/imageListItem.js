import React from 'react';
import PropTypes from 'prop-types';
import styles from './imageListItem.css';

const ImageListItem = props => (
  <div className={styles.imageListItem}>
    <img className={styles.cardImage} src={props.image} alt={props.title} />

    <div className={styles.cardText}>
      <h3 className={styles.cardTitle}>{props.title}</h3>
      <p>{props.cardText}</p>
    </div>
  </div>
);

ImageListItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired
};

export default ImageListItem;
