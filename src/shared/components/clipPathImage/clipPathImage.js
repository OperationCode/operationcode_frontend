import React from 'react';
import PropTypes from 'prop-types';
import styles from './clipPathImage.css';

const ClipPathImage = (props) => {
  const {
    image,
    altText,
    title,
    theme,
    className,
    link,
    ...otherProps
  } = props;
  return (
    <a href={link} className={`${styles.cpContainer} ${styles.className}`} >
      <div className={`${styles.cpImage} ${styles[theme]}`} {...otherProps} >
        <img src={image} alt={altText} />
        <h4>{title}</h4>
      </div>
    </a>
  );
};

ClipPathImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  altText: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string
};

ClipPathImage.defaultProps = {
  altText: '',
  theme: 'blue',
  className: '',
  link: null
};

export default ClipPathImage;
