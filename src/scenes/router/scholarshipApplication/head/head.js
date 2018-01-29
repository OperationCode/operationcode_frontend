import React from 'react';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';
import styles from './head.css';

const Head = ({ scholarship }) => (
  <div>
    <h3 className={styles.scholarshipAppHeader}> {scholarship.name} </h3>
    <p> {scholarship.description} </p>
    <p> {scholarship.location} </p>
    <p>Apply by {dateFormat(scholarship.close_time, 'fullDate')} </p>
  </div>
);

Head.propTypes = {
  scholarship: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    open_time: PropTypes.string,
    close_time: PropTypes.string,
    terms: PropTypes.string
  }).isRequired
};

export default Head;
