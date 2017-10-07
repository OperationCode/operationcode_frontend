import React from 'react';
import PropTypes from 'prop-types';
import AccordianItem from './accordianItem/accordianItem';
import styles from './accordian.css';

const Accordian = ({ children }) => (
  <div className={styles.accordian}>
    <dl>
      {children}
    </dl>
  </div>
);

Accordian.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(AccordianItem)),
    PropTypes.instanceOf(AccordianItem)
  ]).isRequired,
};

export default Accordian;
