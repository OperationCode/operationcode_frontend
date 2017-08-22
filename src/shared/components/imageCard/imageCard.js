import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './imageCard.css';

class ImageCard extends Component {
  render() {
    return (
      <div className={styles.imageCard}>
        <img className={styles.cardImage} src={this.props.image} alt={this.props.title} />

        <div className={styles.cardText}>
          <h6>{this.props.title}</h6>
          <p>{this.props.cardText}</p>
          {this.props.link && <LinkButton text={this.props.buttonText} link={this.props.link} target={this.props.target} rel={this.props.rel} />}
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
  link: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

ImageCard.defaultProps = {
  link: null,
  buttonText: null,
  target: '_blank',
  rel: 'noopener noreferrer'
};

export default ImageCard;
