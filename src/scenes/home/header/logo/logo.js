import React, { Component } from 'react';
import logo from 'images/logos/small-white-logo.png';
import styles from './logo.css';

class Logo extends Component {
  render() {
    return (
      <div className={styles.logo} >
        <a href="/"><img src={ logo } alt="" /></a>
      </div>
    );
  }
}

export default Logo;