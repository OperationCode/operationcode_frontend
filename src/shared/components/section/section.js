import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './section.css';
import Heading from '../heading/heading';

const Section = (props) => {
  const {
    title,
    children,
    className,
    theme,
    headingLines,
    headingTheme,
    margin,
    ...otherProps
  } = props;

  const classes = classNames({
    [`${styles.section}`]: true,
    [`${className}`]: className,
    [`${styles.margin}`]: margin
  });

  const containerClasses = classNames({
    [`${styles[theme]}`]: true,
    [`${styles.sectionContainer}`]: true,
  });

  return (
    <div className={containerClasses} >
      <div className={classes} {...otherProps}>
        {title && <Heading text={title} headingLines={headingLines} theme={headingTheme} />}
        {children}
      </div>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string,
  theme: PropTypes.string,
  headingLines: PropTypes.bool,
  headingTheme: PropTypes.string,
  margin: PropTypes.bool
};

Section.defaultProps = {
  className: null,
  theme: 'gray',
  headingLines: true,
  headingTheme: 'dark',
  title: null,
  margin: false
};

export default Section;
