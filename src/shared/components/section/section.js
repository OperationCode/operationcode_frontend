import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './section.css';
import Heading from '../heading/heading';

const Section = (props) => {
  const {
    id,
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
        {title && <Heading text={title} id={id} headingLines={headingLines} theme={headingTheme} />}
        {children}
      </div>
    </div>
  );
};

Section.propTypes = {
  id: PropTypes.string,
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
  id: null,
  title: null,
  className: null,
  theme: 'gray',
  headingLines: true,
  headingTheme: 'dark',
  margin: false
};

export default Section;
