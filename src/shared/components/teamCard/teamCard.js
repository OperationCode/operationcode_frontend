import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './teamCard.css';

class TeamCard extends Component {
  render() {
    return (
      <div className={styles.teamCard}>
        <span className={styles.name}>
          {this.props.name}
        </span>
        <hr />
        <span className={styles.role}>
          {this.props.role}
        </span>
      </div>
    );
  }
}

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

export default TeamCard;
