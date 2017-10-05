import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './accordianItem.css';

const AccordianItem = props => {
  return (
    <dt className={styles.accordianItem}>
      <a className={styles.accordianItemHeading} aria-expanded="false" aria-controls="accordion1">
        First Accordion heading
      </a>
    </dt>
  );
};

AccordianItem.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

export default AccordianItem;
