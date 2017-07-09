import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './valueCard.css';

class ValueCard extends Component {
  render() {
    return (
      <div className={styles.valueCard}>
        <h4>{this.props.name}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

ValueCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ValueCard;
