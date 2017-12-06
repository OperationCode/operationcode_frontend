import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './imageCard.css';

const ImageCard = ({
  buttonText,
  cardText,
  image,
  link,
  title,
  cardHeight,
  cardWidth,
  textWidth,
  imageHeight,
  imageWidth
}) => (
  <div className={styles.imageCard} style={{ height: cardHeight, width: cardWidth }}>
    <img className={styles.cardImage} src={image} alt={title} style={{ height: imageHeight, width: imageWidth }} />

    <div className={styles.cardText} style={{ width: textWidth }}>
      <h6>{title}</h6>
      <p>{cardText}</p>
      {link &&
      <LinkButton
        text={buttonText}
        link={link}
        isExternal
      />}
    </div>
  </div>
);

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  link: PropTypes.string,
  cardHeight: PropTypes.number,
  cardWidth: PropTypes.number,
  textWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number
};

ImageCard.defaultProps = {
  link: null,
  buttonText: null,
  cardHeight: 200,
  cardWidth: 600,
  textWidth: 250,
  imageHeight: 200,
  imageWidth: 300
};

export default ImageCard;
