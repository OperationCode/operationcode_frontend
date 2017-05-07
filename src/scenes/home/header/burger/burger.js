import React, { Component } from 'react';
import burger from 'images/icons/menu.svg';
import styles from './burger.css';

class Burger extends Component {
  render() {
    return (
      <div className={styles.burger} >
        <a className="burger" href="/"><img src={burger} alt="" /></a>
      </div>
    );
  }
}


export default Burger;
