import React from 'react';
import Section from 'shared/components/section/section';
import blueColorPalette from 'images/colors/blue-color-palette.png';
import redColorPalette from 'images/colors/red-color-palette.png';
import slateColorPalette from 'images/colors/slate-color-palette.png';
import greyColorPalette from 'images/colors/grey-color-palette.png';
import lightGreyColorPalette from 'images/colors/light-grey-color-palette.png';
import mistColorPalette from 'images/colors/mist-color-palette.png';
import styles from './colors.css';

const ColorsSection = () => (
  <Section title="Color">
    <div className={styles.colorPalette}>
      <h5>PRIMARY PALETTE</h5>
      <div className={styles.colorImages}>
        <img src={blueColorPalette} alt="Primary Blue Color Palette" />
        <p>
          BLUE<br />#249CBC
        </p>
      </div>
      <div className={styles.colorImages}>
        <img src={redColorPalette} alt="Primary Red Color Palette" />
        <p>
          RED<br />#D1665A
        </p>
      </div>
      <div className={styles.colorImages}>
        <img src={slateColorPalette} alt="Primary Slate Color Palette" />
        <p>
          SLATE<br />#47566B
        </p>
      </div>
    </div>
    <div className={styles.colorPalette}>
      <h5>TINTS</h5>
      <div className={styles.colorImages}>
        <img src={greyColorPalette} alt="Primary Grey Color Palette" />
        <p>
          GREY<br />#9BAAB5
        </p>
      </div>
      <div className={styles.colorImages}>
        <img
          src={lightGreyColorPalette}
          alt="Primary Light Grey Color Palette"
        />
        <p>
          LIGHT GREY<br />#D0D5DA
        </p>
      </div>
      <div className={styles.colorImages}>
        <img src={mistColorPalette} alt="Primary Mist Color Palette" />
        <p>
          MIST<br />#F0F2F2
        </p>
      </div>
    </div>
  </Section>
);

export default ColorsSection;
