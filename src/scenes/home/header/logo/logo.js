import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'images/logos/small-white-logo.png';
import styles from './logo.css';

class Logo extends Component {
  render() {
    return (
      <div className={styles.logo} >
        <Link to="/"><img src={logo} alt="" /></Link><span className={styles.trademark}>™</span>
      </div>
    );
  }
}

export default Logo;
