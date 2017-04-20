import React, { Component } from 'react';
import styles from './nav.css';

class Nav extends Component {

  render() {
    return (
      <div className={`${this.props.className} ${styles.nav}`} >
        {this.props.children}
      </div>
    );
  }
}

export default Nav;
