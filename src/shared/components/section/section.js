import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.css';
import Heading from '../heading/heading';

const Section = (props) => {
  const {
    title,
    children,
    className,
    theme,
    ...otherProps
  } = props;
  return (
    <div className={`${styles.section} ${styles[theme]} ${className}`} {...otherProps}>
      <Heading text={title} />
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  theme: PropTypes.string
};

Section.defaultProps = {
  className: null,
  theme: 'gray'
};

export default Section;
