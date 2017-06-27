import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './staffCard.css';

class StaffCard extends Component {
  render() {
    return (
      <div className={styles.staffCard}>
        <img className={styles.img} src={this.props.src} alt={this.props.alt} />
        <span className={styles.name}>
          {this.props.name}
        </span>
        <hr className={styles.hr} />
        <span className={styles.item}>
          <span className={styles.upper}>Role: </span> {this.props.role}
        </span>
        <span className={styles.item}>
          <span className={styles.upper}>Twitter: </span> {this.props.twitter}
        </span>
        <span className={styles.item}>
          <span className={styles.upper}>Email: </span> {this.props.email}
        </span>
      </div>
    );
  }
}

StaffCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default StaffCard;
