import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './timelineEvent.css';

class TimelineEvent extends Component {
  render() {
    return (
      <div className={styles.eventContainer}>
        <h4 className={styles.eventTitle}>
          {this.props.title}
        </h4>

        <div className={styles.eventContent}>
          <p>
            {this.props.content}
          </p>
        </div>
      </div>
    );
  }
}

TimelineEvent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TimelineEvent;
