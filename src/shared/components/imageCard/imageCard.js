import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'shared/components/linkButton/linkButton';
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
            {this.props.link && <LinkButton text={this.props.buttonText} link={this.props.link} />}
          </div>
        </div>
      </div>
    );
  }
}

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  link: PropTypes.string
};

ImageCard.defaultProps = {
  link: null,
  buttonText: null
}

// TODO: Uncomment buttons as routes are implemented
// NOTE: ImageCard dynamically handles button-links as optionally, so no further work required

export default ImageCard;
