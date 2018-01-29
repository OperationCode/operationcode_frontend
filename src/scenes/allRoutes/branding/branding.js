import React from 'react';
import LogosSection from './logos/logos';
import ColorsSection from './colors/colors';
import FontsSection from './fonts/fonts';
import styles from './branding.css';

const Branding = () => (
  <div className={styles.brandingConatiner}>
    <LogosSection />
    <ColorsSection />
    <FontsSection />
  </div>
);

export default Branding;
