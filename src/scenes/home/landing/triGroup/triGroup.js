import React from 'react';
import smallRedLogo from 'images/logos/large-stacked-logo-blue.png';
import smallBlueLogo from 'images/logos/large-stacked-logo-red.png';
import imageStyles from '../../branding/logos/logos.css';
import styles from './triGroup.css';

function TriGroup() {
  return (
    <div className="triGroupContainer">
      <a href="/join">
        <div className={imageStyles.smallLogos}>
          <img src={smallRedLogo} alt="Stacked Small Slate Logo" />
          <p>Join Us!</p>
        </div>
      </a>
      <div className={styles.videos}>
        <iframe
          title="Watch Will battle react for hours"
          src="https://www.youtube.com/embed/xN7yMoe38xc?modestbranding=1&start=133&showinfo=0"
          frameBorder="0"
          allowFullScreen
          width="600"
          height="340"
        />
      </div>
      <a href="https://opencollective.com/operationcode#support">
        <div className={imageStyles.smallLogos}>
          <img src={smallBlueLogo} alt="Stacked Small Slate Logo" />
          <p>Donate Now!</p>
        </div>
      </a>
    </div>
  );
}

export default TriGroup;
