import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './imageListItem.css';

class ImageListItem extends Component {
  render() {
    return (
      <div className={styles.imageCard}>
        <img className={styles.cardImage} src={this.props.image} alt={this.props.title} />

        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>{this.props.title}</h3>
          <p>{this.props.cardText}</p>
        </div>
      </div>
    );
  }
}

ImageListItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
};

export default ImageListItem;
