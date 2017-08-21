import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from 'images/gala-banner.png';
import styles from './galaBanner.css';

class GalaBanner extends Component {
  render() {
    return (
      <div className={styles.galaBannerWrapper}>
        <Link to={'/gala'}>
          <img className={styles.galaImage} src={image} alt="gala banner" />
        </Link>
      </div>
    );
  }
}

export default GalaBanner;
