import React, { Component } from 'react';
import Section from 'shared/components/section/section';
import styles from './logo.css';

class BrandingLogo extends Component {
  render() {
    return (
      <Section title="Logo">
        <p className={styles.logosInfo}>
          The size ratio between the star and the medallion changes depending
          on the size of reproduction. Please make use of the appropriate
          sized logo when creating collateral.
        </p>
        <p className={styles.logosInfo}>
          In most cases, use the blue-accent version of the logo.
          The red-accent is delivered for special uses only.
        </p>
        <div className={styles.logoImages}>
          <section className={styles.sectionPadding}>
            <h5>SMALL</h5>
            <p>For use when the medal is between 0 and 1-inch tall.</p>
            <div className={styles.marginSpace}>
              <h6>LOGO</h6>
              <div className={styles.smallLogos}>
                <div className={styles.stackLogos}>
                  <img src="./images/logos/small-blue-logo.png" alt="Blue Accent Logo" />
                  <p>Blue Accent</p>
                </div>
                <div className={styles.stackLogos}>
                  <img src="./images/logos/small-red-logo.png" alt="Red Accent Logo" />
                  <p>Red Accent</p>
                </div>
              </div>
              <div className={styles.smallLogos}>
                <div className={styles.stackLogos}>
                  <img src="./images/logos/small-logo.png" alt="No Accent Logo" />
                  <p>No Accent</p>
                </div>
                <div className={styles.stackLogos}>
                  <img src="./images/logos/small-white-logo.png" alt="White Accent Logo" />
                  <p>White Accent</p>
                </div>
              </div>
              <div className={styles.smallLogos}>
                <div className={styles.starLogos}>
                  <img src="./images/logos/small-white-logo-blue-star.png" alt="White Blue Star Logo" />
                </div>
                <div className={styles.starLogos}>
                  <img src="./images/logos/small-white-logo-red-star.png" alt="White Red Star Logo" />
                </div>
                <div className={styles.starLogos}>
                  <img src="./images/logos/small-white-logo-slate-star.png" alt="White Slate Star Logo" />
                </div>
              </div>
              <p>Star Accents</p>
            </div>
            <div className={styles.marginSpace}>
              <h6>LOGO, STACKED</h6>
              <div className={styles.smallLogos}>
                <div className={styles.stackedLogos}>
                  <img src="./images/logos/small-stacked-logo-blue.png" alt="Stacked Small Blue Logo" />
                  <p>Blue Accent</p>
                </div>
                <div className={styles.stackedLogos}>
                  <img src="./images/logos/small-stacked-logo-red.png" alt="Stacked Small Red Logo" />
                  <p>Red Accent</p>
                </div>
                <div className={styles.stackedLogos}>
                  <img src="./images/logos/small-stacked-logo.png" alt="Stacked Small Navy Logo" />
                  <p>Navy Accent</p>
                </div>
              </div>
            </div>
            <div className={styles.marginSpace}>
              <h6>MEDALS</h6>
              <div className={styles.smallMedalLogos}>
                <div className={styles.medalLogos}>
                  <img src="./images/logos/small-blue-medal.png" alt="Blue Medal" />
                  <p>Blue</p>
                </div>
                <div className={styles.medalLogos}>
                  <img src="./images/logos/small-red-medal.png" alt="Red Medal" />
                  <p>Red</p>
                </div>
                <div className={styles.medalLogos}>
                  <img src="./images/logos/small-slate-medal.png" alt="Navy Medal" />
                  <p>Navy</p>
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
                  <img src="./images/logos/large-blue-logo.png" alt="Blue Accent Logo" />
                  <p>Blue Accent</p>
                </div>
                <div className={styles.stackLogos}>
                  <img src="./images/logos/large-red-logo.png" alt="Red Accent Logo" />
                  <p>Red Accent</p>
                </div>
                <div className={styles.stackLogos}>
                  <img src="./images/logos/large-logo.png" alt="No Accent Logo" />
                  <p>No Accent</p>
                </div>
                <div className={styles.stackLogos}>
                  <img src="./images/logos/large-white-logo.png" alt="White Accent Logo" />
                  <p>White Accent</p>
                </div>
              </div>
              <div className={styles.largeLogos}>
                <div className={styles.starLogos}>
                  <img src="./images/logos/large-white-logo-blue-star.png" alt="White Blue Star Logo" />
                </div>
                <div className={styles.starLogos}>
                  <img src="./images/logos/large-white-logo-red-star.png" alt="White Red Star Logo" />
                </div>
                <div className={styles.starLogos}>
                  <img src="./images/logos/large-white-logo-slate-star.png" alt="White Slate Star Logo" />
                </div>
              </div>
              <p>Star Accents</p>
            </div>
            <div className={styles.marginSpace}>
              <h6>LOGO, STACKED</h6>
              <div className={styles.largeLogos}>
                <div className={styles.stackedLogos}>
                  <img src="./images/logos/large-stacked-logo-blue.png" alt="Stacked LARGE Blue Logo" />
                  <p>Blue Accent</p>
                </div>
                <div className={styles.stackedLogos}>
                  <img src="./images/logos/large-stacked-logo-red.png" alt="Stacked Large Red Logo" />
                  <p>Red Accent</p>
                </div>
                <div className={styles.stackedLogos}>
                  <img src="./images/logos/large-stacked-logo.png" alt="Stacked Large Navy Logo" />
                  <p>Navy Accent</p>
                </div>
              </div>
            </div>
            <div className={styles.marginSpace}>
              <h6>MEDALS</h6>
              <div className={styles.smallMedalLogos}>
                <div className={styles.medalLogos}>
                  <img src="./images/logos/small-blue-medal.png" alt="Blue Medal" />
                  <p>Blue</p>
                </div>
                <div className={styles.medalLogos}>
                  <img src="./images/logos/small-red-medal.png" alt="Red Medal" />
                  <p>Red</p>
                </div>
                <div className={styles.medalLogos}>
                  <img src="./images/logos/small-slate-medal.png" alt="Navy Medal" />
                  <p>Navy</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Section>
    );
  }
}

export default BrandingLogo;
