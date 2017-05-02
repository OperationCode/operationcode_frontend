import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.css';
import Heading from '../heading/heading';

const Section = (props) => {
  const {
    title,
    children,
    ...otherProps
  } = props;
  return (
    <div className={styles.section} {...otherProps}>
      <Heading text={title} />
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Section;
