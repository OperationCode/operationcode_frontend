import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccordianItem from './accordianItem/accordianItem';
import styles from './accordian.css';

class Accordian extends Component {
  render() {
    return (
      <div className={styles.accordian}>
        <dl>
          {this.props.children}
        </dl>
      </div>
    );
  }
}

Accordian.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(AccordianItem)),
    PropTypes.instanceOf(AccordianItem)
  ]).isRequired,
};

export default Accordian;
