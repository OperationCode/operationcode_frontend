import React from 'react';
import PropTypes from 'prop-types';
import styles from './timelineEvent.css';

const TimelineEvent = props => (
  <div className={styles.eventContainer}>
    <h4 className={styles.eventTitle}>
      {props.title}
    </h4>

    <div className={styles.eventContent}>
      <p>
        {props.content}
      </p>
    </div>
  </div>
);

TimelineEvent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TimelineEvent;
