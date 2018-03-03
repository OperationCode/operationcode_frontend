import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'shared/components/linkButton/linkButton';
import blueMedalLogo from 'images/logos/small-blue-medal.png';
import redMedalLogo from 'images/logos/small-red-medal.png';
import styles from './triGroup.css';
import staticData from './triGroup.json';

const wideStyle = {
  width: 'inherit',
};

const ClickableLogo = props => (
  <div className={styles.clickableLogo}>
    <a href={props.url}>
      <img src={props.logo} alt="Colored Medal Logo" />
    </a>

    <LinkButton
      link={props.url}
      text={props.text}
      theme={props.color}
      style={wideStyle}
      scrollLink
    />
  </div>
);

ClickableLogo.propTypes = {
  url: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const TriGroup = () => (
  <div className={styles.triGroupContainer}>
    <ClickableLogo logo={redMedalLogo} {...staticData.join} />

    <div className={styles.videos}>
      <iframe
        title={staticData.video.title}
        src={staticData.video.url}
        frameBorder="0"
        allowFullScreen
        width="800"
        height="440"
      />
    </div>

    <ClickableLogo logo={blueMedalLogo} {...staticData.donate} />
  </div>
);

export default TriGroup;
