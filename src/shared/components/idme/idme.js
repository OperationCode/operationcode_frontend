import React, { Component } from 'react';
import config from 'config/environment';
import idmeImage from 'images/IdmeTroop.png';
import styles from './idme.css';

class Idme extends Component {
  componentWillMount() {

  }
  idMe = () => {
    window.open(`${config.idmeOAuthUrl}?client_id=${config.idmeClientId}&redirect_uri=${config.host}/profile/verify&response_type=token&scope=military&display=popup', '', 'scrollbars=yes,menubar=no,status=no,location=no,toolbar=no,width=750,height=780,top=200,left=200`);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <span className={styles.auth}>If you are interested in scholarships and / or hardware loans, verify your veteran status with Id.Me below.</span>
        <span className={styles.authbtn} role="link" onClick={this.idMe} tabIndex={0} >
          <img className={styles.authImage} src={idmeImage} alt="Verify your status with Id.Me" />
        </span>
      </div>
    );
  }
}

export default Idme;
