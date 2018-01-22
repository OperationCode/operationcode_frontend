import React, { Component } from 'react';
import config from 'config/environment';
import troopImage from 'images/Troop.png';
import styles from './idme.css';

class Idme extends Component {
  idMe = () => {
    window.open(`${config.idmeOAuthUrl}?client_id=${config.idmeClientId}&redirect_uri=${config.host}/profile/verify&response_type=token&scope=military&display=popup', '', 'scrollbars=yes,menubar=no,status=no,location=no,toolbar=no,width=750,height=780,top=200,left=200`);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.authbtn} role="link" onClick={this.idMe} tabIndex={0}>
          <img className={styles.authImage} src={troopImage} alt="Verify your status with Id.Me" />
        </span>
      </div>
    );
  }
}

export default Idme;
