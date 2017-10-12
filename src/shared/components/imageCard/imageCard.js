import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'shared/components/linkButton/linkButton';
import styles from './imageCard.css';

const ImageCard = ({
  buttonText,
  cardText,
  image,
  link,
  title
}) => (
  <div className={styles.imageCard}>
    <img className={styles.cardImage} src={image} alt={title} />

    <div className={styles.cardText}>
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
};

ImageCard.defaultProps = {
  link: null,
  buttonText: null,
};

export default ImageCard;
