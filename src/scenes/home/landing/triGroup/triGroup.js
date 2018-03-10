import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from 'shared/components/linkButton/linkButton';
import blueMedalLogo from 'images/logos/small-blue-medal.png';
import redMedalLogo from 'images/logos/small-red-medal.png';
import styles from './triGroup.css';
import staticData from './triGroup.json';

const TriGroup = () => {
  const ClickableLogo = ({ color, isExternal, logo, text, url }) => (
    <div className={styles.clickableLogo}>
      <a href={url}>
        <img src={logo} alt="Colored Medal Logo" />
      </a>

      <LinkButton
        link={url}
        text={text}
        theme={color}
        isExternal={isExternal}
      />
    </div>
  );

  return (
    <div className={styles.triGroupContainer}>
      <ClickableLogo logo={redMedalLogo} {...staticData.join} />

      <div className={styles.videos}>
        <iframe
          className={styles.triGroupVideo}
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
};

export default TriGroup;
