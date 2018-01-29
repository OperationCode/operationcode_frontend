import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'images/logos/small-white-logo.png';
import styles from './logo.css';

const Logo = () => (
  <div className={styles.logo} >
    <Link to="/"><img src={logo} alt="" /></Link>
  </div>
);

export default Logo;
