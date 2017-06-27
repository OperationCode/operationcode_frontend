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
        <span className={styles.role}>
          <strong>Role: </strong> {this.props.role}
        </span>
        <span className={styles.email}>
          <strong>Twitter: </strong> {this.props.twitter}
        </span>
        <span className={styles.twitter}>
          <strong>Email: </strong> {this.props.email}
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
