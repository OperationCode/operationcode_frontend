import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './imageCard.css';

class ImageCard extends Component {
  render() {
    return (
      <div className={styles.imageCard} >
        <img className={styles.image} src={this.props.image} alt={this.props.title} />
        <div className={styles.cardContainer}>
          <div className={styles.cardText}>
            <h2>{this.props.title}:</h2>
            <p>{this.props.cardText}</p>
          </div>
        </div>
      </div>
    );
  }
}

// TODO - AFTER MVP:
// Add within cardText div under the paragraph tag once links are generated
// <LinkButton text={this.props.buttonText} link={this.props.link} />

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  // buttonText: PropTypes.string.isRequired,
  // link: PropTypes.string.isRequired
};

export default ImageCard;
