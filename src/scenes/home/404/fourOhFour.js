import React, { Component } from 'react';
import Gif from './404.gif';
import styles from './fourOhFour.css';

export default class FourOhFour extends Component {

  render() {
    return (
      <div className={styles.pageContainer}>
        <img src={Gif} alt="Gif of a fake tank falling over" />
        <h1 className={styles.title}>404</h1>
      </div>
    );
  }
}

