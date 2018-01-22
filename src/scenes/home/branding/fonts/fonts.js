import React from 'react';
import Section from 'shared/components/section/section';
import PFDinSample from 'images/fonts/pf-din-font.png';
import NotoSerifSample from 'images/fonts/noto-serif-font.png';
import styles from './fonts.css';

const FontsSection = () => (
  <Section title="Fonts" theme="grey">
    <div className={styles.brandingFonts}>
      <h6>PF DIN DISPLAY PRO REGULAR</h6>
      <img src={PFDinSample} alt="PF DIN REGULAR FONT" />
      <p>
        <a href="https://ocbranding.squarespace.com/s/PFDin.zip">
          Download PF Din font files
        </a>
      </p>
      <p>&nbsp;</p>
      <h6>NOTO SERIF REGULAR</h6>
      <img src={NotoSerifSample} alt="NOTO SERIF REGULAR FONT" />
      <p>
        <a href="https://ocbranding.squarespace.com/s/NotoSerif.zip">
          Download Noto Serif font files
        </a>
      </p>
    </div>
  </Section>
);

export default FontsSection;
