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
        <span className={styles.role}>
          {this.props.role}
        </span>
      </div>
    );
  }
}

StaffCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default StaffCard;
