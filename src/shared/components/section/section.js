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
    ...otherProps
  } = props;

  const classes = classNames({
    [`${styles.section}`]: true,
    [`${styles[theme]}`]: true,
    [`${className}`]: className
  });
  return (
    <div className={classes} {...otherProps}>
      {title && <Heading text={title} headingLines={headingLines} theme={headingTheme} />}
      {children}
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
  headingTheme: PropTypes.string
};

Section.defaultProps = {
  className: null,
  theme: 'gray',
  headingLines: true,
  headingTheme: 'dark',
  title: null
};

export default Section;
