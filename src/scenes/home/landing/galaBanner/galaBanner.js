import React from 'react';
import { Link } from 'react-router-dom';
import styles from './galaBanner.css';

const GalaBanner = () => (
  <div className={styles.galaBannerWrapper}>
    <Link to={'/gala'}>
      <img className={styles.galaImage} alt="gala banner" />
    </Link>
  </div>
);

export default GalaBanner;
