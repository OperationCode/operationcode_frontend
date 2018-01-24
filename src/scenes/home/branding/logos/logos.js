import React from 'react';
import Section from 'shared/components/section/section';
import smallBlueAccentLogo from 'images/logos/small-blue-logo.png';
import smallRedAccentLogo from 'images/logos/small-red-logo.png';
import smallNoAccentLogo from 'images/logos/small-logo.png';
import smallWhiteAccentLogo from 'images/logos/small-white-logo.png';
import smallWhiteStarLogo from 'images/logos/small-white-logo-blue-star.png';
import smallRedStarLogo from 'images/logos/small-white-logo-red-star.png';
import smallWhiteSlateStarLogo from 'images/logos/small-white-logo-slate-star.png';
import smallStackedBlueLogo from 'images/logos/small-stacked-logo-blue.png';
import smallStackedRedLogo from 'images/logos/small-stacked-logo-red.png';
import smallStackedSlateLogo from 'images/logos/small-stacked-logo.png';
import blueMedalLogo from 'images/logos/small-blue-medal.png';
import redMedalLogo from 'images/logos/small-red-medal.png';
import slateMedalLogo from 'images/logos/small-slate-medal.png';
import blueAccentLogo from 'images/logos/large-blue-logo.png';
import redAccentLogo from 'images/logos/large-red-logo.png';
import noAccentLogo from 'images/logos/large-logo.png';
import whiteAccentLogo from 'images/logos/large-white-logo.png';
import whiteBlueStarLogo from 'images/logos/large-white-logo-blue-star.png';
import whiteRedStarLogo from 'images/logos/large-white-logo-red-star.png';
import whiteSlateStarLogo from 'images/logos/large-white-logo-slate-star.png';
import largeBlueLogo from 'images/logos/large-stacked-logo-blue.png';
import largeRedLogo from 'images/logos/large-stacked-logo-red.png';
import largeSlateLogo from 'images/logos/large-stacked-logo.png';
import styles from './logos.css';

const LogosSection = () => (
  <Section title="Logo">
    <p className={styles.logosInfo}>
      The size ratio between the star and the medallion changes depending on the
      size of reproduction. Please make use of the appropriate sized logo when
      creating collateral.
    </p>
    <p className={styles.logosInfo}>
      In most cases, use the blue-accent version of the logo. The red-accent is
      delivered for special uses only.
    </p>
    <p className={styles.logosInfo}>
      <a href="https://ocbranding.squarespace.com/s/Operation-Code-Logo.eps">
        Download master EPS file
      </a>
    </p>
    <p className={styles.logosInfo}>
      The files below are transparent PNGs. Click-and-drag (or for mobile,
      press-and-hold) them directly from your browser to download the file.
    </p>
    <div className={styles.logoImages}>
      <section className={styles.sectionPadding}>
        <h5>SMALL</h5>
        <p>For use when the medal is between 0 and 1-inch tall.</p>
        <div className={styles.marginSpace}>
          <h6>LOGO</h6>
          <div className={styles.smallLogos}>
            <div className={styles.stackLogos}>
              <img src={smallBlueAccentLogo} alt="Blue Accent Logo" />
              <p>Blue Accent</p>
            </div>
            <div className={styles.stackLogos}>
              <img src={smallRedAccentLogo} alt="Red Accent Logo" />
              <p>Red Accent</p>
            </div>
          </div>
          <div className={styles.smallLogos}>
            <div className={styles.stackLogos}>
              <img src={smallNoAccentLogo} alt="No Accent Logo" />
              <p>No Accent</p>
            </div>
            <div className={styles.stackLogos}>
              <img src={smallWhiteAccentLogo} alt="White Accent Logo" />
              <p>White Accent</p>
            </div>
          </div>
          <div className={styles.smallLogos}>
            <div className={styles.starLogos}>
              <img src={smallWhiteStarLogo} alt="White Blue Star Logo" />
            </div>
            <div className={styles.starLogos}>
              <img src={smallRedStarLogo} alt="White Red Star Logo" />
            </div>
            <div className={styles.starLogos}>
              <img src={smallWhiteSlateStarLogo} alt="White Slate Star Logo" />
            </div>
          </div>
          <p>Star Accents</p>
        </div>
        <div className={styles.marginSpace}>
          <h6>LOGO, STACKED</h6>
          <div className={styles.smallLogos}>
            <div className={styles.stackedLogos}>
              <img src={smallStackedBlueLogo} alt="Stacked Small Blue Logo" />
              <p>Blue Accent</p>
            </div>
            <div className={styles.stackedLogos}>
              <img src={smallStackedRedLogo} alt="Stacked Small Red Logo" />
              <p>Red Accent</p>
            </div>
            <div className={styles.stackedLogos}>
              <img src={smallStackedSlateLogo} alt="Stacked Small Slate Logo" />
              <p>Slate Accent</p>
            </div>
          </div>
        </div>
        <div className={styles.marginSpace}>
          <h6>MEDALS</h6>
          <div className={styles.smallMedalLogos}>
            <div className={styles.medalLogos}>
              <img src={blueMedalLogo} alt="Blue Medal" />
              <p>Blue</p>
            </div>
            <div className={styles.medalLogos}>
              <img src={redMedalLogo} alt="Red Medal" />
              <p>Red</p>
            </div>
            <div className={styles.medalLogos}>
              <img src={slateMedalLogo} alt="Slate Medal" />
              <p>Slate</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionPadding}>
        <h5>LARGE</h5>
        <p>For use when the medal is above 1-inch tall.</p>
        <div className={styles.marginSpace}>
          <h6>LOGO</h6>
          <div className={styles.largeLogos}>
            <div className={styles.stackLogos}>
              <img src={blueAccentLogo} alt="Blue Accent Logo" />
              <p>Blue Accent</p>
            </div>
            <div className={styles.stackLogos}>
              <img src={redAccentLogo} alt="Red Accent Logo" />
              <p>Red Accent</p>
            </div>
            <div className={styles.stackLogos}>
              <img src={noAccentLogo} alt="No Accent Logo" />
              <p>No Accent</p>
            </div>
            <div className={styles.stackLogos}>
              <img src={whiteAccentLogo} alt="White Accent Logo" />
              <p>White Accent</p>
            </div>
          </div>
          <div className={styles.largeLogos}>
            <div className={styles.starLogos}>
              <img src={whiteBlueStarLogo} alt="White Blue Star Logo" />
            </div>
            <div className={styles.starLogos}>
              <img src={whiteRedStarLogo} alt="White Red Star Logo" />
            </div>
            <div className={styles.starLogos}>
              <img src={whiteSlateStarLogo} alt="White Slate Star Logo" />
            </div>
          </div>
          <p>Star Accents</p>
        </div>
        <div className={styles.marginSpace}>
          <h6>LOGO, STACKED</h6>
          <div className={styles.largeLogos}>
            <div className={styles.stackedLogos}>
              <img src={largeBlueLogo} alt="Stacked LARGE Blue Logo" />
              <p>Blue Accent</p>
            </div>
            <div className={styles.stackedLogos}>
              <img src={largeRedLogo} alt="Stacked Large Red Logo" />
              <p>Red Accent</p>
            </div>
            <div className={styles.stackedLogos}>
              <img src={largeSlateLogo} alt="Stacked Large Slate Logo" />
              <p>Slate Accent</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Section>
);

export default LogosSection;
