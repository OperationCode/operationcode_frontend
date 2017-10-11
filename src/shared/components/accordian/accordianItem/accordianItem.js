import React from 'react';
import styles from './accordianItem.css';

const AccordianItem = () => (
  <dt className={styles.accordianItem}>
    <a className={styles.accordianItemHeading} aria-expanded="false" aria-controls="accordion1">
      First Accordion heading
    </a>
  </dt>
);

export default AccordianItem;
