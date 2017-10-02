import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './timelineEvent.css';

class TimelineEvent extends Component {
  titleCase = title => title.toLowerCase().replace(/(^[a-z]| [a-z])/g, match => match.toUpperCase());

  render() {
    return (
      <div className={styles.eventContainer}>
        <h4 className={styles.eventTitle}>
          {this.titleCase(this.props.title)}
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
