import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import image from 'images/gala-banner.png';
import styles from './galaBanner.css';

class GalaBanner extends Component {
  render() {
    return (
      <Reveal effect="animated fadeInLeft">
        <div className={styles.galaBannerWrapper}>
          <Link to={'/gala'}>
            <img className={styles.galaImage} src={image} alt="gala banner" />
          </Link>
        </div>
      </Reveal>
    );
  }
}

export default GalaBanner;
