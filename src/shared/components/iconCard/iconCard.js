/* eslint-disable react/no-danger */
import React, { ReactPropTypeLocationNames } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as faIconsBrands from '@fortawesome/fontawesome-free-brands';
import * as faIconsRegular from '@fortawesome/fontawesome-free-regular';
import * as faIconsSolid from '@fortawesome/fontawesome-free-solid';
import styles from './iconCard.css';

const faModules = {
  brand: faIconsBrands,
  regular: faIconsRegular,
  solid: faIconsSolid
};

const IconCard = ({
  fontAwesomeIcon,
  iconType,
  iconSize,
  iconAboveHeading,
  subText,
  title,
  url,
  usingHtml
}) => {
  const faModule = faModules[iconType];

  const icon = <FontAwesomeIcon icon={faModule[fontAwesomeIcon]} size={iconSize} />;
  let iconBefore = null;
  let iconAfter = null;
  let subTextNode = null;
  const titleNode = <h5 className={styles.iconCard__title}>{title}</h5>;

  if (iconAboveHeading) {
    iconBefore = icon;
  } else {
    iconAfter = icon;
  }

  function createMarkup() {
    return { __html: subText };
  }

  if (usingHtml) {
    subTextNode = (
      <span
        className={styles.iconCard__subtext}
        dangerouslySetInnerHTML={createMarkup()}
      />
    );
  } else {
    subTextNode = <span className={styles.iconCard__subtext}>{subText}</span>;
  }

  if (url) {
    if (subText) {
      return (
        <a
          href={url}
          className={[styles.iconCard, styles.iconCardWithSubText].join(' ')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {iconBefore}
          {titleNode}
          {iconAfter}
          {subTextNode}
        </a>
      );
    }
    return (
      <a
        href={url}
        className={styles.iconCard}
        target="_blank"
        rel="noopener noreferrer"
      >
        {iconBefore}
        {titleNode}
        {iconAfter}
      </a>
    );
  }
  if (subText) {
    return (
      <div className={[styles.iconCard, styles.iconCardWithSubText].join(' ')}>
        {iconBefore}
        {titleNode}
        {iconAfter}
        {subTextNode}
      </div>
    );
  }
  return (
    <div className={styles.iconCard}>
      {iconBefore}
      {titleNode}
      {iconAfter}
    </div>
  );
};

function subTextLengthChecker(props, propName) {
  if (props[propName]) {
    const str = props[propName];
    const maxLen = 180;
    if (typeof str !== 'string') {
      return Error(`${propName} must be a string`);
    }
    if (str.length > maxLen) {
      return Error(`${propName} length must be less than ${maxLen}`);
    }
  }
  // assume all ok
  return null;
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location) {
    if (props[propName] === null) {
      const locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error(`Required ${locationName} ${propName} was not specified in ${componentName}.`);
      }
      return null;
    }
    return validate(props, propName, componentName, location);
  }

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

const subTextLength = createChainableTypeChecker(subTextLengthChecker);

IconCard.propTypes = {
  title: PropTypes.string.isRequired,
  subText: subTextLength,
  fontAwesomeIcon: PropTypes.string.isRequired,
  url: PropTypes.string,
  iconType: PropTypes.oneOf(Object.keys(faModules)),
  iconSize: PropTypes.string,
  iconAboveHeading: PropTypes.bool,
  usingHtml: PropTypes.bool,
};

IconCard.defaultProps = {
  subText: undefined,
  url: undefined,
  iconType: 'solid',
  iconSize: '6x',
  iconAboveHeading: false,
  usingHtml: false,
};

export default IconCard;
