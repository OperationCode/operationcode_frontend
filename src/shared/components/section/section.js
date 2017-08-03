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
  } = props;

  const classes = classNames({
    [`${styles.section}`]: true,
    [`${className}`]: className,
    [`${styles[theme]}`]: true
  });

  return (
    <div name={id} className={classes}>
      {title && <Heading text={title} id={id} headingLines={headingLines} theme={headingTheme} />}
      <div className={styles.content}>
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
  headingTheme: PropTypes.string
};

Section.defaultProps = {
  id: null,
  title: null,
  className: null,
  theme: 'gray',
  headingLines: true,
  headingTheme: 'dark'
};

export default Section;
