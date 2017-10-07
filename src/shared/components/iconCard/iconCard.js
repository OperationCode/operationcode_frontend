/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import ReactPropTypeLocationNames from 'react/lib/ReactPropTypeLocationNames';
// fails :(  (as does attempting to use 'react-icons/lib/fa/index')
// import AllIcons from 'react-icons/fa/index';
// we should be more performant if we limit the available icons to a predefined list anyway
import { FaGroup, FaRoad, FaFlagCheckered, FaSuitcase, FaQuestion,
  FaEnvelope, FaSlack, FaHome,
  FaGraduationCap, FaLifeBouy, FaBriefcase, FaUser, FaCommentsO } from 'react-icons/lib/fa';
import styles from './iconCard.css';

const IconCard = (props) => {
  const {
    title,
    subText,
    url,
    fontAwesomeIcon,
    iconSize,
    iconAboveHeading,
    usingHtml
  } = props;

  // if we can get "import AllIcons" working above, it should be possible to do this instead:
  // const Icon = AllIcons[fontAwesomeIcon];

  let Icon;
  switch (fontAwesomeIcon) {
    case 'FaGroup':
      Icon = FaGroup;
      break;
    case 'FaRoad':
      Icon = FaRoad;
      break;
    case 'FaFlagCheckered':
      Icon = FaFlagCheckered;
      break;
    case 'FaSuitcase':
      Icon = FaSuitcase;
      break;
    case 'FaEnvelope':
      Icon = FaEnvelope;
      break;
    case 'FaSlack':
      Icon = FaSlack;
      break;
    case 'FaHome':
      Icon = FaHome;
      break;
    case 'FaGraduationCap':
      Icon = FaGraduationCap;
      break;
    case 'FaLifeBouy':
      Icon = FaLifeBouy;
      break;
    case 'FaBriefcase':
      Icon = FaBriefcase;
      break;
    case 'FaUser':
      Icon = FaUser;
      break;
    case 'FaCommentsO':
      Icon = FaCommentsO;
      break;
    default:
      Icon = FaQuestion;
      break;
  }

  let iconBefore = null;
  let iconAfter = null;
  let subTextNode = null;
  const titleNode = <h5 className={styles.iconCard__title}>{title}</h5>;

  if (iconAboveHeading) {
    iconBefore = <Icon size={iconSize} />;
  } else {
    iconAfter = <Icon size={iconSize} />;
  }

  function createMarkup() {
    return { __html: subText };
  }

  if (usingHtml) {
    subTextNode = <span className={styles.iconCard__subtext} dangerouslySetInnerHTML={createMarkup()} />;
  } else {
    subTextNode = <span className={styles.iconCard__subtext}>{subText}</span>;
  }

  if (url) {
    if (subText) {
      return (
        <a href={url} className={[styles.iconCard, styles.iconCardWithSubText].join(' ')} target="_blank" rel="noopener noreferrer">
          {iconBefore}
          {titleNode}
          {iconAfter}
          {subTextNode}
        </a>
      );
    }
    return (
      <a href={url} className={styles.iconCard} target="_blank" rel="noopener noreferrer">
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
    const maxLen = 150;
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
        return new Error(
          (`Required ${locationName} ${propName} was not specified in ${componentName}.`)
        );
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
  iconSize: PropTypes.number,
  iconAboveHeading: PropTypes.bool,
  usingHtml: PropTypes.bool
};

IconCard.defaultProps = {
  subText: undefined,
  url: undefined,
  iconSize: 100,
  iconAboveHeading: false,
  usingHtml: false
};

export default IconCard;
