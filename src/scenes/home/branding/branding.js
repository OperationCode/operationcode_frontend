import React from 'react';
import Section from 'shared/components/section/section';
import BrandingLogo from './logo/logo';
import BrandingColor from './color/color';
import styles from './branding.css';

const Branding = () => (
  <div className={styles.brandingConatiner}>
    <BrandingLogo />
    <BrandingColor />
    <Section title="Fonts" theme="grey">
      <div className={styles.brandingFonts}>
        <h6>PF DIN DISPLAY PRO REGULAR</h6>
        <img src="./images/fonts/pf-din-font.png" alt="PF DIN REGULAR FONT" />
        <p><a href="https://ocbranding.squarespace.com/s/PFDin.zip">Download PF Din font files</a></p>
        <p>&nbsp;</p>
        <h6>NOTO SERIF REGULAR</h6>
        <img src="./images/fonts/noto-serif-font.png" alt="NOTO SERIF REGULAR FONT" />
        <p><a href="https://ocbranding.squarespace.com/s/NotoSerif.zip">Download Noto Serif font files</a></p>
      </div>
    </Section>
  </div>
);

export default Branding;
