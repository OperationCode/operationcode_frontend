import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './boardCard.css';

class BoardCard extends Component {
  render() {
    return (
      <div className={styles.boardCard}>
        <img className={styles.img} src={this.props.src} alt={this.props.alt} />
        <span className={styles.name}>
          {this.props.name}
        </span>
        <hr className={styles.hr} />
        <span className={styles.item}>
          <span className={styles.upper}>Role: </span> {this.props.role}
        </span>
      </div>
    );
  }
}

BoardCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default BoardCard;
