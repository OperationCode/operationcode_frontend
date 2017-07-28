import React from 'react';
import largeBlueLogo from '../../../../images/logos/large-blue-logo.png';
import smallWhiteLogoRedStar from '../../../../images/logos/small-white-logo-red-star.png';
import largeStackedLogoRed from '../../../../images/logos/large-stacked-logo-red.png';
import smallStackedLogo from '../../../../images/logos/small-stacked-logo.png';
import largeBlueMedal from '../../../../images/logos/large-blue-medal.png';
import smallRedMedal from '../../../../images/logos/small-red-medal.png';
import logos from '../../../../images/logos.zip';
import styles from './pressBranding.css';

function PressBranding() {
  return (
    <div className={styles.logos}>
      <div className={styles.imgBox}><img className={styles.wide} src={largeBlueLogo} alt="Large Blue Logo" /></div>
      <div className={styles.imgBox}><img className={styles.wide} src={smallWhiteLogoRedStar} alt="Small White Logo, Red Star" /></div>
      <div className={styles.imgBox}><img className={styles.wide} src={largeStackedLogoRed} alt="Large Stacked Logo, Red" /></div>
      <div className={styles.imgBox}><img className={styles.wide} src={smallStackedLogo} alt="Small Stacked Logo" /></div>
      <div className={styles.imgBox}><img className={styles.tall} src={largeBlueMedal} alt="Large Blue Medal" /></div>
      <div className={styles.imgBox}><img className={styles.tall} src={smallRedMedal} alt="Small Red Medal" /></div>
      <div>
        <p>For the full range of sizes and colors, please <a href={logos}>download all logos (241KB)</a>.</p>
        <p>The size ratio between the star and medallion changes depending on the size of reproduction, so please use the appropriate size: small when the logo is less than 1&quot; tall and large otherwise. Also, in most cases please refrain from using the red-accent logo: it is delivered for special uses only. Thank you!</p>
      </div>
    </div>
  );
}

export default PressBranding;
